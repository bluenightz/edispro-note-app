import { User } from "firebase/auth";

export type ErrorResponse = {
  message: string;
  statusCode?: number;
};

export type AuthResponse = {
  message: string;
  credential: User;
};

export type Note = {
  id: string;
  title: string;
  description: string;
  detail: string;
};
