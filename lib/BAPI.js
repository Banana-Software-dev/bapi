"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BAPI_AuthrisationFlowScopes = exports.BAPI_AuthorisationFlow = exports.BAPI_main = void 0;
/**
 * BAPI - Official B-Social API Wrapper
 * Author - MrBisquit (blog.wtdawson.info) for Banana Software
 * License - MIT
 * GitHub - https://github.com/banana-software/bapi
 * NPM - https://github.com/package/bapi
 */
var axios_1 = require("axios");
var exceptions_1 = require("./exceptions");
var Authorisation_1 = require("./Authorisation");
Object.defineProperty(exports, "BAPI_AuthorisationFlow", { enumerable: true, get: function () { return Authorisation_1.BAPI_AuthorisationFlow; } });
Object.defineProperty(exports, "BAPI_AuthrisationFlowScopes", { enumerable: true, get: function () { return Authorisation_1.BAPI_AuthrisationFlowScopes; } });
var BAPI_main = /** @class */ (function () {
    function BAPI_main(API_Key, Options) {
        var _a;
        this.API_key = API_Key;
        this.options = Options !== null && Options !== void 0 ? Options : {
            timeout: 1000
        };
        axios_1.default.defaults.baseURL = 'https://social.bananasoftware.dev/api/';
        axios_1.default.defaults.timeout = (_a = this.options.timeout) !== null && _a !== void 0 ? _a : 1000;
        axios_1.default.defaults.headers.api_key = this.API_key;
        axios_1.default.defaults.responseType = "json";
    }
    BAPI_main.prototype.setOptions = function (Options) {
        this.options = Options !== null && Options !== void 0 ? Options : {
            timeout: 1000
        };
    };
    BAPI_main.prototype.fetchLatest = function (count) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (count > 5)
                    return [2 /*return*/, new exceptions_1.invalidParameter(count)];
                (0, axios_1.default)({
                    method: 'get',
                    url: '/posts/',
                })
                    .then(function (response) {
                }).catch(function (err) {
                });
                return [2 /*return*/];
            });
        });
    };
    BAPI_main.prototype.newAuthenticationFlow = function (options) {
        new Authorisation_1.BAPI_AuthorisationFlow(options);
    };
    BAPI_main.prototype.getAuthenticationFlow = function (options) {
        new Authorisation_1.BAPI_AuthorisationFlow(options);
    };
    return BAPI_main;
}());
exports.BAPI_main = BAPI_main;
//# sourceMappingURL=BAPI.js.map