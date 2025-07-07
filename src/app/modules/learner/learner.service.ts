import { Learner } from './learner.interface';
import { LearnerModel } from './learner.model';

const createLearnerIntoDb = async (learner: Learner) => {
  const result = await LearnerModel.create(learner);
  return result;
};
const getAllLearnersFromDb = async () => {
  const result = await LearnerModel.find();
  return result;
};
const getSingleLearnerFromDb = async (id: string) => {
  const result = await LearnerModel.findOne({ id });
  return result;
};

export const LearnerServices = {
  createLearnerIntoDb,
  getAllLearnersFromDb,
  getSingleLearnerFromDb,
};
