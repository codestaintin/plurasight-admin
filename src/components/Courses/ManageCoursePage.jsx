import React from 'react';
import PropTypes from 'prop-types';
import { Prompt } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/course/courseActions';
import courseValidator from '../../utils/courseValidation';
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
      isBlocking: false
    },
    errors: {}
  });

  constructor(props) {
    super(props);
    this.state = ManageCoursePage.initialState();
    this.updateCourse = this.updateCourse.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  componentDidMount() {
    this.setState({
      course: this.props.course || {
        title: '',
        length: '',
        authorId: '',
        category: '',
        watchHref: '',
        isBlocking: false
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...ManageCoursePage.initialState(),
      course: nextProps.course
    });
  }

  /**
   * Update Course event
   * @param { object }  event
   */
  updateCourse(event) {
    const { name, value } = event.target;
    const { course, errors } = this.state;
    const temp = Object.assign({}, course, { [name]: value });
    this.setState({ course: temp, isBlocking: true, errors: { ...errors } });
  }

  /**
   * Validate form
   *
   * @returns { object }
   */
  validateForm() {
    const {
      errors,
      isValid
    } = courseValidator(this.state.course);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  /**
   * Save Course event
   * @param { object }  event
   */
  saveCourse(event) {
    event.preventDefault();
    if (this.validateForm()) {
      this.props.actions.saveCourse(this.state.course)
        .then(() => {
          this.setState({ isBlocking: false });
          this.redirect();
        });
    }
  }

  redirect() {
    this.props.history.push('/courses');
  }

  render() {
    return (
      <div className="container">
        <Prompt
          when={this.state.isBlocking}
          message={
            location => `Are you sure you want to go to ${location.pathname}`
          }
        />
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
