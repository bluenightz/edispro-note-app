import "../../firebase";
import { NextApiRequest, NextApiResponse } from "next";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { AuthResponse } from "../../interfaces";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse | FirebaseError>
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const auth = getAuth();

    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      res.status(200).send({ message: "success", credential: credential.user });
    } catch (error) {
      const e = error as FirebaseError;
      res.status(500).send(e);
    }
  }
}
