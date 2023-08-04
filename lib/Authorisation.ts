import { type } from "os";
import { BAPI_Authorisation_Options } from "./BAPI";

class BAPI_AuthorisationFlow {
    private Authorisation_code:string|undefined;
    private Authorisation_scopes:BAPI_AuthrisationFlowScopes[]|BAPI_AuthrisationFlowScopes[];

    constructor (options:BAPI_NewAuthorisationFlow_Options|BAPI_ExistingAuthrosationFlow_Options) {
        if((options as BAPI_NewAuthorisationFlow_Options).new) {

        }
        this.Authorisation_code = options.Authrisation_code;
    }
}

type BAPI_NewAuthorisationFlow_Options = {
    Authrisation_code: string,
    scopes: BAPI_AuthrisationFlowScopes[],
    readonly new: boolean|true
}

type BAPI_ExistingAuthrosationFlow_Options = {
    Authrisation_code: string
}

enum BAPI_AuthrisationFlowScopes {
    Basic_Profile_Info,
    Email_Address,
    Advanced_Profile_Info,
    Edit_Profile_Info,
    Make_Post,
    Read_DMs,
    Read_GroupDMs,
    Make_DM,
    Make_GroupDM,
    Send_DM_Message,
    Send_GroupDM_Message,
    Read_Post_Comments,
    Make_Post_Comment,
    Read_Servers,
    Make_Server,
    Edit_Server
}

export { BAPI_AuthorisationFlow, BAPI_NewAuthorisationFlow_Options, BAPI_ExistingAuthrosationFlow_Options, BAPI_AuthrisationFlowScopes };