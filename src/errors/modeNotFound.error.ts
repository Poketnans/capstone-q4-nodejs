import httpStatus from 'http-status';
import { ErrorHandler } from './error';

class ModeNotFoundError extends ErrorHandler {
  constructor() {
    super(httpStatus.NOT_FOUND, 'course mode not found');
  }
}

export default ModeNotFoundError;
