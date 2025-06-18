import { ICourse } from './course.interface';
import { Course } from './course.model';

const createCourse = async (payload: ICourse) => {
  //   console.log({ payload });

  const result = await Course.create(payload);
  return result;
};

export const CourseServices = {
  createCourse,
};
