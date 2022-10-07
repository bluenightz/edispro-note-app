import React, { FormEvent, ReactElement, useState } from "react";
import { AppName, Button, Input } from "../components";
import { BiUser, BiLockAlt } from "react-icons/bi";
import { useRouter } from "next/router";
import { Axios } from "../axios";
import { AxiosError } from "axios";
import { FirebaseError } from "firebase/app";
import { User } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../hooks/store";
import { setCredential } from "../store/credentialSlice";
import { NextPageWithLayout } from "../interfaces";
import Layout from "../components/Layout";

type SignInResponse = {
  credential: User;
};

const Home: NextPageWithLayout = () => {
  const { credential } = useAppSelector((selector) => selector.credential);
  const dispatch = useAppDispatch();
  const [errors, setErrors] = useState<string | null>(null);
  const router = useRouter();

  if (credential) router.push("/notes");

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = formData.values();
    const [email, password] = Array.from(values);

    try {
      const res = await Axios.post<SignInResponse>("/api/signin", {
        email: email.toString(),
        password: password.toString(),
      });

      const { credential } = res.data;
      dispatch(setCredential(credential));
      router.push("/notes");
    } catch (err) {
      const errors = err as AxiosError;
      const firebaseError = errors.response?.data as FirebaseError;
      setErrors(firebaseError.code || errors.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5 space-y-10 min-h-[100vh]">
      <AppName className="font-bold text-brand-gray-900">
        Note your important note.
      </AppName>
      <form className="w-full max-w-md space-y-5" onSubmit={handleOnSubmit}>
        <Input Icon={BiUser} name="email" id="email" placeholder="email" />
        <Input type="password" Icon={BiLockAlt} name="password" id="password" />
        <div className="text-right">
          <Button type="submit">Sign in</Button>
        </div>
        <div>
          <div className="text-sm text-center text-brand-gray-500">
            chattapon.uthum@gmail.com | 111111
          </div>
          {errors && (
            <div className="text-sm text-center text-red-600">{errors}</div>
          )}
        </div>
      </form>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
