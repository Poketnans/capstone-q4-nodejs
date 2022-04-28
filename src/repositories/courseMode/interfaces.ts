import CourseMode from '../../entities/CourseMode';

export interface ICourseModeRepo {
  getCourseModes: () => Promise<CourseMode[]>;

  getOneMode: (id: string) => Promise<CourseMode>;
}
