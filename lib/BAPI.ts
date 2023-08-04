"use strict"

/**
 * BAPI - Official B-Social API Wrapper
 * Author - MrBisquit (blog.wtdawson.info) for Banana Software
 * License - MIT
 * GitHub - https://github.com/banana-software/bapi
 * NPM - https://github.com/package/bapi
 */

import axios, { AxiosInstance } from 'axios';
import { invalidParameter } from "./exceptions";
import { BAPI_AuthorisationFlow, BAPI_NewAuthorisationFlow_Options, BAPI_ExistingAuthrosationFlow_Options, BAPI_AuthrisationFlowScopes } from "./Authorisation";

class BAPI_main {
    private instance:AxiosInstance|AxiosInstance;
    private API_key:string|undefined;
    private options:BAPI_Options|BAPI_Options;
    constructor (API_Key: string, Options?: BAPI_Options) {
        this.API_key = API_Key;
        this.options = Options ?? {
            timeout: 1000
        };

        axios.defaults.baseURL = 'https://social.bananasoftware.dev/api/';
        axios.defaults.timeout = this.options.timeout ?? 1000;
        axios.defaults.headers.api_key = this.API_key;
        axios.defaults.responseType = "json";
    }

    setOptions(Options?: BAPI_Options) {
        this.options = Options ?? {
            timeout: 1000
        };
    }

    async fetchLatest(count: number) {
        if (count > 5) return new invalidParameter(count);
        axios({
            method: 'get',
            url: '/posts/',
        })
        .then((response) => {
            
        }).catch((err) => {

        });
    }

    newAuthenticationFlow(options: BAPI_NewAuthorisationFlow_Options) {
        new BAPI_AuthorisationFlow(options);
    }

    getAuthenticationFlow(options: BAPI_ExistingAuthrosationFlow_Options) {
        new BAPI_AuthorisationFlow(options);
    }
}

type BAPI_Options = {
    timeout: number
}

type BAPI_Authorisation_Options = {
    redirect_url: string
}

export { BAPI_main, BAPI_Options, BAPI_Authorisation_Options, BAPI_AuthorisationFlow, BAPI_AuthrisationFlowScopes };