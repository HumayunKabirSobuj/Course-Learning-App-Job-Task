import { EnumUserRole } from './../Auth/auth.interface';
import express from 'express';
import { CourseController } from './course.controller';
import RoleValidation from '../../middlewares/RoleValidation';

const router = express.Router();

router.get('/', CourseController.getAllCourses);
router.get(
  '/:id',
  CourseController.getSingleCourse,
  RoleValidation(EnumUserRole.TEACHER, EnumUserRole.STUDENT),
);

router.patch(
  '/:id',
  RoleValidation(EnumUserRole.TEACHER),
  CourseController.updateCourse,
);
router.post(
  '/create-course',
  RoleValidation(EnumUserRole.TEACHER),
  CourseController.createCourse,
);

router.delete(
  '/:id',
  RoleValidation(EnumUserRole.TEACHER),
  CourseController.deleteCourse,
);

export const CourseRoutes = router;
