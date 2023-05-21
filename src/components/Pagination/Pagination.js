import { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateActivePage } from "../../stores/store";

function Pagination({ className }) {
    const pageCount = useSelector(state => state.products.pageCount);
    const activePage = useSelector(state => state.products.activePage);
    const hasPrevPage = useSelector(state => state.products.hasPrevPage);
    const hasNextPage = useSelector(state => state.products.hasNextPage);
    const pages = [];
    const pageButtons = [];
    const showLastPageButton = useMemo(() => pageCount - activePage > 1, [pageCount, activePage]);

    const dispatch = useDispatch();

    const setActivePage = (pageNumber) => {
        dispatch(updateActivePage(pageNumber));
    }

    for (let pageNumber = 1; pageNumber <= pageCount; pageNumber++) {
        pages.push(pageNumber);
    }

    const setPageButtons = () => {
        if (hasPrevPage) {
            pageButtons.push(
                { className: "py-1 px-3 rounded text-slate-500", pageNumber: activePage - 1 }
            );
        }

        pageButtons.push(
            { className: "py-1 px-3 rounded bg-white shadow-lg text-[#2A59FE]", pageNumber: activePage }
        );

        if (hasNextPage) {
            pageButtons.push(
                { className: "py-1 px-3 rounded text-slate-500", pageNumber: activePage + 1, click: () => { setActivePage(activePage + 1) } }
            );
        }

        if (activePage === 1 && pages.includes(3)) {
            pageButtons.push(
                { className: "py-1 px-3 rounded text-slate-500", pageNumber: activePage + 2 }
            );
        }
    }

    setPageButtons();

    console.log(activePage);

    return (
        <div className={`${className} flex items-center justify-center w-full`}>
            <button disabled={hasPrevPage} className={`${hasPrevPage ? "text-slate-800" : "text-slate-500"} py-1 px-3`}>&lt;</button>

            {pageButtons.map((page) => {
                return <button className={page.className} key={page.pageNumber} onClick={page.click}>{page.pageNumber}</button>
            })}

            {showLastPageButton && <span>...</span>}

            {showLastPageButton && <button className="py-1 px-3 rounded text-slate-500">{pageCount}</button>}


            <button className="text-slate-500 py-1 px-3">&gt;</button>
        </div>
    );
}

export default memo(Pagination)