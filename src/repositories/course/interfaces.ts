interface ICourse {
  id: string;
  title: string;
  address: string;
  starts_at: Date; 
  ends_at: Date;
  start_time: Date;
  end_time: Date;
  created_at: Date;
  updated_at: Date;
}

interface ICourseFindOne{
  id: string;
}

interface ICourseRepo {
  findOneOrFail : (id: ICourseFindOne) => Promise<ICourse> ;
  deleteOneCourse : (ObjectId: ICourseFindOne) => Promise<any>;

}

export { ICourse,ICourseFindOne ,ICourseRepo };