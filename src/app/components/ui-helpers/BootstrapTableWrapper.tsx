import React, { ReactNode } from 'react';
import styled from 'styled-components';

export const BootstrapTableWrapper = (props: { children: ReactNode }) => {
  return <StyledTWrapper>{props.children}</StyledTWrapper>;
};

const StyledTWrapper = styled.div`
  padding: 3rem 2rem; 
  .table {
    thead {
      th,
      td {
        font-weight: 600;
        font-size: 1rem;
        border-bottom-width: 1px;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    }

    &.table-head-borderless {
      thead {
        th,
        td {
          border-top: 0;
        }
      }
    }

    &.table-head-solid {
      thead {
        th,
        td {
          background-color: var(--lightGray);
        }
      }
    }

    &.table-head-custom {
      thead {
        tr,
        th {
          font-weight: 600;
          color: var(--dark);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
        }
      }
    }

    &.table-head-bg {
      thead {
        tr,
        th {
          background-color: var(--lightGray);
          border-bottom: 0;
          letter-spacing: 1px;

          &:first-child {
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
          }

          &:last-child {
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
          }
        }
      }
    }

    &.table-separate {
      th,
      td {
        border-top: 0;
        border-bottom: 1px solid var(--lightGray);

        &:first-child {
          padding-left: 0 !important;
        }

        &:last-child {
          padding-right: 0 !important;
        }
      }

      tfoot {
        th,
        td {
          border-bottom: 0;
          border-top: 1px solid var(--lightGray);
        }
      }

      tbody {
        tr:last-child {
          td {
            border-bottom: 0;
          }
        }
      }
    }
    &.table-bordered {
      tfoot {
        th,
        td {
          border-bottom: 0;
        }
      }
    }

    &.table-vertical-center {
      th,
      td {
        vertical-align: middle;
      }
    }
  }

  .table:not(.table-bordered) {
    thead {
      th,
      td {
        border-top: 0;
      }
    }
  }
`;
