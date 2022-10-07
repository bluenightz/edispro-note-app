import { User } from "firebase/auth";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

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

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
