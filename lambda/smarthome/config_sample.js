/**
 * Copyright (c) 2010-2019 Contributors to the openHAB project
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0
 *
 * SPDX-License-Identifier: EPL-2.0
 */

/**
* Default options, copy to config.js for deployment
* baseURL
*    REST base URL 
* userpass
*    Optional username:password for the REST server
*    by default oauth2 tokens will be used for authentication, uncomment this
*    to use standard BASIC auth when talking directly to a openHAB server.
*
**/
module.exports = {
    openhab: {
        //userpass: 'user@foo.com:Password1',
        baseURL: 'https://myopenhab.org/rest'
    }
};
