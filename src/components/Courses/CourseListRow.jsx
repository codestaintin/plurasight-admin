import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseListRow = ({ course, handleDelete }) => (
  <tr>
    <td>
      <a
        href={course.watchHref}
        target="_blank"
        rel="noreferrer noopener"
      >
      Watch
      </a>
    </td>
    <td><Link to={`/course/${course.id}`}>{course.title}</Link></td>
    <td>{course.authorId}</td>
    <td>{course.category}</td>
    <td>{course.length}</td>
    <td>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => handleDelete(course.id)}
      >
        Delete
      </button>
    </td>
  </tr>
);

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  handleDelete: PropTypes.func
};

export default CourseListRow;
