import React from "react";
import { NextPage } from "next";
import { AppName, NoteList, SearchBar } from "../../components";
import { useAppSelector } from "../../hooks/store";
import { MdAddCircleOutline } from "react-icons/md";
import { useRouter } from "next/router";

type NotesPageProps = {} & NextPage;

const Posts = () => {
  const router = useRouter();
  const { notes } = useAppSelector((selector) => selector.notes);

  const handleOnClick = () => {
    router.push("/notes/create");
  };

  return (
    <div className="p-5 space-y-5">
      <AppName className="relative">
        Notes
        <MdAddCircleOutline
          className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer"
          onClick={handleOnClick}
        />
      </AppName>
      <SearchBar />
      <NoteList notes={notes} />
    </div>
  );
};

export default Posts;
