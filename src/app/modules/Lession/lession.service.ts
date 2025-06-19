import { HttpStatus } from 'http-status-ts';
import AppError from '../../errors/AppError';
import { TLesson } from './lession.interface';
import { Lesson } from './lession.model';
import { Course } from '../course/course.model';
import mongoose from 'mongoose';

const createLession = async (payload: TLesson) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { courseId, title, description } = payload;
    // console.log(payload);
    const isCourseExist = await Course.findById({
      _id: courseId,
    });
    // console.log(isCourseExist);

    if (!isCourseExist) {
      throw new AppError(HttpStatus.NOT_FOUND, 'Course not found');
    }

    const isLessonExist = await Lesson.findOne({
      courseId,
      title,
    });

    // console.log(isLessonExist);

    if (isLessonExist) {
      throw new AppError(HttpStatus.CONFLICT, 'Lesson already exists');
    }

    const lessonData = {
      courseId,
      title,
      description,
    };
    // console.log(lessonData);

    const lessionPost = await Lesson.create(lessonData);
    // console.log(lessionPost);
    await Course.findByIdAndUpdate(
      courseId,
      { $addToSet: { lessons: lessionPost._id } },
      { new: true },
    );

    // console.log(updatedCourse);
    await session.commitTransaction();
    return lessionPost;

    // const result = await Lesson.create(payload);
    // return result
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    await session.abortTransaction();
    throw new AppError(500, err.message || 'Operation Faid');
  } finally {
    session.endSession();
  }
};

const getAllLessonFromDB = async () => {
  const result = await Lesson.find();
  return result;
};

export const LessionService = {
  createLession,
  getAllLessonFromDB
};
