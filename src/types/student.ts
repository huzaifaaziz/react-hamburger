export type AddressType = {
  city: string;
  country: string;
  street: string;
  zip: string;
};

export type StudentType = {
  address: AddressType;
  age: number;
  courses: string[];
  email: string;
  gender: string;
  gpa: number;
  id: number;
  image: string;
  name: string;
  phone: string;
};

export type FieldConfigType = {
  [key: string]:
    | string
    | {label: string; fields: {[K in keyof AddressType]: string}};
};
