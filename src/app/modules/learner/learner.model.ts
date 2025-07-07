import { Schema, model } from 'mongoose';
import { Guardian, Learner, UserName } from './learner.interface'; // adjust path if needed

const UserNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const GuardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const LocalGuardianSchema = new Schema({
  name: { type: String, required: true },
  occupaton: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const LearnerSchema = new Schema<Learner>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: UserNameSchema, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    dateOfbirth: { type: String },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: { type: GuardianSchema, required: true },
    localGuardian: { type: LocalGuardianSchema, required: true },
    profileImage: { type: String },
    isActive: { type: String, enum: ['active', 'inactive'], required: true },
  },
  {
    timestamps: true,
  },
);

export const LearnerModel = model<Learner>('Learner', LearnerSchema);
