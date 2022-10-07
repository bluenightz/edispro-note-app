import React from "react";
import { useRouter } from "next/router";
import { BiExit } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../hooks/store";
import { deleteCredential } from "../store/credentialSlice";
import { Axios } from "../axios";

const UserBar = () => {
  const { credential } = useAppSelector((selector) => selector.credential);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleOnClick = async () => {
    await Axios.get("/api/signout");
    dispatch(deleteCredential());
    router.push("/");
  };

  if (!credential) return null;

  return (
    <div className="flex justify-between px-5 py-2 text-sm text-white bg-brand-yellow">
      <div>{credential?.email}</div>
      <div
        className="flex items-center space-x-2 cursor-pointer flex-nowrap"
        onClick={handleOnClick}
      >
        <span>Sign out</span> <BiExit />
      </div>
    </div>
  );
};

export default UserBar;
