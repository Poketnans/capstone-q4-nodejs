import NotFoundError from './NotFound.error';

class UserNotFoundError extends NotFoundError {
  constructor() {
    super('user not found');
  }
}

export default UserNotFoundError;
