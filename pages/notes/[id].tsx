import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { Axios } from "../../axios";
import { AppName } from "../../components";
import { Note } from "../../interfaces";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

type NotesDetailPageProps = {
  data: Note;
} & NextPage;

const NoteDetail = ({ data }: NotesDetailPageProps) => {
  const { title, detail } = data;
  return (
    <div className="p-5 space-y-5">
      <AppName className="flex items-center space-x-3">
        <Link href="/notes">
          <a className="flex items-center text-2xl space-x-3">
            <BiArrowBack />
          </a>
        </Link>{" "}
        <span>{title}</span>
      </AppName>
      <div className="text-gray-500">{detail}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.params) {
    const id = context.params.id;
    const { data } = await Axios.get<Note>(`/api/notes/${id}`);
    return {
      props: {
        data,
      },
    };
  }

  return {
    notFound: true,
  };
};

export default NoteDetail;
