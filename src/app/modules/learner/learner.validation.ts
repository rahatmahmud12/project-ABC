import Joi from 'joi';
const UserNameValidation = Joi.object({
  firstName: Joi.string().max(10).trim().required().messages({
    'string.base': 'First name must be a string.',
    'string.max': 'First name must be at most 10 characters.',
    'any.required': 'Please provide your first name.',
  }),
  middleName: Joi.string().trim().required().messages({
    'any.required': 'Middle name is required for identification.',
  }),
  lastName: Joi.string()
    .trim()
    .regex(/^[A-Za-z]+$/)
    .required()
    .messages({
      'string.pattern.base': 'Last name must contain only letters.',
      'any.required': 'Last name is mandatory for registration.',
    }),
});

const GuardianValidation = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    'any.required': "Father's name is required to proceed.",
  }),
  fatherOccupation: Joi.string().trim().required().messages({
    'any.required': "Please provide your father's occupation.",
  }),
  fatherContactNo: Joi.string()
    .trim()
    .pattern(/^01[3-9]\d{8}$/)
    .required()
    .messages({
      'string.pattern.base': 'Father contact number is not valid.',
      'any.required': "Father's contact number is necessary for emergencies.",
    }),
  motherName: Joi.string().trim().required().messages({
    'any.required': "Mother's name is mandatory.",
  }),
  motherOccupation: Joi.string().trim().required().messages({
    'any.required': "Please provide your mother's occupation.",
  }),
  motherContactNo: Joi.string()
    .trim()
    .pattern(/^01[3-9]\d{8}$/)
    .required()
    .messages({
      'string.pattern.base': 'Mother contact number is not valid.',
      'any.required': "Mother's contact number is necessary for emergencies.",
    }),
});

const LocalGuardianValidation = Joi.object({
  name: Joi.string().trim().required().messages({
    'any.required': 'Local guardian name is required.',
  }),
  occupation: Joi.string().trim().required().messages({
    'any.required': 'Occupation of the local guardian is required.',
  }),
  contactNo: Joi.string()
    .trim()
    .pattern(/^01[3-9]\d{8}$/)
    .required()
    .messages({
      'string.pattern.base': 'Local guardian contact number is not valid.',
      'any.required': 'Contact number of the local guardian is required.',
    }),
  address: Joi.string().trim().required().messages({
    'any.required': 'Address of the local guardian is required.',
  }),
});

const LearnerValidationSchema = Joi.object({
  id: Joi.string().trim().required().messages({
    'any.required': 'Please provide a unique learner ID.',
  }),
  name: UserNameValidation.required().messages({
    'any.required': 'Your full name is required to proceed.',
  }),
  gender: Joi.string().valid('male', 'female').required().messages({
    'any.only': 'Gender must be either "male" or "female".',
    'any.required': 'Gender selection is mandatory.',
  }),
  dateOfbirth: Joi.date().required().messages({
    'any.required': 'Date of birth is required for age verification.',
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Please provide a valid email address.',
      'any.required': 'Email address is required for communication.',
    }),

  contactNo: Joi.string()
    .trim()
    .pattern(/^01[3-9]\d{8}$/)
    .required()
    .messages({
      'string.pattern.base': 'Your contact number is not valid.',
      'any.required': 'Your contact number is essential for registration.',
    }),
  emergencyContactNo: Joi.string()
    .trim()
    .pattern(/^01[3-9]\d{8}$/)
    .required()
    .messages({
      'string.pattern.base': 'Emergency contact number is not valid.',
      'any.required':
        'Emergency contact number is needed for urgent situations.',
    }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional()
    .messages({
      'any.only':
        'Invalid blood group. Please select from A+, A-, B+, B-, AB+, AB-, O+, O-.',
    }),
  presentAddress: Joi.string().trim().required().messages({
    'any.required': 'Present address is required for registration.',
  }),
  permanentAddress: Joi.string().trim().required().messages({
    'any.required': 'Permanent address is necessary for documentation.',
  }),
  guardian: GuardianValidation.required().messages({
    'any.required': 'Guardian details are required for registration.',
  }),
  localGuardian: LocalGuardianValidation.required().messages({
    'any.required': 'Local guardian details are necessary for emergencies.',
  }),
  profileImage: Joi.string().uri().required().messages({
    'string.uri': 'Profile image must be a valid URL.',
    'any.required': 'Profile image is mandatory for registration.',
  }),
  isActive: Joi.string()
    .valid('active', 'inactive')
    .default('active')
    .messages({
      'any.only': 'The status must be either "active" or "inactive".',
    }),
});
export default LearnerValidationSchema;
