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
    const formValues = Array.from(formData.values());
    const [title, description, detail] = formValues;

    const hasErrors = formValues.some(
      (value) => value.toString().trim() === ""
    );

    if (hasErrors) {
      alert("Please fill your information before submitting.");
      return;
    }

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
      <form className="space-y-4 text-brand-gray-900" onSubmit={handleOnSubmit}>
        <div className="space-y-1">
          <label htmlFor="title">
            Title: <span className="text-xs text-red-500">*</span>
          </label>
          <Input id="title" name="title" />
        </div>
        <div className="space-y-1">
          <label htmlFor="description">
            Description: <span className="text-xs text-red-500">*</span>
          </label>
          <Input id="description" name="description" />
        </div>
        <div className="space-y-1">
          <label htmlFor="detail">
            Detail: <span className="text-xs text-red-500">*</span>
          </label>
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
