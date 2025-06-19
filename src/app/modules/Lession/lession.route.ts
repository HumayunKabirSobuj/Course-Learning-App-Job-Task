import { EnumUserRole } from '../Auth/auth.interface';
import express from 'express';
import RoleValidation from '../../middlewares/RoleValidation';
import { LessionController } from './lession.controller';

const router = express.Router();

router.post(
  '/create-lession',
  RoleValidation(EnumUserRole.TEACHER),
  LessionController.createLession,
);
export const LessionRoutes = router;
