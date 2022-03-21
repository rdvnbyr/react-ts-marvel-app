/* eslint-disable jsx-a11y/anchor-is-valid */
import { getPages, getPagesCount } from "../../../helpers";
import { PaginationProps, PaginationParams } from "./pagination.models";
import { Pagination } from "react-bootstrap";
import { uuidv4 } from "../../../helpers";

export function PaginationLinks(props: PaginationProps) {
  const { paginationParams, setPaginationParams, totalSize, paginationSize } = props;
  const pagesCount = getPagesCount(totalSize, paginationParams.sizePerPage);
  const pages = getPages(paginationParams.page, pagesCount, paginationSize || 5);

  const tablePaginationHandler = (page: string) => {
    page === "previous"
      ? setPaginationParams((prev: PaginationParams) => ({
          ...prev,
          page: +prev.page === 1 ? +prev.page : +prev.page - 1,
        }))
      : page === "next"
      ? setPaginationParams((prev: PaginationParams) => ({
          ...prev,
          page: +pagesCount === +prev.page ? +prev.page : +prev.page + 1,
        }))
      : page === "first-page"
      ? setPaginationParams((prev: PaginationParams) => ({
          ...prev,
          page: 1,
        }))
      : page === "last-page"
      ? setPaginationParams((prev: PaginationParams) => ({
          ...prev,
          page: +pagesCount,
        }))
      : setPaginationParams((prev: PaginationParams) => ({
          ...prev,
          page: +page,
        }));
  };

  return (
    <>
      {pagesCount < 2 && <></>}
      {pagesCount > 1 && (
        <Pagination>
          <Pagination.First onClick={() => tablePaginationHandler("first-page")} />
          <Pagination.Prev onClick={() => tablePaginationHandler("previous")} />
          {paginationParams.page > 3 && <Pagination.Ellipsis />}
          {pages.length > 0 &&
            pages.map((p: number) => (
              <Pagination.Item
                key={uuidv4()}
                onClick={() => tablePaginationHandler(p.toString())}
                active={p === paginationParams.page}
              >
                {p}
              </Pagination.Item>
            ))}
          {paginationParams.page < pagesCount - 3 && <Pagination.Ellipsis />}
          <Pagination.Next onClick={() => tablePaginationHandler("next")} />
          <Pagination.Last onClick={() => tablePaginationHandler("last-page")} />
        </Pagination>
      )}
    </>
  );
}
