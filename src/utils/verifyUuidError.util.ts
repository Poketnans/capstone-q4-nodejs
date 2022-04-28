import { UuidMalformedError } from '../errors';

const verifyUuidError = (errMsg: string, sufix: string) => {
  if ((errMsg as string).includes('invalid input syntax for type uuid')) {
    throw new UuidMalformedError(sufix);
  } else return undefined;
};

export default verifyUuidError;
