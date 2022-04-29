import NotFoundError from './NotFound.error';

class CategoryNotFoundError extends NotFoundError {
  constructor() {
    super('category not found');
  }
}

export default CategoryNotFoundError;
