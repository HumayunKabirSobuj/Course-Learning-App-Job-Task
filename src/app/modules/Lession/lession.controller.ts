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

export const LessionController = {
  createLession,
};
