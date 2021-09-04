import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class OracleEloquaOAuth2Api implements ICredentialType {
	name = 'oracleEloquaOAuth2Api';
	extends = [
		'oAuth2Api',
	];
	displayName = 'Oracle Eloqua OAuth2 API';
	documentationUrl = 'oracleEloqua';
	properties: INodeProperties[] = [
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'string',
			default: 'https://login.eloqua.com/auth/oauth2/authorize',
			required: true,
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'string',
			default: 'https://login.eloqua.com/auth/oauth2/token',
			required: true,
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'string',
			default: 'body',
			description: 'Resource to consume.',
		},
	];
}
