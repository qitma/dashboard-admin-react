import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
export const Pagination = ({ page, handleChangePage }) => {
  return (
    <div className="pagination-wrapper">
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={page ? page.pageCount : 0}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handleChangePage}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.shape({
    pageCount: PropTypes.number
  }),
  handleChangePage: PropTypes.func
};
