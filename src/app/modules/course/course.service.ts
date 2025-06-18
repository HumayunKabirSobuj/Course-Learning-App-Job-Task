
import { ICourse } from './course.interface';
import { Course } from './course.model';

const createCourse = async (payload: ICourse) => {
  //   console.log({ payload });

  const result = await Course.create(payload);
  return result;
};
const getAllCourses = async () => {
  return Course.find().populate('User', 'name email role');
};

export const getSingleCourse = async (id: string) => {
  const result = Course.findById(id);
  return result;
};

export const CourseServices = {
  createCourse,
  getAllCourses,
  getSingleCourse,
};
