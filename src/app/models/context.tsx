import { QueryParams } from "./action-creators";

export type AppContextValue = {
  queryParams: QueryParams;
  setQueryParams: (queryParams: QueryParams) => void;
  setPagination: (page: number, perPage: number) => void;
  setFilter: (filter: any) => void;
  setSearch: (search: string) => void;
  setOrder: (order: string) => void;
};
