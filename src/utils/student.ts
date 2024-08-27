import {FieldConfigType, StudentType} from '../types/student';

export const isStudentType = (
  student: StudentType | {}
): student is StudentType => {
  return (student as StudentType).name !== undefined;
};

export const FIELD_CONFIG: FieldConfigType = {
  email: 'Email',
  phone: 'Phone',
  age: 'Age',
  gpa: 'GPA',
  gender: 'Gender',
  address: {
    label: 'Address',
    fields: {
      street: 'Street',
      city: 'City',
      country: 'Country',
      zip: 'ZIP',
    },
  },
};
