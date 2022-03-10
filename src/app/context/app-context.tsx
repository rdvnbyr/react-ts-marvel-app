import { isInteger } from 'lodash';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { QueryParams } from '../models';

type AppContextValue = {
  queryParams: QueryParams;
  setPagination: (page: number, perPage: number) => void;
  setFilter: (filter: any) => void;
  setSearch: (search: string) => void;
  setOrder: (order: string) => void;
  extededCharacterId: number | undefined | null;
  showCharacterExtendedDetailDialog: boolean;
  openCharacterExtendedDetailDialog: (id: number) => void;
  closeCharacterExtendedDetailDialog: () => void;
};

const AppContext = createContext<AppContextValue>({} as AppContextValue);

export const useAppContext = () => useContext(AppContext);

const initialPagination = {
  page: 1,
  perPage: 10,
};
const initialFilter = null;
const initialSearch = '';
const initialOrder = '';
const initialQueryParams = {
  pagination: initialPagination,
  filter: initialFilter,
  search: initialSearch,
  order: initialOrder,
};

export function AppProvider(props: { children: React.ReactNode }) {
  const [pagination, setPaginationBase] = useState(initialPagination);
  const setPagination = useCallback((page, perPage) => {
    if (isInteger(page) && isInteger(perPage)) {
      return setPaginationBase({
        page,
        perPage,
      });
    }
    return setPaginationBase(initialPagination);
  }, []);
  const [filter, setFilter] = useState(initialFilter);
  const [search, setSearch] = useState(initialSearch);
  const [order, setOrder] = useState(initialOrder);

  const [queryParams, setQueryParams] = useState(initialQueryParams);
  useMemo(() => {
    setQueryParams({
      pagination,
      filter,
      search,
      order,
    });
  }, [pagination, filter, search, order]);

  // Character extended detail dialog
  const [extededCharacterId, setExtededCharacterId] = useState<number | null | undefined>(
    null
  );
  const [showCharacterExtendedDetailDialog, setShowCharacterExtendedDetailDialog] =
    useState(false);
  const openCharacterExtendedDetailDialog = useCallback((id: number) => {
    setShowCharacterExtendedDetailDialog(true);
    setExtededCharacterId(id);
  }, []);
  const closeCharacterExtendedDetailDialog = useCallback(() => {
    setShowCharacterExtendedDetailDialog(false);
    setExtededCharacterId(null);
  }, []);

  const value: AppContextValue = {
    queryParams,
    setPagination,
    setFilter,
    setSearch,
    setOrder,
    extededCharacterId,
    showCharacterExtendedDetailDialog,
    openCharacterExtendedDetailDialog,
    closeCharacterExtendedDetailDialog,
  };
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}
