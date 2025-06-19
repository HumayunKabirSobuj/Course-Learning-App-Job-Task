import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TopicServices } from './topics.service';
import { HttpStatus } from 'http-status-ts';

const createTopic = catchAsync(async (req, res) => {
  const result = await TopicServices.createTopic(req.body);
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: 'Course Created successfully',
    data: result,
  });
});

export const TopicControllers = {
  createTopic,
};
