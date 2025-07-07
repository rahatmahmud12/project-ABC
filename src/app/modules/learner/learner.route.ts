import express from 'express';
import { LearnerController } from './learner.controller';
const router = express.Router();
//have to call controller function
router.post('/create-learner', LearnerController.createLearner);
router.get('/', LearnerController.getAllLearners);
router.get('/:id', LearnerController.getSingleLearner);
export const LearnerRoutes = router;
