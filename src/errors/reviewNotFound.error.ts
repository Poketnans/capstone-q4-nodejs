import NotFoundError from './NotFound.error';

class ReviewNotFoundError extends NotFoundError {
  constructor() {
    super('review not found');
  }
}

export default ReviewNotFoundError;
