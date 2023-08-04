"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BAPI_AuthrisationFlowScopes = exports.BAPI_AuthorisationFlow = void 0;
var BAPI_AuthorisationFlow = /** @class */ (function () {
    function BAPI_AuthorisationFlow(options) {
        if (options.new) {
        }
        this.Authorisation_code = options.Authrisation_code;
    }
    return BAPI_AuthorisationFlow;
}());
exports.BAPI_AuthorisationFlow = BAPI_AuthorisationFlow;
var BAPI_AuthrisationFlowScopes;
(function (BAPI_AuthrisationFlowScopes) {
    BAPI_AuthrisationFlowScopes[BAPI_AuthrisationFlowScopes["Basic_Profile_Info"] = 0] = "Basic_Profile_Info";
    BAPI_AuthrisationFlowScopes[BAPI_AuthrisationFlowScopes["Email_Address"] = 1] = "Email_Address";
    BAPI_AuthrisationFlowScopes[BAPI_AuthrisationFlowScopes["Advanced_Profile_Info"] = 2] = "Advanced_Profile_Info";
    BAPI_AuthrisationFlowScopes[BAPI_AuthrisationFlowScopes["Edit_Profile_Info"] = 3] = "Edit_Profile_Info";
    BAPI_AuthrisationFlowScopes[BAPI_AuthrisationFlowScopes["Make_Post"] = 4] = "Make_Post";
    BAPI_AuthrisationFlowScopes[BAPI_AuthrisationFlowScopes["Read_DMs"] = 5] = "Read_DMs";
    BAPI_AuthrisationFlowScopes[BAPI_AuthrisationFlowScopes["Read_GroupDMs"] = 6] = "Read_GroupDMs";
    BAPI_AuthrisationFlowScopes[BAPI_AuthrisationFlowScopes["Make_DM"] = 7] = "Make_DM";
    BAPI_AuthrisationFlowScopes[BAPI_AuthrisationFlowScopes["Make_GroupDM"] = 8] = "Make_GroupDM";
    BAPI_AuthrisationFlowScopes[BAPI_AuthrisationFlowScopes["Send_DM_Message"] = 9] = "Send_DM_Message";
    BAPI_AuthrisationFlowScopes[BAPI_AuthrisationFlowScopes["Send_GroupDM_Message"] = 10] = "Send_GroupDM_Message";
    BAPI_AuthrisationFlowScopes[BAPI_AuthrisationFlowScopes["Read_Post_Comments"] = 11] = "Read_Post_Comments";
    BAPI_AuthrisationFlowScopes[BAPI_AuthrisationFlowScopes["Make_Post_Comment"] = 12] = "Make_Post_Comment";
    BAPI_AuthrisationFlowScopes[BAPI_AuthrisationFlowScopes["Read_Servers"] = 13] = "Read_Servers";
    BAPI_AuthrisationFlowScopes[BAPI_AuthrisationFlowScopes["Make_Server"] = 14] = "Make_Server";
    BAPI_AuthrisationFlowScopes[BAPI_AuthrisationFlowScopes["Edit_Server"] = 15] = "Edit_Server";
})(BAPI_AuthrisationFlowScopes || (exports.BAPI_AuthrisationFlowScopes = BAPI_AuthrisationFlowScopes = {}));
//# sourceMappingURL=Authorisation.js.map