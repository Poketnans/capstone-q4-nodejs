import NotFoundError from './NotFound.error';

class PeriodNotFoundError extends NotFoundError {
  constructor() {
    super('course period not found');
  }
}

export default PeriodNotFoundError;
