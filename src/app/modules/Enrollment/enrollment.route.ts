import { EnumUserRole } from '../Auth/auth.interface';
import express from 'express';
import RoleValidation from '../../middlewares/RoleValidation';
import { EnrollmentController } from './enrollment.controller';

const router = express.Router();


router.post(
  '/',
  RoleValidation(EnumUserRole.STUDENT),
  EnrollmentController.createEnrollment,
);



export const EnrollmentRoutes = router;
