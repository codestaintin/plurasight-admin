import React from 'react';
import Paginate from 'react-paginate';
import { number, func } from 'prop-types';

const Paginator = ({ pageCount, page, handlePageClick }) => (
  <Paginate
    pageCount={pageCount}
    pageRangeDisplayed={2}
    initialPage={page - 1}
    marginPagesDisplayed={2}
    disableInitialCallback
    onPageChange={handlePageClick}
    containerClassName="pagination justify-content-center"
    subContainerClassName="page-item"
    pageLinkClassName="page-link"
    activeClassName="page-item active"
    nextLinkClassName="page-link"
    previousLinkClassName="page-link"
  />
);

Paginator.propTypes = {
  page: number,
  pageCount: number,
  handlePageClick: func.isRequired
};
export default Paginator;
