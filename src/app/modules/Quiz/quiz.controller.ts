import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { QuizService } from './quiz.service';

const createQuiz = catchAsync(async (req, res) => {
  const result = await QuizService.createQuiz(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Quiz created successfully',
    data: result,
  });
});

const getAllQuizzes = catchAsync(async (req, res) => {
  const result = await QuizService.getAllQuizzes();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Quizzes retrieved successfully',
    data: result,
  });
});

export const QuizController = {
  createQuiz,
  getAllQuizzes,
};
