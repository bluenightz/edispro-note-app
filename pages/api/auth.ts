import { NextApiRequest, NextApiResponse } from "next";
import "../../firebase";
import { getAuth } from "firebase/auth";
import { AuthResponse, ErrorResponse } from "../../interfaces";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse | ErrorResponse>
) {
  if (req.method === "GET") {
    const auth = getAuth();

    if (auth.currentUser) {
      res
        .status(200)
        .json({ message: "success", credential: auth.currentUser });
      return;
    }

    res.status(401).json({ message: "please sign in", statusCode: 401 });
  }
}
