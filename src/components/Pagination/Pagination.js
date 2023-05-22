import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateActivePage } from '../../stores/products';

function Pagination({ className }) {
  const products = useSelector((state) => state.products);
  const [pages] = useState(
    Array.from({ length: products.pageCount }, (_, pageIndex) => pageIndex + 1)
  );
  const [pageButtons, setPageButtons] = useState([]);
  const showFirstPageButton = useMemo(
    () => products.pageCount - products.activePage < 2,
    [products.pageCount, products.activePage]
  );
  const showLastPageButton = useMemo(
    () => products.pageCount - products.activePage > 1,
    [products.pageCount, products.activePage]
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

    if (products.activePage === products.pageCount) {
      pageButtons.push({
        className: 'py-1 px-3 rounded text-slate-500',
        pageNumber: products.activePage - 2,
      });
    }

    if (products.hasPrevPage) {
      pageButtons.push({
        className: 'py-1 px-3 rounded text-slate-500',
        pageNumber: products.activePage - 1,
      });
    }

    pageButtons.push({
      className: 'py-1 px-3 rounded bg-white shadow-lg text-[#2A59FE]',
      pageNumber: products.activePage,
    });

    if (products.hasNextPage) {
      pageButtons.push({
        className: 'py-1 px-3 rounded text-slate-500',
        pageNumber: products.activePage + 1,
      });
    }

    if (products.activePage === 1 && pages.includes(3)) {
      pageButtons.push({
        className: 'py-1 px-3 rounded text-slate-500',
        pageNumber: products.activePage + 2,
      });
    }

    setPageButtons(pageButtons);
  }, [
    products.activePage,
    products.hasNextPage,
    products.hasPrevPage,
    pages,
    products.pageCount,
  ]);

  useEffect(() => {
    initPagination();
  }, [initPagination, products.activePage]);

  return (
    <div className={`${className} flex items-center justify-center w-full`}>
      <button
        disabled={!products.hasPrevPage}
        className={`${
          products.hasPrevPage ? 'text-slate-800' : 'text-slate-500'
        } py-1 px-3`}
        onClick={() => {
          setActivePage(products.activePage - 1);
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
            setActivePage(products.pageCount);
          }}
        >
          {products.pageCount}
        </button>
      )}

      <button
        disabled={!products.hasNextPage}
        className={`${
          products.hasNextPage ? 'text-slate-800' : 'text-slate-500'
        } py-1 px-3`}
        onClick={() => {
          setActivePage(products.activePage + 1);
        }}
      >
        &gt;
      </button>
    </div>
  );
}

export default memo(Pagination);
