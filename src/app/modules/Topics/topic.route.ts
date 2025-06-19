import { EnumUserRole } from '../Auth/auth.interface';
import express from 'express';
import RoleValidation from '../../middlewares/RoleValidation';
import { TopicControllers } from './topics.controller';

const router = express.Router();

router.get(
  '/',
  TopicControllers.getAllTopics,
);
router.get(
  '/:id',
  RoleValidation(EnumUserRole.TEACHER, EnumUserRole.STUDENT),
  TopicControllers.getAllTopics,
);

router.post(
  '/',
  RoleValidation(EnumUserRole.TEACHER),
  TopicControllers.createTopic,
);

export const TopicRoutes = router;
