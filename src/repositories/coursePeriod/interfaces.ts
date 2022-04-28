import CoursePeriod from '../../entities/CoursePeriod';

export interface ICoursePeriodRepo {
  getCoursePeriods: () => Promise<CoursePeriod[]>;

  getOneMode: (id: string) => Promise<CoursePeriod>;
}
