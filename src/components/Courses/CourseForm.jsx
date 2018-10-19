import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from '../Commons/SelectInput';
import TextInput from '../Commons/TextInput';

const CourseForm = ({
  course, allAuthors, onChange, saving, errors, onSubmit
}) => (
  <form onSubmit={onSubmit}>
    <h1>Manage Courses</h1>
    <TextInput
      name="title"
      label="Title"
      value={course.title}
      onChange={onChange}
      error={errors.title}
    />

    <SelectInput
      name="authorId"
      label="Author"
      value={course.authorId}
      defaultOption="Select Author"
      options={allAuthors}
      onChange={onChange}
      error={errors.authorId}
    />

    <TextInput
      name="category"
      label="Category"
      value={course.category}
      onChange={onChange}
      error={errors.category}
    />

    <TextInput
      name="length"
      label="Length"
      value={course.length}
      onChange={onChange}
      error={errors.length}
    />

    <input
      type="submit"
      disabled={saving}
      value={saving ? 'Saving...' : 'Save'}
      className="btn btn-primary"
    />
  </form>
);

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
};

export default CourseForm;
