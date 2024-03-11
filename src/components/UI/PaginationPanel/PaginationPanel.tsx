import { FormattedDepositor } from 'state/vault/types';

import Left from 'assets/page-left-arrow.svg';
import Right from 'assets/page-right-arrow.svg';

export interface PaginationProps<T extends Record<string, unknown>> {
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageCount: number;
  gotoPage: (updater: ((pageIndex: number) => number) | number) => void;
  nextPage: () => void;
  previousPage: () => void;
  state: { pageIndex: number; pageSize: number };
  pageOptions: number[];
  page: T[];
}

const PaginationPanel = (props: PaginationProps<FormattedDepositor>) => {
  const {
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
    pageOptions,
  } = props;

  return (
    <div className="flex flex-row justify-center items-center  w-[380px] rounded-b-xl py-4 gap-2">
      <div className="flex flex-row gradiant-border">
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className="rounded-lg bg-white dark:bg-ui_surface_opc w-10 h-10 cursor-pointer border-none"
        >
          <img src={Left} alt="" />
          <img src={Left} alt="" />
        </button>
      </div>
      <div className="flex flex-row gradiant-border">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="rounded-lg bg-white dark:bg-ui_surface_opc w-10 h-10 cursor-pointer border-none"
        >
          <img src={Left} alt="" />
        </button>
      </div>
      <div className="mx-4">
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>
      </div>
      <div className="flex flex-row gradiant-border outline-none">
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="rounded-lg bg-white dark:bg-ui_surface_opc w-10 h-10 cursor-pointer border-none"
        >
          <img src={Right} alt="" />
        </button>
      </div>
      <div className="flex flex-row gradiant-border">
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className="rounded-lg bg-white dark:bg-ui_surface_opc w-10 h-10 cursor-pointer border-none ring-2"
        >
          <img src={Right} alt="" />
          <img src={Right} alt="" />
        </button>
      </div>
    </div>
  );
};

export default PaginationPanel;
