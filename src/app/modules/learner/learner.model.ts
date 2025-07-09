import { Schema, model } from 'mongoose';
import { Guardian, Learner, UserName } from './learner.interface';
import validator from 'validator';

const UserNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'Please provide your first name.'],
    trim: true,
    // maxlength: [10, '10 characters'],
    // set: function capitalizeFirstLetter(value: string): string {
    //   if (!value) return value;
    //   return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    // },
  },
  middleName: {
    type: String,
    required: [true, 'Middle name is required for identification.'],
    trim: true,
    // set: function capitalizeFirstLetter(value: string): string {
    //   if (!value) return value;
    //   return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    // },
  },
  lastName: {
    type: String,
    required: [true, 'Last name is mandatory for registration.'],
    trim: true,
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    //   message: '{VALUE} is not valid',
    // },
  },
});

const GuardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required to proceed."],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, "Please provide your father's occupation."],
    trim: true,
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is necessary for emergencies."],
    trim: true,
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is mandatory."],
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: [true, "Please provide your mother's occupation."],
    trim: true,
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is necessary for emergencies."],
    trim: true,
  },
});

const LocalGuardianSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Local guardian name is required.'],
    trim: true,
  },
  occupation: {
    type: String,
    required: [true, 'Occupation of the local guardian is required.'],
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number of the local guardian is required.'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'Address of the local guardian is required.'],
    trim: true,
  },
});

const LearnerSchema = new Schema<Learner>(
  {
    id: {
      type: String,
      unique: true,
      required: [true, 'Please provide a unique learner ID.'],
      trim: true,
    },
    name: {
      type: UserNameSchema,
      required: [true, 'Your full name is required to proceed.'],
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female'],
        message:
          'Gender must be either "male" or "female". Please provide a valid gender.',
      },
      required: [true, 'Gender selection is mandatory.'],
      trim: true,
    },
    dateOfbirth: {
      type: String,
      required: [true, 'Date of birth is required for age verification.'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email address is required for communication.'],
      unique: true,
      trim: true,
      // validate: {
      //   validator: (value: string) => validator.isEmail(value),
      //   message: '{VALUE} is not valid email type',
      // },
    },
    contactNo: {
      type: String,
      required: [true, 'Your contact number is essential for registration.'],
      trim: true,
    },
    emergencyContactNo: {
      type: String,
      required: [
        true,
        'Emergency contact number is needed for urgent situations.',
      ],
      trim: true,
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message:
          'Invalid blood group. Please select from A+, A-, B+, B-, AB+, AB-, O+, O-.',
      },
      trim: true,
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is required for registration.'],
      trim: true,
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent address is necessary for documentation.'],
      trim: true,
    },
    guardian: {
      type: GuardianSchema,
      required: [true, 'Guardian details are required for registration.'],
    },
    localGuardian: {
      type: LocalGuardianSchema,
      required: [true, 'Local guardian details are necessary for emergencies.'],
    },
    profileImage: {
      type: String,
      required: [true, 'Profile image is mandatory for registration.'],
      trim: true,
    },
    isActive: {
      type: String,
      enum: {
        values: ['active', 'inactive'],
        message: 'The status must be either "active" or "inactive".',
      },
      default: 'active',
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const LearnerModel = model<Learner>('Learner', LearnerSchema);
