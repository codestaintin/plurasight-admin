import React, { Fragment } from 'react';
import Paginate from 'react-paginate';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';

const CourseList = ({ courses, isLoading, handleDelete }) => (
  <Fragment>
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => <CourseListRow key={course.id} course={course} handleDelete={handleDelete} />
        )}
      </tbody>
    </table>
    <Paginate
      pageCount={2}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      containerClassName="pagination justify-content-center"
      subContainerClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="page-item active"
      nextLinkClassName="page-link"
      previousLinkClassName="page-link"
    />
  </Fragment>

);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  handleDelete: PropTypes.func.isRequired
};

export default CourseList;
