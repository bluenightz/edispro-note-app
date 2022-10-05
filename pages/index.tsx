import type { NextPage } from "next";
import { AppName, Button, Input } from "../components";
import { BiUser, BiLockAlt } from "react-icons/bi";
import { useRouter } from "next/router";
import React, { FormEvent } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="p-5 space-y-5">
      <AppName className="text-brand-gray-900 font-bold">
        Note your important note.
      </AppName>
      <form className="space-y-5" onSubmit={handleOnSubmit}>
        <Input Icon={BiUser} />
        <Input type="password" Icon={BiLockAlt} />
        <div className="text-right">
          <Button type="submit">Sign in</Button>
        </div>
      </form>
    </div>
  );
};

export default Home;
