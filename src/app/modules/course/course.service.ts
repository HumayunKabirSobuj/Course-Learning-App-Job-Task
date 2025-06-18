import { HttpStatus } from 'http-status-ts';
import AppError from '../../errors/AppError';
import { ICourse } from './course.interface';
import { Course } from './course.model';
import { Types } from 'mongoose';

const createCourse = async (payload: ICourse) => {
  //   console.log({ payload });

  const result = await Course.create(payload);
  return result;
};
const getAllCourses = async () => {
  return Course.find().populate('createdBy', 'name email role');
};

// export const getSingleCourse = async (id: string) => {
//   const result = Course.findById(id);
//   return result;
// };

export const getSingleCourse = async (id: string, userId: string) => {
  const course = await Course.findById(id);

  if (!course) {
    throw new Error('Course not found');
  }

  // Check if user already viewed
  const alreadyViewed = course.views?.some(
    (viewedUserId: Types.ObjectId) => viewedUserId.toString() === userId,
  );

  if (!alreadyViewed) {
    course.views?.push(new Types.ObjectId(userId));
    await course.save();
  }

  return course;
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
