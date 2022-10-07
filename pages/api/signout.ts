import "../../firebase";
import { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "firebase/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const auth = getAuth();
    await auth.signOut();
    res.status(200).send({ message: "sign out" });
  }
}
