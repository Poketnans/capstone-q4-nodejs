import httpStatus from 'http-status';
import { ErrorHandler } from './error';

class CategoryNotFoundError extends ErrorHandler {
  constructor() {
    super(httpStatus.NOT_FOUND, 'category not found');
  }
}

export default CategoryNotFoundError;
