import { useRouter } from "next/router";
import React, { FormEvent } from "react";
import { AppName, Button, Input, TextArea } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { addNote } from "../../store/notesSlice";

const Create = () => {
  const router = useRouter();
  const { notes } = useAppSelector((selector) => selector.notes);
  const dispatch = useAppDispatch();
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const [title, description, detail] = Array.from(formData.values());
    dispatch(
      addNote({
        id: String(notes.length + 1),
        title: title.toString(),
        description: description.toString(),
        detail: detail.toString(),
      })
    );
    router.push("/notes");
  };

  return (
    <div className="p-5 space-y-5">
      <AppName className="flex items-center space-x-3" backButton>
        <span>Create Note</span>
      </AppName>
      <form className="text-brand-gray-900 space-y-4" onSubmit={handleOnSubmit}>
        <div className="space-y-1">
          <label htmlFor="title">Title:</label>
          <Input id="title" name="title" />
        </div>
        <div className="space-y-1">
          <label htmlFor="description">Description:</label>
          <Input id="description" name="description" />
        </div>
        <div className="space-y-1">
          <label htmlFor="detail">Detail:</label>
          <TextArea id="detail" name="detail" />
        </div>
        <div className="text-right">
          <Button type="submit">Create</Button>
        </div>
      </form>
    </div>
  );
};

export default Create;
