import httpStatus from 'http-status';
import { ErrorHandler } from './error';

class PeriodNotFoundError extends ErrorHandler {
  constructor() {
    super(httpStatus.NOT_FOUND, 'course period not found');
  }
}

export default PeriodNotFoundError;
