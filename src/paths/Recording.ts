// This is Generated Source.
import PathSegment from "../PathSegment";
import Content from "./Content";

export default class Recording extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("recording", id, prv, service);
    }

    /**
     * Internal identifier of a message attachment
     */
    content(id?: string) {
        return new Content(this, id);
    }

    /**
     *  Get Call Recording Metadata
     */
    get(): Promise<GetResponse> {
        return this.getService().send({
          body: undefined,
          method: "get",
          query: undefined,
          url: this.getEndpoint(true),
        }).then((res) => {
            return res.json();
        });
    }
}

export interface GetResponse {

    /**
     * Internal identifier of the call recording
     */
    id?: number;

    /**
     * Link to the call recording binary content
     */
    contentUri?: string;

    /**
     * Call recording file format. Supported format is audio/x-wav
     */
    contentType?: string;

    /**
     * Recorded call duration
     */
    duration?: number;
}
