import NotFoundError from './NotFound.error';

class CourseNotFoundError extends NotFoundError {
  constructor() {
    super('course not found');
  }
}

export default CourseNotFoundError;
