// This is Generated Source.
import PathSegment from "../PathSegment";
import DepartmentResponseExtensionInfo from "../definitions/DepartmentResponseExtensionInfo";
import PagingResult from "../PagingResult";

export default class Members extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("members", id , prv, service);
    }

    /**
        Get Department Members
    */
    list(query?:ListQuery): Promise<PagingResult<DepartmentResponseExtensionInfo>> {
        return this.getService().send({method: "get", url: this.getEndpoint(false), query: query, body: undefined }).then(function (res) {
            return res.json();
        });
    }
}

export interface ListQuery {

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;
}
