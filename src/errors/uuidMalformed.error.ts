import httpStatus from 'http-status';
import { ErrorHandler } from './error';

class UuidMalformedError extends ErrorHandler {
  constructor(sufix: string) {
    super(httpStatus.BAD_REQUEST, `uuid malformed for <${sufix}>`);
  }
}

export default UuidMalformedError;
