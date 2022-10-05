import type { NextApiRequest, NextApiResponse } from "next";
import { Note } from "../../../interfaces";
import { data } from "./index";

type ErrorType = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Note | ErrorType>
) {
  const { id } = req.query;
  const note = data.find((note) => note.id == id) || {
    id: "",
    title: "",
    description: "",
    detail: "",
  };

  if (!note) res.status(400).json({ message: "error" });

  res.status(200).json(note);
}
