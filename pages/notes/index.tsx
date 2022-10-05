import { GetStaticProps, NextPage } from "next";
import React from "react";
import { Axios } from "../../axios";
import { Note } from "../../interfaces";
import { AppName, NoteList, SearchBar } from "../../components";

type NotesPageProps = {
  notes: Note[];
} & NextPage;

const Posts = ({ notes }: NotesPageProps) => {
  return (
    <div className="p-5 space-y-5">
      <AppName>Notes</AppName>
      <SearchBar />
      <NoteList notes={notes} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await Axios.get<Note[]>("/api/notes");
  const notes = res.data;
  return {
    props: { notes },
  };
};

export default Posts;
