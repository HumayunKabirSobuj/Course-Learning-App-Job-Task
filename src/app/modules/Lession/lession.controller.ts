import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { LessionService } from './lession.service';

const createLession = catchAsync(async (req, res) => {
  const result = await LessionService.createLession(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Course Created successfully',
    data: result,
  });
});

const getAllLessonFromDB = catchAsync(async (req, res) => {
  const result = await LessionService.getAllLessonFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'All Lessons fetched successfully',
    data: result,
  });
});

const getSingleLesson = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await LessionService.getSingleLesson(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Single Lesson fetched successfully',
    data: result,
  });
});

const updateLession = catchAsync(async (req, res) => {
  const { id } = req.params;  
  const result = await LessionService.updateLession(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Lesson updated successfully',
    data: result,
  });

});

const deleteLession = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await LessionService.deleteLession(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Lesson deleted successfully',
    data: result,
  });
}
);


export const LessionController = {
  createLession,
  getAllLessonFromDB,
  getSingleLesson,
  updateLession,
  deleteLession
};
