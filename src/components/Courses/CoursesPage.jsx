import React from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import _ from 'lodash';
import {
  shape, arrayOf, bool, func
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paginator from '../Commons/Paginator';
import paginator from '../../utils/pagination';
import * as courseActions from '../../actions/course/courseActions';
import CourseList from './CourseList';

/**
 * @class CoursePage
 *
 * @returns {JSX}
 */
export class CoursePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentWillUpdate({ meta, currentPage }) {
    if (currentPage > 1 && meta.pageSize === 0 && meta.pageCount >= 1) {
      this.props.actions.pageChange(currentPage - 1);
    }
  }

  handleDelete(id) {
    this.props.actions.deleteCourse(id);
  }

  handlePageClick({ selected }) {
    this.props.actions.pageChange(selected + 1);
  }

  render() {
    const { courses, loading, meta } = this.props;
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
        {
          !loading && courses.length > 0
          && (<CourseList courses={courses} handleDelete={this.handleDelete} />)
        }
        {
          !loading && !courses.length > 0
          && (
            <h2 className="text-center text-success">
              Course List is Empty!!!
            </h2>
          )
        }
        <Paginator
          {...meta}
          handlePageClick={this.handlePageClick}
        />
      </div>
    );
  }
}

const mapStateToProps = ({
  allCourses:
  { courses, isLoading, currentPage }
}
) => {
  const meta = paginator(courses, currentPage);
  return {
    courses: _.sortBy(meta.result, 'title'),
    loading: isLoading,
    meta,
    currentPage
  };
};

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
