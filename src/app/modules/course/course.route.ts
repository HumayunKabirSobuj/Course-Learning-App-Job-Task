import { EnumUserRole } from './../Auth/auth.interface';
import express from 'express';
import { CourseController } from './course.controller';
import RoleValidation from '../../middlewares/RoleValidation';

const router = express.Router();

router.get('/', CourseController.getAllCourses);
router.get(
  '/:id',
  RoleValidation(EnumUserRole.TEACHER, EnumUserRole.STUDENT),
  CourseController.getSingleCourse,
);
router.post(
  '/create-course',
  RoleValidation(EnumUserRole.TEACHER),
  CourseController.createCourse,
);

router.patch(
  '/update-course/:id',
  RoleValidation(EnumUserRole.TEACHER),
  CourseController.updateCourse,
);

export const CourseRoutes = router;
