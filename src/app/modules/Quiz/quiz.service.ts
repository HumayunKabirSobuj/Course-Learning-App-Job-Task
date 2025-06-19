import mongoose from 'mongoose';
import { TQuiz } from './quiz.interface';
import { Topic } from '../Topics/topics.model';
import AppError from '../../errors/AppError';
import { HttpStatus } from 'http-status-ts';
import { Quiz } from './quiz.model';

const createQuiz = async (payload: TQuiz) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const isTopicExists = await Topic.findById(payload.topicId).session(
      session,
    );

    if (!isTopicExists) {
      throw new AppError(HttpStatus.BAD_REQUEST, 'Topic not found');
    }

    const isQuizExists = await Quiz.findOne({
      topicId: payload.topicId,
    }).session(session);

    if (isQuizExists) {
      throw new AppError(
        HttpStatus.BAD_REQUEST,
        'Quiz already exists for this topic',
      );
    }

    const result = await Quiz.create([payload], { session });

    const quizId = result[0]._id;

    await Topic.findByIdAndUpdate(
      payload.topicId,
      { quiz: quizId },
      { session, new: true },
    );

    await session.commitTransaction();
    session.endSession();

    return result[0];
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

const getAllQuizzes = async () => {
  const quizzes = await Quiz.find().populate('topicId', 'title content');
  return quizzes;
};

export const QuizService = {
  createQuiz,
  getAllQuizzes,
};
