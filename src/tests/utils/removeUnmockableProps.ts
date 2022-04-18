import { ITestUserRegisterResponse } from './interfaces';

/* eslint-disable no-param-reassign */
const removeUnmockableProps = (obj: ITestUserRegisterResponse) => {
  delete obj.id;
};

export default removeUnmockableProps;
