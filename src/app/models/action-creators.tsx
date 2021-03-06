export interface ActionCreator<T> {
  type: string;
  payload: T;
}

export interface QueryParams {
  pagination: {
    page: number;
    sizePerPage: number;
  };
  filter?: {
    [key: string]: any;
  } | null;
  search?: string | null;
  order?: string | null;
}

export interface Character {
  id: number | null;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
}

export interface CharactersExtendedData {
  id: number;
  title: string;
  desciption?: string;
  resourceURI: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  images?: {
    path: string;
    extension: string;
  }[];
  prices: {
    type: string;
    price: number;
  }[];
  [key: string]: any;
}

export enum ExtendedEndPoints {
  comics = 'comics',
  events = 'events',
  series = 'series',
  stories = 'stories',
}
