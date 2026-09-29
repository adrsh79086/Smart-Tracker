export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
};

export type CreateUser = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
};