import Link from "next/link";
import React from "react";
import { Note } from "../interfaces";

type NoteListProps = {
  notes?: Note[];
};

const NoteList = ({ notes }: NoteListProps) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 grid-rows-1">
      {notes &&
        notes.map(({ id, title, description }) => {
          return (
            <Link href={`/notes/${id}`} key={`note-${id}`}>
              <a className="bg-white rounded-xl p-5 space-y-2 hover:shadow-md transition-shadow duration-500">
                <h3 className="text-xl text-brand-gray-900 font-bold">
                  {title}
                </h3>
                <p className="text-gray-400 line-clamp-5">{description}</p>
              </a>
            </Link>
          );
        })}
    </div>
  );
};

export default NoteList;
