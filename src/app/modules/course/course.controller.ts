import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CourseServices } from './course.service';

const createCourse = catchAsync(async (req, res) => {
  const user = req.user;
  const data = {
    ...req.body,
    User: user._id,
  };
  // console.log(data);

  // console.log(data);
  const result = await CourseServices.createCourse(data);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Course Created successfully',
    data: result,
  });
});

export const CourseController = {
  createCourse,
};
