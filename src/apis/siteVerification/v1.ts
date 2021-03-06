/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace siteVerification_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * Google Site Verification API
   *
   * Verifies ownership of websites or domains with Google.
   *
   * @example
   * const {google} = require('googleapis');
   * const siteVerification = google.siteVerification('v1');
   *
   * @namespace siteVerification
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Siteverification
   */
  export class Siteverification {
    _options: GlobalOptions;
    google: GoogleConfigurable;
    root = this;

    webResource: Resource$Webresource;

    constructor(options: GlobalOptions, google: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.webResource = new Resource$Webresource(this);
    }

    getRoot() {
      return this.root;
    }
  }

  export interface Schema$SiteVerificationWebResourceGettokenRequest {
    /**
     * The site for which a verification token will be generated.
     */
    site?: any;
    /**
     * The verification method that will be used to verify this site. For sites,
     * &#39;FILE&#39; or &#39;META&#39; methods may be used. For domains, only
     * &#39;DNS&#39; may be used.
     */
    verificationMethod?: string;
  }
  export interface Schema$SiteVerificationWebResourceGettokenResponse {
    /**
     * The verification method to use in conjunction with this token. For FILE,
     * the token should be placed in the top-level directory of the site, stored
     * inside a file of the same name. For META, the token should be placed in
     * the HEAD tag of the default page that is loaded for the site. For DNS,
     * the token should be placed in a TXT record of the domain.
     */
    method?: string;
    /**
     * The verification token. The token must be placed appropriately in order
     * for verification to succeed.
     */
    token?: string;
  }
  export interface Schema$SiteVerificationWebResourceListResponse {
    /**
     * The list of sites that are owned by the authenticated user.
     */
    items?: Schema$SiteVerificationWebResourceResource[];
  }
  export interface Schema$SiteVerificationWebResourceResource {
    /**
     * The string used to identify this site. This value should be used in the
     * &quot;id&quot; portion of the REST URL for the Get, Update, and Delete
     * operations.
     */
    id?: string;
    /**
     * The email addresses of all verified owners.
     */
    owners?: string[];
    /**
     * The address and type of a site that is verified or will be verified.
     */
    site?: any;
  }


  export class Resource$Webresource {
    root: Siteverification;
    constructor(root: Siteverification) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * siteVerification.webResource.delete
     * @desc Relinquish ownership of a website or domain.
     * @alias siteVerification.webResource.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id of a verified site or domain.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Webresource$Delete,
        options?: MethodOptions): AxiosPromise<void>;
    delete(
        params: Params$Resource$Webresource$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Webresource$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Webresource$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Webresource$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Webresource$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/siteVerification/v1/webResource/{id}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * siteVerification.webResource.get
     * @desc Get the most current data for a website or domain.
     * @alias siteVerification.webResource.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id of a verified site or domain.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Webresource$Get, options?: MethodOptions):
        AxiosPromise<Schema$SiteVerificationWebResourceResource>;
    get(params: Params$Resource$Webresource$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
        callback:
            BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
        void;
    get(params: Params$Resource$Webresource$Get,
        callback:
            BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
        void;
    get(callback:
            BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
        void;
    get(paramsOrCallback?: Params$Resource$Webresource$Get|
        BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
        callback?:
            BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
        void|AxiosPromise<Schema$SiteVerificationWebResourceResource> {
      let params = (paramsOrCallback || {}) as Params$Resource$Webresource$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Webresource$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/siteVerification/v1/webResource/{id}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SiteVerificationWebResourceResource>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$SiteVerificationWebResourceResource>(
            parameters);
      }
    }


    /**
     * siteVerification.webResource.getToken
     * @desc Get a verification token for placing on a website or domain.
     * @alias siteVerification.webResource.getToken
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SiteVerificationWebResourceGettokenRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getToken(
        params?: Params$Resource$Webresource$Gettoken, options?: MethodOptions):
        AxiosPromise<Schema$SiteVerificationWebResourceGettokenResponse>;
    getToken(
        params: Params$Resource$Webresource$Gettoken,
        options: MethodOptions|BodyResponseCallback<
            Schema$SiteVerificationWebResourceGettokenResponse>,
        callback: BodyResponseCallback<
            Schema$SiteVerificationWebResourceGettokenResponse>): void;
    getToken(
        params: Params$Resource$Webresource$Gettoken,
        callback: BodyResponseCallback<
            Schema$SiteVerificationWebResourceGettokenResponse>): void;
    getToken(callback: BodyResponseCallback<
             Schema$SiteVerificationWebResourceGettokenResponse>): void;
    getToken(
        paramsOrCallback?: Params$Resource$Webresource$Gettoken|
        BodyResponseCallback<
            Schema$SiteVerificationWebResourceGettokenResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$SiteVerificationWebResourceGettokenResponse>,
        callback?: BodyResponseCallback<
            Schema$SiteVerificationWebResourceGettokenResponse>):
        void|AxiosPromise<Schema$SiteVerificationWebResourceGettokenResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Webresource$Gettoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Webresource$Gettoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/siteVerification/v1/token')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SiteVerificationWebResourceGettokenResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$SiteVerificationWebResourceGettokenResponse>(parameters);
      }
    }


    /**
     * siteVerification.webResource.insert
     * @desc Attempt verification of a website or domain.
     * @alias siteVerification.webResource.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.verificationMethod The method to use for verifying a site or domain.
     * @param {().SiteVerificationWebResourceResource} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
        params?: Params$Resource$Webresource$Insert, options?: MethodOptions):
        AxiosPromise<Schema$SiteVerificationWebResourceResource>;
    insert(
        params: Params$Resource$Webresource$Insert,
        options: MethodOptions|
        BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
        callback:
            BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
        void;
    insert(
        params: Params$Resource$Webresource$Insert,
        callback:
            BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
        void;
    insert(
        callback:
            BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
        void;
    insert(
        paramsOrCallback?: Params$Resource$Webresource$Insert|
        BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
        callback?:
            BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
        void|AxiosPromise<Schema$SiteVerificationWebResourceResource> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Webresource$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Webresource$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/siteVerification/v1/webResource')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['verificationMethod'],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SiteVerificationWebResourceResource>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$SiteVerificationWebResourceResource>(
            parameters);
      }
    }


    /**
     * siteVerification.webResource.list
     * @desc Get the list of your verified websites and domains.
     * @alias siteVerification.webResource.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Webresource$List, options?: MethodOptions):
        AxiosPromise<Schema$SiteVerificationWebResourceListResponse>;
    list(
        params: Params$Resource$Webresource$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$SiteVerificationWebResourceListResponse>,
        callback: BodyResponseCallback<
            Schema$SiteVerificationWebResourceListResponse>): void;
    list(
        params: Params$Resource$Webresource$List,
        callback: BodyResponseCallback<
            Schema$SiteVerificationWebResourceListResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$SiteVerificationWebResourceListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Webresource$List|
        BodyResponseCallback<Schema$SiteVerificationWebResourceListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SiteVerificationWebResourceListResponse>,
        callback?: BodyResponseCallback<
            Schema$SiteVerificationWebResourceListResponse>):
        void|AxiosPromise<Schema$SiteVerificationWebResourceListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Webresource$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Webresource$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/siteVerification/v1/webResource')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SiteVerificationWebResourceListResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$SiteVerificationWebResourceListResponse>(
            parameters);
      }
    }


    /**
     * siteVerification.webResource.patch
     * @desc Modify the list of owners for your website or domain. This method
     * supports patch semantics.
     * @alias siteVerification.webResource.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id of a verified site or domain.
     * @param {().SiteVerificationWebResourceResource} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: Params$Resource$Webresource$Patch, options?: MethodOptions):
        AxiosPromise<Schema$SiteVerificationWebResourceResource>;
    patch(
        params: Params$Resource$Webresource$Patch,
        options: MethodOptions|
        BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
        callback:
            BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
        void;
    patch(
        params: Params$Resource$Webresource$Patch,
        callback:
            BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
        void;
    patch(callback:
              BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
        void;
    patch(
        paramsOrCallback?: Params$Resource$Webresource$Patch|
        BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
        callback?:
            BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
        void|AxiosPromise<Schema$SiteVerificationWebResourceResource> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Webresource$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Webresource$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/siteVerification/v1/webResource/{id}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SiteVerificationWebResourceResource>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$SiteVerificationWebResourceResource>(
            parameters);
      }
    }


    /**
     * siteVerification.webResource.update
     * @desc Modify the list of owners for your website or domain.
     * @alias siteVerification.webResource.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id of a verified site or domain.
     * @param {().SiteVerificationWebResourceResource} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
        params?: Params$Resource$Webresource$Update, options?: MethodOptions):
        AxiosPromise<Schema$SiteVerificationWebResourceResource>;
    update(
        params: Params$Resource$Webresource$Update,
        options: MethodOptions|
        BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
        callback:
            BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
        void;
    update(
        params: Params$Resource$Webresource$Update,
        callback:
            BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
        void;
    update(
        callback:
            BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
        void;
    update(
        paramsOrCallback?: Params$Resource$Webresource$Update|
        BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
        callback?:
            BodyResponseCallback<Schema$SiteVerificationWebResourceResource>):
        void|AxiosPromise<Schema$SiteVerificationWebResourceResource> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Webresource$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Webresource$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/siteVerification/v1/webResource/{id}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SiteVerificationWebResourceResource>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$SiteVerificationWebResourceResource>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Webresource$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The id of a verified site or domain.
     */
    id?: string;
  }
  export interface Params$Resource$Webresource$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The id of a verified site or domain.
     */
    id?: string;
  }
  export interface Params$Resource$Webresource$Gettoken {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$SiteVerificationWebResourceGettokenRequest;
  }
  export interface Params$Resource$Webresource$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The method to use for verifying a site or domain.
     */
    verificationMethod?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SiteVerificationWebResourceResource;
  }
  export interface Params$Resource$Webresource$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;
  }
  export interface Params$Resource$Webresource$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The id of a verified site or domain.
     */
    id?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SiteVerificationWebResourceResource;
  }
  export interface Params$Resource$Webresource$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The id of a verified site or domain.
     */
    id?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SiteVerificationWebResourceResource;
  }
}
