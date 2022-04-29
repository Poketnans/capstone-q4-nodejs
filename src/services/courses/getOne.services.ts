import { Request } from 'express';
import { EntityNotFoundError } from 'typeorm';
import { ErrorHandler } from '../../errors';
import { CourseRepository } from '../../repositories';

const courseGetOneServices = async (req: Request) => {
  try {
    const { uuid: id } = req.params;
    const findCourse = await new CourseRepository().getOneOrFail(id, [
      'reviews',
      'user_owner',
      'mode',
      'period',
      'category',
    ]);

    delete findCourse.user_owner.password;

    return findCourse;
  } catch (e) {
    if (e instanceof EntityNotFoundError) {
      throw new ErrorHandler(404, `course not found.`);
    }
    throw new ErrorHandler(400, `${e.message}`);
  }
};
export default courseGetOneServices;
