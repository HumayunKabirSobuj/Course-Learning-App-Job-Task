import { ICourse } from './course.interface';
import { Course } from './course.model';

const createCourse = async (payload: ICourse) => {
  //   console.log({ payload });

  const result = await Course.create(payload);
  return result;
};
const getAllCourses = async (): Promise<ICourse[]> => {
  return Course.find().populate('User', 'name email role');
};

export const CourseServices = {
  createCourse,
  getAllCourses,
};
