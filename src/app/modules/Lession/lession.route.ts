import { EnumUserRole } from '../Auth/auth.interface';
import express from 'express';
import RoleValidation from '../../middlewares/RoleValidation';
import { LessionController } from './lession.controller';

const router = express.Router();

router.get('/', LessionController.getAllLessonFromDB);

router.get(
  '/:id',
  RoleValidation(EnumUserRole.TEACHER, EnumUserRole.STUDENT),
  LessionController.getSingleLesson,
);

router.patch(
  '/:id',
  RoleValidation(EnumUserRole.TEACHER),
  LessionController.updateLession,
);
router.post(
  '/',
  RoleValidation(EnumUserRole.TEACHER),
  LessionController.createLession,
);

export const LessionRoutes = router;
