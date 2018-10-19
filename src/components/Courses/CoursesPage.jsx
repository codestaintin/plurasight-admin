import React from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import {
  shape, arrayOf, bool, func
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/course/courseActions';
import CourseList from './CourseList';

/**
 * @class CoursePage
 *
 * @returns {JSX}
 */
class CoursePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.props.actions.deleteCourse(id);
  }

  render() {
    const { courses, loading } = this.props;
    return (
      <div className="app">
        <h1>Courses</h1>
        <Link to="/course">
          <button
            type="button"
            className="btn btn-primary float-right mb-3"
          >
            Add Course
          </button>
        </Link>
        {loading && <Loader type="ThreeDots" color="#007bff" />}
        {!loading && courses.length > 0 && <CourseList courses={courses} handleDelete={this.handleDelete} />}
      </div>
    );
  }
}

const mapStateToProps = ({ allCourses }) => ({
  courses: allCourses.courses,
  loading: allCourses.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(courseActions, dispatch)
});

CoursePage.propTypes = {
  courses: arrayOf(shape({})),
  loading: bool,
  actions: shape({
    deleteCourse: func.isRequired
  }).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
