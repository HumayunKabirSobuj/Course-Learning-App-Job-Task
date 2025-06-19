import { EnumUserRole } from '../Auth/auth.interface';
import express from 'express';
import RoleValidation from '../../middlewares/RoleValidation';
import { TopicControllers } from './topics.controller';

const router = express.Router();

router.get('/', TopicControllers.getAllTopics);
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

router.patch(
  '/:id',
  RoleValidation(EnumUserRole.TEACHER),
  TopicControllers.updateTopic,
);
router.delete(
  '/:id',
  RoleValidation(EnumUserRole.TEACHER),
  TopicControllers.deleteTopic,
);

export const TopicRoutes = router;
