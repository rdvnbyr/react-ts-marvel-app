import { PaginationLinks } from './PaginationLinks';
import { PaginationToolbar } from './PaginationToolbar';
import { PaginationProps } from '../../../models';

export function Pagination(props: PaginationProps) {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center flex-wrap my-4">
      <PaginationLinks {...props} />
      <PaginationToolbar {...props} />
    </div>
  );
}
