import { EnumUserRole } from './../Auth/auth.interface';
import express from 'express';
import { CourseController } from './course.controller';
import RoleValidation from '../../middlewares/RoleValidation';

const router = express.Router();

router.get('/', CourseController.getAllCourses);
router.post(
  '/create-course',
  RoleValidation(EnumUserRole.TEACHER),
  CourseController.createCourse,
);

export const CourseRoutes = router;
