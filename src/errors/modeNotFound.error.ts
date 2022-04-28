import NotFoundError from './NotFound.error';

class ModeNotFoundError extends NotFoundError {
  constructor() {
    super('course mode not found');
  }
}

export default ModeNotFoundError;
