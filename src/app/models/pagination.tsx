export type PaginationParams = {
  page: number;
  sizePerPage: number;
}

export interface PaginationProps {
  loading: boolean;
  totalSize: number;
  pageSize: number;
  paginationSize?: number;
  paginationParams: PaginationParams;
  setPaginationParams: Function;
}
