import {
	INodeProperties,
} from 'n8n-workflow';

export const contactOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'contact',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Creates a contact that matches the criteria specified by the request body.',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Deletes a contact specified by the id parameter.',
			},
			{
				name: 'Retrieve',
				value: 'retrieve',
				description: 'Retrieves the contact specified by the id parameter.',
			},
			{
				name: 'Retrieve All',
				value: 'retrieveAll',
				description: 'Retrieves all contacts that match the criteria specified by the request parameters.',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a contact',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
] as INodeProperties[];


export const contactFields = [
	/* -------------------------------------------------------------------------- */
	/*                                 contact:create                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Email Address',
		name: 'emailAddress',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'contact',
				],
				operation: [
					'create',
				],
			},
		},
		description:'The contact\'s email address.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'contact',
				],
				operation: [
					'create',
				],
			},
		},
		options: [
			{
				displayName: 'Account Name',
				name: 'accountName',
				type: 'string',
				default: '',
				description:'The account name in which the contact belongs.',
			},
			{
				displayName: 'Address 1',
				name: 'address1',
				type: 'string',
				default: '',
				description:'The contact\'s first address.',
			},
			{
				displayName: 'Address 2',
				name: 'address2',
				type: 'string',
				default: '',
				description:'The contact\'s second address.',
			},
			{
				displayName: 'Address 3',
				name: 'address3',
				type: 'string',
				default: '',
				description:'The contact\'s third address.',
			},
			{
				displayName: 'Bounceback Date',
				name: 'bouncebackDate',
				type: 'string',
				default: '',
				description:'The contact\'s bounceback date.',
			},
			{
				displayName: 'Business Phone',
				name: 'businessPhone',
				type: 'string',
				default: '',
				description:'The contact\'s business phone number.',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				description:'The contact\'s city.',
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
				description:'The contact\'s country.',
			},
			{
				displayName: 'Current Status',
				name: 'currentStatus',
				type: 'string',
				default: '',
				description:'The contact\'s current status.',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description:'The description of the contact.',
			},
			{
				displayName: 'Email Format Preference',
				name: 'emailFormatPreference',
				type: 'string',
				default: '',
				description:'The contact\'s email format preference.',
			},
			{
				displayName: 'Fax',
				name: 'fax',
				type: 'string',
				default: '',
				description:'The contact\'s fax number.',
			},
			{
				displayName: 'Field Values',
				name: 'fieldValues',
				type: 'collection',
				placeholder: 'Add Item',
				default: {},
				description:'Array containing type and id values for all of the contactFields associated with a given contact.',
				options: [
					{
						displayName: 'Type',
						name: 'type',
						type: 'string',
						default: '',
						description:'The asset\'s type in Eloqua.This is a read-only property.',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The value to set the corresponding field id to. Date values must be submitted as a unix timestamp.',
					},
				],
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				description:'The contact\'s first name.',
			},
			{
				displayName: 'Is Bounceback',
				name: 'isBounceback',
				type: 'string',
				default: '',
				description:'Whether or not the contact has any associated bouncebacks.',
			},
			{
				displayName: 'Is Subscribed',
				name: 'isSubscribed',
				type: 'string',
				default: '',
				description:'Whether or not the contact is subscribed.',
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				description:'The contact\'s last name.',
			},
			{
				displayName: 'Mobile Phone',
				name: 'mobilePhone',
				type: 'string',
				default: '',
				description:'The contact\'s mobile phone number.',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description:'The name of the contact.',
			},
			{
				displayName: 'Postal Code',
				name: 'postalCode',
				type: 'string',
				default: '',
				description:'The contact\'s postal code.',
			},
			{
				displayName: 'Province',
				name: 'province',
				type: 'string',
				default: '',
				description:'The contact\'s province.',
			},
			{
				displayName: 'SalesPerson',
				name: 'salesPerson',
				type: 'string',
				default: '',
				description:'The contact\'s account representative.',
			},
			{
				displayName: 'Subscription Date',
				name: 'subscriptionDate',
				type: 'string',
				default: '',
				description:'The contact\'s subscription date.',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description:'The contact\'s title.',
			},
			{
				displayName: 'Unsubscription Date',
				name: 'unsubscriptionDate',
				type: 'string',
				default: '',
				description:'The contact\'s unsubscription date.',
			},
		],
	},

	/* -------------------------------------------------------------------------- */
	/*                                 contact:delete                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		required: true, // todo: on number required does not show like mandatory
		displayOptions: {
			show: {
				resource: [
					'contact',
				],
				operation: [
					'delete',
				],
			},
		},
		description:'Id of the contact',
	},
	/* -------------------------------------------------------------------------- */
	/*                                 contact:retrieve                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'contact',
				],
				operation: [
					'retrieve',
				],
			},
		},
		description:'Id of the contact',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'contact',
				],
				operation: [
					'retrieve',
				],
			},
		},
		options: [
			{
				displayName: 'Depth',
				name: 'depth',
				type: 'options',
				options: [
					{
						name: 'Minimal',
						value: 'minimal',
						description: 'Only a small number of the entity\'s properties are returned. Most properties common to most records: the entity name, type and id, and the dates the entity was created, last updated and last accessed.',
					},
					{
						name: 'Partial',
						value: 'partial',
						description: 'All of the entity\'s properties are returned and if the entity is related to other objects, those entities are returned at minimal depth.',
					},
					{
						name: 'Complete',
						value: 'complete',
						description: 'All of the entity\'s properties are returned and all related entities are returned at complete depth.',
					},
				],
				default: 'complete',
				description: 'Level of detail returned by the request.',
			},
			{
				displayName: 'View ID', // todo: does not work on click
				name: 'viewId',
				type: 'number',
				description: 'Id of the contact view.',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                 contact:retrieveAll                        */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'contact',
				],
				operation: [
					'retrieveAll',
				],
			},
		},
		options: [
			{
				displayName: 'Count',
				name: 'count',
				type: 'number',
				typeOptions: {
					maxValue: 1000,
					minValue: 1,
					numberStepSize: 1,
				},
				default: 20,
				description: 'Maximum number of entities to return. Must be less than or equal to 1000 and greater than or equal to 1.',
			},
			{
				displayName: 'Depth',
				name: 'depth',
				type: 'options',
				options: [
					{
						name: 'Minimal',
						value: 'minimal',
						description: 'Only a small number of the entity\'s properties are returned. Most properties common to most records: the entity name, type and id, and the dates the entity was created, last updated and last accessed.',
					},
					{
						name: 'Partial',
						value: 'partial',
						description: 'All of the entity\'s properties are returned and if the entity is related to other objects, those entities are returned at minimal depth.',
					},
					{
						name: 'Complete',
						value: 'complete',
						description: 'All of the entity\'s properties are returned and all related entities are returned at complete depth.',
					},
				],
				default: 'complete',
				description:'Level of detail returned by the request.',
			},
			{
				displayName: 'Order By',
				name: 'orderBy',
				type: 'string',
				default: '',
				description: 'Specifies the field by which list results are ordered.',
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				description: 'Specifies which page of entities to return (the count parameter defines the number of entities per page). If the page parameter is not supplied, 1 will be used by default.',
			},
			{
				displayName: 'Search',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Specifies the search criteria used to retrieve entities.',
			},
			{
				displayName: 'View ID',  // todo: does not work on click
				name: 'viewId',
				type: 'number',
				description: 'Id of the contact view to filter results. Must be a valid contact view id. Example: ?viewId=100006.',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                 contact:update                        			*/
	/* -------------------------------------------------------------------------- */
		{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'contact',
				],
				operation: [
					'update',
				],
			},
		},
		description:'Id of the contact',
	},
	{
		displayName: 'Email Address',
		name: 'emailAddress',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'contact',
				],
				operation: [
					'update',
				],
			},
		},
		description:'The contact\'s email address.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'contact',
				],
				operation: [
					'update',
				],
			},
		},
		options: [
			{
				displayName: 'Account Name',
				name: 'accountName',
				type: 'string',
				default: '',
				description:'The account name in which the contact belongs.',
			},
			{
				displayName: 'Address 1',
				name: 'address1',
				type: 'string',
				default: '',
				description:'The contact\'s first address.',
			},
			{
				displayName: 'Address 2',
				name: 'address2',
				type: 'string',
				default: '',
				description:'The contact\'s second address.',
			},
			{
				displayName: 'Address 3',
				name: 'address3',
				type: 'string',
				default: '',
				description:'The contact\'s third address.',
			},
			{
				displayName: 'Bounceback Date',
				name: 'bouncebackDate',
				type: 'string',
				default: '',
				description:'The contact\'s bounceback date.',
			},
			{
				displayName: 'Business Phone',
				name: 'businessPhone',
				type: 'string',
				default: '',
				description:'The contact\'s business phone number.',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				description:'The contact\'s city.',
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
				description:'The contact\'s country.',
			},
			{
				displayName: 'Current Status',
				name: 'currentStatus',
				type: 'string',
				default: '',
				description:'The contact\'s current status.',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description:'The description of the contact.',
			},
			{
				displayName: 'Email Address',
				name: 'emailAddress',
				type: 'string',
				default: '',
				description:'The contact\'s email address.',
			},
			{
				displayName: 'Email Format Preference',
				name: 'emailFormatPreference',
				type: 'string',
				default: '',
				description:'The contact\'s email format preference.',
			},
			{
				displayName: 'Fax',
				name: 'fax',
				type: 'string',
				default: '',
				description:'The contact\'s fax number.',
			},

			{
				displayName: 'Field Values',
				name: 'filters',
				type: 'collection',
				placeholder: 'Add Item',
				default: {},
				description:'Array containing type and id values for all of the contactFields associated with a given contact.',
				options: [
					{
						displayName: 'Type',
						name: 'type',
						type: 'string',
						default: '',
						description:'The asset\'s type in Eloqua.This is a read-only property.',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The value to set the corresponding field id to. Date values must be submitted as a unix timestamp.',
					},
				],
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				description:'The contact\'s first name.',
			},
			{
				displayName: 'Is Bounceback',
				name: 'isBounceback',
				type: 'string',
				default: '',
				description:'Whether or not the contact has any associated bouncebacks.',
			},
			{
				displayName: 'Is Subscribed',
				name: 'isSubscribed',
				type: 'string',
				default: '',
				description:'Whether or not the contact is subscribed.',
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				description:'The contact\'s last name.',
			},
			{
				displayName: 'Mobile Phone',
				name: 'mobilePhone',
				type: 'string',
				default: '',
				description:'The contact\'s mobile phone number.',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description:'The name of the contact.',
			},
			{
				displayName: 'Postal Code',
				name: 'postalCode',
				type: 'string',
				default: '',
				description:'The contact\'s postal code.',
			},
			{
				displayName: 'Province',
				name: 'province',
				type: 'string',
				default: '',
				description:'The contact\'s province.',
			},
			{
				displayName: 'SalesPerson',
				name: 'salesPerson',
				type: 'string',
				default: '',
				description:'The contact\'s account representative.',
			},
			{
				displayName: 'Subscription Date',
				name: 'subscriptionDate',
				type: 'string',
				default: '',
				description:'The contact\'s subscription date.',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description:'The contact\'s title.',
			},
			{
				displayName: 'Unsubscription Date',
				name: 'unsubscriptionDate',
				type: 'string',
				default: '',
				description:'The contact\'s unsubscription date.',
			},
		],
	},
] as INodeProperties[];

