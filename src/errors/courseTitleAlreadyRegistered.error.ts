import httpStatus from 'http-status';
import { ErrorHandler } from './error';

class CourseTitleAlreadyRegisteredError extends ErrorHandler {
  constructor() {
    super(httpStatus.CONFLICT, 'course title already registered');
  }
}

export default CourseTitleAlreadyRegisteredError;
