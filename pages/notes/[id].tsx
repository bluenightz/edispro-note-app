import { useRouter } from "next/router";
import React from "react";
import { BiTrash } from "react-icons/bi";
import { AppName } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { deleteNote } from "../../store/notesSlice";

const NoteDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { notes } = useAppSelector((selector) => selector.notes);
  const dispatch = useAppDispatch();
  const [note] = notes.filter((note) => note.id == id);

  const handleClick = () => {
    if (confirm("This note will delete. Are you sure?")) {
      dispatch(deleteNote({ id: String(id) }));
      router.push("/notes");
    }
  };

  return (
    <div className="p-5 space-y-5">
      {note && (
        <>
          <AppName className="flex items-center space-x-3" backButton>
            <span className="flex-1 text-left">{note.title}</span>
            <div className="text-right basis-20 text-brand-gray-500">
              <BiTrash
                className="inline-block cursor-pointer"
                onClick={handleClick}
              />
            </div>
          </AppName>
          <div className="text-gray-500">{note.detail}</div>
        </>
      )}
    </div>
  );
};

export default NoteDetail;
