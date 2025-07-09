import { Request, Response } from 'express';
import { LearnerServices } from './learner.service';
import Joi from 'joi';
import LearnerValidationSchema from './learner.validation';

const createLearner = async (req: Request, res: Response) => {
  try {
    const { learner: learnerData } = req.body;
    const { error, value } = LearnerValidationSchema.validate(learnerData, {
      abortEarly: false, // show all errors, not just the first
      convert: true, // convert date string to actual Date object, etc.
    });

    const result = await LearnerServices.createLearnerIntoDb(learnerData);

    if (error) {
      res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        error,
      });
    }

    res.status(200).json({
      success: true,
      message: 'Learner is created successfully',
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: err,
    });
  }
};

const getAllLearners = async (req: Request, res: Response) => {
  try {
    const result = await LearnerServices.getAllLearnersFromDb();
    res.status(200).json({
      success: true,
      message: 'Learner is got successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleLearner = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await LearnerServices.getSingleLearnerFromDb(id);
    res.status(200).json({
      success: true,
      message: 'Learner is got successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const LearnerController = {
  createLearner,
  getAllLearners,
  getSingleLearner,
};
