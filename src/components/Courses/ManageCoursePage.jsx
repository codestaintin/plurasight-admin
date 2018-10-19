import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/course/courseActions';
import CourseForm from './CourseForm';

/**
 * ManageCoursePage component
 */
class ManageCoursePage extends React.Component {
  /**
   * @returns {object} object
   */
  static initialState = () => ({
    course: {
      title: '',
      length: '',
      authorId: '',
      category: '',
      watchHref: '',
    },
    errors: {}
  });

  constructor(props) {
    super(props);
    this.state = ManageCoursePage.initialState();
    this.updateCourse = this.updateCourse.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  static getDerivedStateFromProps({ course }) {
    if (course && course.id) {
      return {
        ...ManageCoursePage.initialState(),
        course
      };
    }
    return null;
  }

  /**
   * Update Course event
   * @param { object }  event
   */
  updateCourse(event) {
    const { course } = this.state;
    course[event.target.name] = event.target.value;
    this.setState({ course });
  }

  /**
   * Save Course event
   * @param { object }  event
   */
  saveCourse(event) {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect());
  }

  redirect() {
    this.props.history.push('/courses');
  }

  render() {
    return (
      <div className="container">
        <CourseForm
          course={this.state.course}
          onChange={this.updateCourse}
          onSubmit={this.saveCourse}
          allAuthors={this.props.authors}
          errors={this.state.errors}
          saving={this.props.isSaving}
        />
      </div>
    );
  }
}


ManageCoursePage.propTypes = {
  course: PropTypes.shape({}),
  authors: PropTypes.array.isRequired,
  history: PropTypes.object,
  isSaving: PropTypes.bool,
  actions: PropTypes.shape({
    saveCourse: PropTypes.func.isRequired
  }).isRequired
};

const getCourseData = (courses, id) => courses
  .find(foundCourse => foundCourse.id === id);

const mapStateToProps = (state, ownProps) => {
  let course = {
    id: '', watchHref: '', title: '', authorId: '', length: '', category: ''
  };
  const authorsFormattedForDropdown = state.authors.map(author => ({
    value: author.id,
    text: `${author.firstName} ${author.lastName}`
  }));

  if (ownProps.match.params.id) {
    course = getCourseData(state.allCourses.courses, ownProps.match.params.id);
  }
  return {
    course,
    authors: authorsFormattedForDropdown,
    isSaving: state.allCourses.isSaving
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(courseActions, dispatch)
});

export default
connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
