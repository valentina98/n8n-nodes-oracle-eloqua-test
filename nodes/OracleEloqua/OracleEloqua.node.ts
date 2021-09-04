import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import {
	contactFields,
	contactOperations,
} from './ContactDescription';

import {
	GetBaseUrl,
	OracleEloquaApiRequest
} from "./GnericFunctions";

export class OracleEloqua implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OracleEloqua',
		name: 'oracleEloqua',
		icon: 'file:oracleEloqua.png',
		group: ['transform'],
		version: 1,
		description: 'Consume OracleEloqua API',
		defaults: {
				name: 'OracleEloqua',
				color: '#1A82e2',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'oracleEloquaHttpBasicAuth',
				required: true,
				displayOptions: {
					show: {
						authentication: [
							'httpBasicAuth',
						],
					},
				},
			},
			{
				name: 'oracleEloquaOAuth2Api',
				required: true,
				displayOptions: {
					show: {
						authentication: [
							'oAuth2',
						],
					},
				},
			},
		],
		properties: [
			// Node properties which the user gets displayed and
			// can change on the node.
			{
				displayName: 'Authentication',
				name: 'authentication',
				type: 'options',
				options: [
					{
						name: 'Basic Authentication',
						value: 'httpBasicAuth',
					},
					{
						name: 'OAuth2',
						value: 'oAuth2',
					},
				],
				default: 'apiToken',
				description: 'The resource to operate on.',
			},
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
					{
						name: 'Contact',
						value: 'contact',
					},
				],
				default: 'contact',
				required: true,
				description: 'Resource to consume.',
			},
			...contactOperations,
			...contactFields,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: IDataObject[] = [];

		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		let endpoint = '';
		let method = '';

		let body: IDataObject;
		let qs: IDataObject;
		let responseData;

		const baseURL = await GetBaseUrl.call(this);

		for (let i = 0; i < items.length; i++) {
			try {
				body = {};
				qs =  {};

				if (resource === 'contact') {
					if (operation === 'create') {
						/* -------------------------------------------------------------------------- */
						/*                                 contact:create                         		*/
						/* -------------------------------------------------------------------------- */
						const email = this.getNodeParameter('emailAddress', i) as IDataObject;
						body.emailAddress = email;

						// Get additional fields input and assign them to 'body'
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
						Object.assign(body, additionalFields);

						method = 'POST';
						endpoint = `/API/REST/1.0/data/contact`;


						responseData = await OracleEloquaApiRequest.call(this, method, baseURL, endpoint, body, qs);
					} else if (operation === 'delete') {
						/* -------------------------------------------------------------------------- */
						/*                                 contact:delete                         	*/
						/* -------------------------------------------------------------------------- */
						const id = this.getNodeParameter('id', i) as string;

						const	method = 'DELETE';
						const endpoint = `/API/REST/1.0/data/contact/${id}`;

						responseData = await OracleEloquaApiRequest.call(this, method, baseURL, endpoint, body, qs);
					} else if (operation === 'retrieve') {
						/* -------------------------------------------------------------------------- */
						/*                                 contact:retrieve                         	*/
						/* -------------------------------------------------------------------------- */
						const id = this.getNodeParameter('id', i) as string;

						// Get additional fields input and assign them to 'qs'
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
						Object.assign(qs, additionalFields);

						const	method = 'GET';
						const endpoint = `/API/REST/1.0/data/contact/${id}`;

						responseData = await OracleEloquaApiRequest.call(this, method, baseURL, endpoint, body, qs);
					} else if (operation === 'retrieveAll') {
						/* -------------------------------------------------------------------------- */
						/*                                 contact:retrieveAll                      	*/
						/* -------------------------------------------------------------------------- */

						// Get additional fields input and assign them to 'qs'
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
						Object.assign(qs, additionalFields);

						const	method = 'GET';
						const endpoint = `/API/REST/1.0/data/contacts`;


						responseData = await OracleEloquaApiRequest.call(this, method, baseURL, endpoint, body, qs);
						responseData = responseData.elements;
					} else { // if (operation === 'update')
						/* -------------------------------------------------------------------------- */
						/*                                 contact:update                      				*/
						/* -------------------------------------------------------------------------- */
						const id = this.getNodeParameter('id', i) as string;
						const email = this.getNodeParameter('emailAddress', i) as string;
						body.id = id;
						body.emailAddress = email;

						// Get additional fields input and assign them to 'body'
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
						Object.assign(body, additionalFields);

						const	method = 'PUT';
						const endpoint = `/API/REST/1.0/data/contact/${id}`;

						responseData = await OracleEloquaApiRequest.call(this, method, baseURL, endpoint, body, qs);
					}
				}

				if (Array.isArray(responseData)) {
					returnData.push.apply(returnData, responseData as IDataObject[]);
				} else {
					returnData.push(responseData);
				}
			} catch (error) {
				// if (this.continueOnFail()) {
				// 	returnData.push({ error: error.message });
				// 	continue;
				// }
				throw new Error(error);
			}
		}
		// Map data to n8n data structure

		return [this.helpers.returnJsonArray(returnData)];
	}
}

