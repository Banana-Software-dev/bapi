"use strict"

/**
 * BAPI - Official B-Social API Wrapper
 * Author - MrBisquit (blog.wtdawson.info) for Banana Software
 * License - MIT
 * GitHub - https://github.com/banana-software/bapi
 * NPM - https://github.com/package/bapi
 */

import axios from 'axios';
import { invalidParameter } from "./exceptions";

class BAPI_main {
    private instance:object|undefined;
    private API_key:string|undefined;
    private options:object|undefined;
    constructor (API_Key: string, Options: Options) {
        this.API_key = API_Key;
        this.options = Options;

        this.instance = axios.create({
            baseURL: 'https://bananasoftware.dev/api/',
            timeout: Options.timeout,
            headers: {'api_token': this.API_key}
        });
    }

    async fetchLatest(count: number) {
        if (count > 5) new invalidParameter(count);
        axios({
            method: 'get',
            url: '/posts/',
            responseType: 'json',
            headers: {"api_token": this.API_key}
          })
        .then((response) => {
            console.log(response)
        });
    }
}

class Options {
    public timeout:number|1000;
    constructor (Timeout?: number) {
        this.timeout = Timeout || 1000;
    }
}

module.exports = {
    Main_API : BAPI_main
};