export interface XonosSong {
  title: string;
  artist: string;
  covers: XonosCovers;
  color: string;
  explicit: boolean;
  stream: string;
  download: string;
  duration: XonosDuration;
  album: XonosAlbum;
  spotify_id: string;
  popularity: number;
  preview: string;
  uri: string;
}

export type XonosBetaSong = Omit<XonosSong, "stream" | "download">;

export interface XonosCovers {
  big: string;
  medium: string;
  small: string;
}

export interface XonosDuration {
  ms: number;
  seconds: string;
}

export interface XonosAlbum {
  name: string;
  id: string;
}
