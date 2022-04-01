import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import RightArrow from "../img/right-arrow.svg";
import LeftArrow from "../img/left-arrow.svg";

function Pagination({ total, count, setCurrentPage }) {
  const pageCount = total / count;

  function handlePageClick(data) {
    setCurrentPage(data.selected);
    console.log("clicked", data);
  }

  return (
      <div className="pagination-buttons">
        <ReactPaginate
          previousLabel={<img src={LeftArrow} alt="previous-page" />}
          nextLabel={<img src={RightArrow} alt="next-page" />}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
        />
      </div>
  );
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
