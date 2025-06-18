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
const getAllCourses = catchAsync(async (req, res) => {
  const result = await CourseServices.getAllCourses();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Courses Fetched successfully',
    data: result,
  });
});
const getSingleCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.getSingleCourse(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Single Course Fetched successfully',
    data: result,
  });
});

export const CourseController = {
  createCourse,
  getAllCourses,
  getSingleCourse
};
