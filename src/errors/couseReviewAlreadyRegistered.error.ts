import ConflictError from './Conflict.error';

class CourseReviewAlreadyRegisteredError extends ConflictError {
  constructor() {
    super('course review already registered');
  }
}

export default CourseReviewAlreadyRegisteredError;
