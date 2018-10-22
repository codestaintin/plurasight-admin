import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const courseValidate = (formData) => {
  const title = formData.title.trim(),
    authorId = formData.authorId.trim(),
    category = formData.category.trim(),
    length = formData.length.trim();
  const errors = {};

  if (!Validator.isLength(title, { min: 1 })) {
    errors.title = 'Course name must contain at least one character';
  }

  if (!Validator.isLength(authorId, { min: 4 })) {
    errors.authorId = 'Author name must contain at least 4 characters';
  }


  if (!Validator.isLength(category, { min: 2 })) {
    errors.category = 'Category must contain at least 2 characters';
  }


  if (!Validator.isLength(length, { min: 4 })) {
    errors.length = 'Length must contain 4 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default courseValidate;
