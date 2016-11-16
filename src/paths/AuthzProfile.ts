// This is Generated Source.
import PathSegment from "../PathSegment";
import Check from "./Check";
import UserPermission from "../definitions/UserPermission";

export default class AuthzProfile extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("authz-profile", id , prv, service);
    }

    /**
     * 
     */
    check(id?: string) {
        return new Check(this, id);
    }

    /**
        Get User Permissions
    */
    get(): Promise<GetResponse> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    }
}

export interface GetResponse {

    /**
     * Canonical URI of an authorization profile resource
     */
    uri?: string;

    /**
     * List of user permissions granted
     */
    permissions?: UserPermission[];
}
