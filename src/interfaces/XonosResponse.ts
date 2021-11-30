import { XonosSong, XonosBetaSong } from "./XonosSong";

export interface XonosResponse {
  error: boolean;
  found: boolean;
  result: XonosSong | XonosBetaSong;
}

export interface XonosBetaResponse extends XonosResponse {
  cached: boolean;
}
