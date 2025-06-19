import mongoose from 'mongoose';
import { Topic } from './topics.model';
import { TTopic } from './topics.interface';
import { Lesson } from '../Lession/lession.model';
import AppError from '../../errors/AppError';
import { HttpStatus } from 'http-status-ts';

const createTopic = async (payload: TTopic) => {
  const { lessonId, title } = payload;

  // Check if topic already exists for same course & lesson
  const existingTopic = await Topic.findOne({ title, lessonId });
  if (existingTopic) {
    throw new AppError(
      HttpStatus.BAD_REQUEST,
      'Topic already exists for this course and lesson',
    );
  }

  const findLesson = await Lesson.findById(lessonId);
  if (!findLesson) {
    throw new AppError(HttpStatus.NOT_FOUND, 'Lesson not found');
  }

  const topicData = {
    ...payload,
    courseId: findLesson.courseId, // ensure correct courseId
  };

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const result = await Topic.create([topicData], { session });
    const topicId = result[0]._id;

    const updatedLesson = await Lesson.findByIdAndUpdate(
      lessonId,
      { $addToSet: { topics: topicId } },
      { new: true, session },
    );

    if (!updatedLesson) {
      throw new AppError(HttpStatus.BAD_REQUEST, 'Failed to update lesson');
    }

    await session.commitTransaction(); // ✅ commit the transaction
    return result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    await session.abortTransaction(); // ❗ rollback if error
    throw new AppError(
      HttpStatus.BAD_REQUEST,
      error.message || 'Operation Failed',
    );
  } finally {
    session.endSession(); // ✅ always close the session
  }
};

const getAllTopics = async () => {
  const result = await Topic.find().populate(['courseId', 'lessonId']);
  return result;
};

const getSingleTopic = async (topicId: string) => {
  const result = await Topic.findById(topicId).populate([
    'courseId',
    'lessonId',
  ]);
  if (!result) {
    throw new AppError(HttpStatus.NOT_FOUND, 'Topic not found');
  }
  return result;
};

export const TopicServices = {
  createTopic,
  getAllTopics,
  getSingleTopic
};
