import Course from '../../entities/Course';

interface ICourseFindOne {
  id: string;
}

interface ICourseRepo {
  deleteOneCourse : (ObjectId: ICourseFindOne) => Promise<any>;
  
  getCourses: () => Promise<Course[]>;

  findOneOrFail: (id: ICourseFindOne) => Promise<Course>;
}

export { ICourseRepo, ICourseFindOne };
