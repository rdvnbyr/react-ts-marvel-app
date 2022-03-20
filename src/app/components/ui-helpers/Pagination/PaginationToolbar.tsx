import { Spinner } from 'react-bootstrap';
import { PaginationProps, PaginationParams } from '../../../models';

export const sizePerPageList = [
  { text: '3', value: 3 },
  { text: '5', value: 5 },
  { text: '10', value: 10 },
  { text: '20', value: 20 },
  { text: '30', value: 30 },
  { text: '40', value: 40 },
  { text: '50', value: 50 },
  { text: '100', value: 100 },
];

export function PaginationToolbar(props: PaginationProps) {
  const { loading, totalSize, setPaginationParams, paginationParams /* pageSize */ } =
    props;
  //   const isToolbarDisabled = pageSize === 0 || paginationParams.page !== 1;
  const onSizeChange = (page: string) => {
    setPaginationParams((prev: PaginationParams) => ({
      ...prev,
      sizePerPage: +page,
    }));
  };
  //   const style = {
  //     width: '75px',
  //     cursor: isToolbarDisabled ? 'not-allowed' : 'pointer',
  //   };
  return (
    <div className="d-flex">
      <select
        // disabled={isToolbarDisabled}
        className={`form-select mx-2`}
        onChange={(e) => onSizeChange(e.target.value)}
        value={paginationParams.sizePerPage}
        // style={style}
      >
        {sizePerPageList.map((option) => {
          const isSelect = paginationParams.sizePerPage === option.value;
          return (
            <option
              key={option.text}
              value={option.value}
              className={`btn ${isSelect ? 'active' : ''}`}
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
