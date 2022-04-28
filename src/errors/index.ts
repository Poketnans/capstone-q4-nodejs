import { ErrorHandler, handleError } from './error';
import UuidMalformedError from './uuidMalformed.error';
import CategoryNotFoundError from './categoryNotFound.error';
import ModeNotFoundError from './modeNotFound.error';
import PeriodNotFoundError from './periodNotFound.error';
import CourseTitleAlreadyRegisteredError from './courseTitleAlreadyRegistered.error';
import UserNotFoundError from './UserNotFound.error';
import CourseNotFoundError from './courseNotFound.error';
import CourseReviewAlreadyRegisteredError from './couseReviewAlreadyRegistered.error';

export {
  ErrorHandler,
  handleError,
  UuidMalformedError,
  CategoryNotFoundError,
  ModeNotFoundError,
  PeriodNotFoundError,
  CourseTitleAlreadyRegisteredError,
  UserNotFoundError,
  CourseNotFoundError,
  CourseReviewAlreadyRegisteredError,
};
