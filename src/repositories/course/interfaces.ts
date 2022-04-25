import Course from '../../entities/Course';

interface ICourseFindOne {
  id: string;
}

interface ICourseRepo {
  getCourses: () => Promise<Course[]>;

  findOneOrFail: (id: ICourseFindOne) => Promise<Course>;
}
export { ICourseRepo, ICourseFindOne };
