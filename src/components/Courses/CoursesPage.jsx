import React from 'react';
import { shape, arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import CourseList from './CourseList';

/**
 *
 * @function CoursePage
 *
 * @returns {JSX}
 */
const CoursePage = ({ courses }) => (
  <div className="app">
    <h1>Courses</h1>
    <CourseList courses={courses} />
  </div>
);

const mapStateToProps = ({ courses }) => ({
  courses
});

CoursePage.propTypes = {
  courses: arrayOf(shape({}))
};

export default connect(mapStateToProps)(CoursePage);
