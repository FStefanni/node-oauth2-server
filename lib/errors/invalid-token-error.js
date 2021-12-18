'use strict';

/**
 * Module dependencies.
 */

const OAuthError = require('./oauth-error');
const util = require('util');

/**
 * Constructor.
 *
 * "The access token provided is expired, revoked, malformed, or invalid for other reasons."
 *
 * @see https://tools.ietf.org/html/rfc6750#section-3.1
 */

class InvalidTokenError extends OAuthError {
	constructor(message, properties) {
		properties = Object.assign(
			{
				code: 401,
				name: 'invalid_token',
			},
			properties
		);

		super(message, properties);
	}
}

/**
 * Export constructor.
 */

module.exports = InvalidTokenError;
