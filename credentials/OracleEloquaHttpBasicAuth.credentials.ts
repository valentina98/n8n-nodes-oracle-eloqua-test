import {
	ICredentialType,
	NodePropertyTypes,
	INodeProperties,
} from 'n8n-workflow';

export class OracleEloquaHttpBasicAuth implements ICredentialType {
	name = 'oracleEloquaHttpBasicAuth';
	extends = [
		'httpBasicAuth',
	];
	displayName = 'OracleEloqua Basic Authentication';
	documentationUrl = 'oracleEloqua';
	properties: INodeProperties[] = [
		{
			displayName: 'Site Name',
			name: 'siteName',
			type: 'string',// as NodePropertyTypes,
			default: '',
		},
		{
			displayName: 'User',
			name: 'user',
			type: 'string',// as NodePropertyTypes,
			default: '',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',// as NodePropertyTypes,
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];
}
