import { HttpStatus } from 'http-status-ts';
import AppError from '../../errors/AppError';
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

const updateCourse = async (
  id: string,
  userId: string,
  payload: Partial<ICourse>,
) => {
  const foundCourse = await Course.findOne({ _id: id, createdBy: userId });
  if (!foundCourse) {
    throw new AppError(
      HttpStatus.UNAUTHORIZED,
      'You are not authorized to update this course',
    );
  }
  // console.log(foundCourse);
  const result = await Course.findByIdAndUpdate(
    id,
    { $set: payload },
    { new: true },
  );
  return result;
};

export const CourseServices = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
};
