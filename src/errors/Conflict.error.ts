import httpStatus from 'http-status';
import { ErrorHandler } from './error';

class ConflictError extends ErrorHandler {
  constructor(message: string) {
    super(httpStatus.CONFLICT, message);
  }
}

export default ConflictError;
