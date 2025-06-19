import { EnumUserRole } from '../Auth/auth.interface';
import express from 'express';
import RoleValidation from '../../middlewares/RoleValidation';
import { TopicControllers } from './topics.controller';

const router = express.Router();

router.post(
  '/',
  RoleValidation(EnumUserRole.TEACHER),
  TopicControllers.createTopic,
);

export const TopicRoutes = router;
