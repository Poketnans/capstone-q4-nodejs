import { getRepository, Repository } from 'typeorm';
import User from '../../entities/User';
import { IUserQuery, IUserRepo } from './interfaces';
import { IUser } from '../../types/user';
import { UserNotFoundError, UuidMalformedError } from '../../errors';
import { verifyUuidError } from '../../utils';
import CourseReviewRepository from '../courseReview/courseReview.repository';
import ProjectRepository from '../project/project.repository';
import CourseRepository from '../course/course.repository';

class UserRepository implements IUserRepo {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  saveUser = (user: IUser) => this.ormRepository.save(user);

  getUsers = () => this.ormRepository.find();

  getOneUser = async (userInfo: string, relations?: string[]) => {
    try {
      if (userInfo.includes('@')) {
        return await this.ormRepository.findOneOrFail(
          { email: userInfo },
          { relations }
        );
      }
      return await this.ormRepository.findOneOrFail(
        { id: userInfo },
        { relations }
      );
    } catch (err) {
      verifyUuidError(err.message, 'jwt.user.id');

      throw new UserNotFoundError();
    }
  };

  updateUser = (userUpdated: IUserQuery, id: string) =>
    this.ormRepository.update(id, userUpdated);

  getUserLogin = (email: string) => this.ormRepository.findOne({ email });

  deleteUser = async (id: string) => {
    try {
      const reviewRepo = new CourseReviewRepository();
      const reviews = await reviewRepo.getReviews(id);
      reviews.forEach((review) => reviewRepo.delete(review.id));

      const projectRepo = new ProjectRepository();
      const projects = await projectRepo.getProjects(id);
      projects.forEach((project) => projectRepo.delete(project.id));

      const courseRepo = new CourseRepository();
      const courses = await courseRepo.getOwnCourses(id);
      courses.forEach((course) => courseRepo.deleteOneCourse(course.id));

      return await this.ormRepository.delete(id);
    } catch (err) {
      verifyUuidError(err.message, 'url id_review');
      throw new UserNotFoundError();
    }
  };
}

export default UserRepository;
