import httpStatus from 'http-status';
import { ErrorHandler } from './error';

class NotFoundError extends ErrorHandler {
  constructor(message: string) {
    super(httpStatus.NOT_FOUND, message);
  }
}

export default NotFoundError;
