import React, { AllHTMLAttributes, DetailedHTMLProps, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/store";
import UserBar from "./UserBar";
import { setCredential } from "../store/credentialSlice";
import useSWR from "swr";
import { useRouter } from "next/router";
import BeatLoader from "react-spinners/BeatLoader";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const LayoutAuth = ({
  children,
}: DetailedHTMLProps<AllHTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  const { data } = useSWR("/api/auth", fetcher);
  const { credential } = useAppSelector((selector) => selector.credential);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (data?.statusCode == 401 && router.route !== "/") {
      router.push("/");
    }
  }, [data, router]);

  useEffect(() => {
    dispatch(setCredential(data?.credential || null));
  }, [data, dispatch]);

  if (!credential && router.route !== "/") {
    return (
      <div className="min-h-[100vh] flex items-center justify-center text-center">
        <BeatLoader color="#fcbd02" size={8} />
      </div>
    );
  }

  return (
    <div>
      {credential && <UserBar />}
      {children}
    </div>
  );
};

export default LayoutAuth;
