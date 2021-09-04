import {
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
} from 'n8n-core';

import {
	OptionsWithUri,
} from 'request';

/**
 * Make an API request to Oracle Eloqua
 *
 * @param {IHookFunctions} this
 * @param {string} method
 * @param {string} baseURL
 * @param {string} endpoint
 * @param {string} body
 * @param {string} qs
 * @param {object} uri
 * @returns {Promise<any>}
 */
export async function OracleEloquaApiRequest(this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions, method: string, baseURL: string, endpoint: string, body: object, qs?: object, uri?: string | undefined): Promise<any> { // tslint:disable-line:no-any


	// let queryParamsString = '';
	// // build query params string according to <https://docs.oracle.com/en/cloud/saas/marketing/eloqua-develop/Developers/GettingStarted/APIRequests/URL-parameters.htm>
	//
	// for (const [key, value] of Object.entries(qs)) {
	// 	if(queryParamsString === '') {
	// 		queryParamsString += `?${key}=${value}`;
	// 	} else {
	// 		queryParamsString += `&${key}=${value}`;
	// 	}
	// } // todo: query parameters


	const options: OptionsWithUri = {
		headers: {},
		method,
		body,
		qs,
		uri: uri || `${baseURL}${endpoint}`,
		json: true,
	};

	const authenticationMethod = this.getNodeParameter('authentication', 0) as string;

	try {
		if (authenticationMethod === 'httpBasicAuth') {
			// Authentication according to <https://docs.oracle.com/en/cloud/saas/marketing/eloqua-rest-api/Authentication_Auth.html>
			const credentials = await this.getCredentials('oracleEloquaHttpBasicAuth');

			if (credentials === undefined) {
				throw new Error('No credentials got returned!');
			}

			const token = Buffer.from(`${credentials.siteName}\\${credentials.user}:${credentials.password}`).toString('base64');

			options.headers!['Authorization'] = `Basic ${token}`;

			return await this.helpers.request!(options);
		} else {
			// Authentication according to <https://docs.oracle.com/en/cloud/saas/marketing/eloqua-rest-api/Authentication_Basic.html>
			const credentials = await this.getCredentials('oracleEloquaHttpBasicAuth');

			if (credentials === undefined) {
				throw new Error('No credentials got returned!');
			}

			options.headers!['Authorization'] = `Bearer ${credentials.accessToken}`; // todo

			return await this.helpers.request!(options);

			//@ts-ignore
			// return await this.helpers.requestOAuth2.call(this, 'oracleEloquaOAuth2Api', options);
		}
	} catch (error) {
		throw new Error(error);
	}


}

// Determine base URL according to <https://docs.oracle.com/en/cloud/saas/marketing/eloqua-develop/Developers/GettingStarted/Tutorials/determining-base-URLs.htm>
export async function GetBaseUrl(this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions): Promise<string> {
	try {
		let responseData;

		const method = 'GET';
		const baseURL = '';
		const endpoint = '';
		const body = {};
		const qs = {};
		const uri = 'https://login.eloqua.com/id';

		responseData = await OracleEloquaApiRequest.call(this, method, baseURL, endpoint, body, qs, uri);
		// responseData = responseData.data;

		return responseData.urls.base;

	} catch (error) {
		throw new Error(error);
	}
}