export interface ActionCreatorAction<T> {
  type: string;
  payload: {
    [key: string]: T;
  };
}

export interface QueryParams {
  pagination: {
    page: number;
    perPage: number;
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
