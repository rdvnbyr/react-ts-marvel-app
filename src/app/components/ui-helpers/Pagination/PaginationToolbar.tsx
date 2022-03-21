import { Spinner } from "react-bootstrap";
import { PaginationProps, PaginationParams } from "./pagination.models";

export const sizePerPageList = [
  { text: "3", value: 3 },
  { text: "5", value: 5 },
  { text: "10", value: 10 },
  { text: "20", value: 20 },
  { text: "30", value: 30 },
  { text: "40", value: 40 },
  { text: "50", value: 50 },
];

export function PaginationToolbar(props: PaginationProps) {
  const { loading, totalSize, setPaginationParams, paginationParams } = props;
  const onSizeChange = (page: string) => {
    setPaginationParams((prev: PaginationParams) => ({
      ...prev,
      sizePerPage: +page,
    }));
  };
  return (
    <div className="d-flex">
      <select
        className={`form-select mx-2`}
        onChange={(e) => onSizeChange(e.target.value)}
        value={paginationParams.sizePerPage}
      >
        {sizePerPageList.map((option) => {
          const isSelect = paginationParams.sizePerPage === option.value;
          return (
            <option
              key={option.text}
              value={option.value}
              className={`btn ${isSelect ? "active" : ""}`}
            >
              {option.text}
            </option>
          );
        })}
      </select>
      <div>
        Total:
        <span className="mx-2">{totalSize}</span>
      </div>
      {loading && (
        <div className="d-flex flex-row justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </div>
  );
}
