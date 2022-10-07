import axios from "axios";
export const Axios = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
      ? ""
      : "http://localhost:3000",
});
