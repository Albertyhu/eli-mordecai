import usePagination from "@/hooks/usePagination.ts";
import { DOTS } from "@/util/dots.js";
import type {
  RenderPaginationType,
  UsePaginationType,
} from "@/util/interface.tsx";
import uuid from "react-uuid";
import "./style.css";

const RenderPagination = (props: RenderPaginationType) => {
  const {
    pageSize,
    totalCount,
    currentPage,
    totalPages,
    isMobile,
    search_query,
  } = props;
  const onPageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      if (search_query != null && typeof search_query != undefined) {
        return (window.location.href = `/blog/search/${search_query}/${newPage}`);
      }
      return (window.location.href = `/blog/${newPage}`);
    }
  };
  const Pagination = usePagination({ currentPage, totalCount, pageSize });
  return (
    <div
      id="PaginationContainer"
      className={`my-10 list-none text-center ${
        isMobile ? "md:hidden" : "block"
      } [&>li]:cursor-pointer`}
    >
      <li
        id="leftArrow"
        className="PaginatedListItem PaginatedArrow"
        onClick={() => onPageChange(currentPage - 1)}
      >
        &#706; Prev
      </li>
      {Pagination?.map((page: number | string) => {
        const uniqueKey = uuid();
        if (page === DOTS) {
          return (
            <li className="PaginatedListItem text-white" key={uniqueKey}>
              &#8230;
            </li>
          );
        }
        if (page === currentPage) {
          return (
            <li
              className="selected PaginatedListItem !text-primaryC"
              onClick={() => onPageChange(page)}
              key={uniqueKey}
            >
              {page}
            </li>
          );
        }
        return (
          <li
            className="PaginatedListItem"
            onClick={() => onPageChange(page as number)}
            key={uniqueKey}
          >
            {page}
          </li>
        );
      })}
      <li
        id="rightArrow"
        className="PaginatedListItem PaginatedArrow"
        onClick={() => {
          onPageChange(currentPage + 1);
        }}
      >
        Next &#707;
      </li>
    </div>
  );
};
export default RenderPagination;
