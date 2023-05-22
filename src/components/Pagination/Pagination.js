import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateActivePage } from '../../stores/store';

function Pagination({ className }) {
  const pageCount = useSelector((state) => state.products.pageCount);
  const activePage = useSelector((state) => state.products.activePage);
  const hasPrevPage = useSelector((state) => state.products.hasPrevPage);
  const hasNextPage = useSelector((state) => state.products.hasNextPage);
  const [pages] = useState(
    Array.from({ length: pageCount }, (_, pageIndex) => pageIndex + 1)
  );
  const [pageButtons, setPageButtons] = useState([]);
  const showFirstPageButton = useMemo(
    () => pageCount - activePage < 2,
    [pageCount, activePage]
  );
  const showLastPageButton = useMemo(
    () => pageCount - activePage > 1,
    [pageCount, activePage]
  );

  const dispatch = useDispatch();

  const setActivePage = useCallback(
    (pageNumber) => {
      dispatch(updateActivePage(pageNumber));
    },
    [dispatch]
  );

  const initPagination = useCallback(() => {
    const pageButtons = [];

    if (activePage === pageCount) {
      pageButtons.push({
        className: 'py-1 px-3 rounded text-slate-500',
        pageNumber: activePage - 2,
      });
    }

    if (hasPrevPage) {
      pageButtons.push({
        className: 'py-1 px-3 rounded text-slate-500',
        pageNumber: activePage - 1,
      });
    }

    pageButtons.push({
      className: 'py-1 px-3 rounded bg-white shadow-lg text-[#2A59FE]',
      pageNumber: activePage,
    });

    if (hasNextPage) {
      pageButtons.push({
        className: 'py-1 px-3 rounded text-slate-500',
        pageNumber: activePage + 1,
      });
    }

    if (activePage === 1 && pages.includes(3)) {
      pageButtons.push({
        className: 'py-1 px-3 rounded text-slate-500',
        pageNumber: activePage + 2,
      });
    }

    setPageButtons(pageButtons);
  }, [activePage, hasNextPage, hasPrevPage, pages, pageCount]);

  useEffect(() => {
    initPagination();
  }, [initPagination, activePage]);

  return (
    <div className={`${className} flex items-center justify-center w-full`}>
      <button
        disabled={!hasPrevPage}
        className={`${
          hasPrevPage ? 'text-slate-800' : 'text-slate-500'
        } py-1 px-3`}
        onClick={() => {
          setActivePage(activePage - 1);
        }}
      >
        &lt;
      </button>

      {showFirstPageButton && (
        <button
          className="py-1 px-3 rounded text-slate-500"
          onClick={() => {
            setActivePage(1);
          }}
        >
          {1}
        </button>
      )}

      {showFirstPageButton && <span>...</span>}

      {pageButtons.map((page) => {
        return (
          <button
            className={page.className}
            key={page.pageNumber}
            onClick={() => {
              setActivePage(page.pageNumber);
            }}
          >
            {page.pageNumber}
          </button>
        );
      })}

      {showLastPageButton && <span>...</span>}

      {showLastPageButton && (
        <button
          className="py-1 px-3 rounded text-slate-500"
          onClick={() => {
            setActivePage(pageCount);
          }}
        >
          {pageCount}
        </button>
      )}

      <button
        disabled={!hasNextPage}
        className={`${
          hasNextPage ? 'text-slate-800' : 'text-slate-500'
        } py-1 px-3`}
        onClick={() => {
          setActivePage(activePage + 1);
        }}
      >
        &gt;
      </button>
    </div>
  );
}

export default memo(Pagination);
