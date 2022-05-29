import apiUrl from "../apiUrl";
import type responseModel from "../../models/responseModel";

const register = async (username: string, password: string) => {
  const res = await fetch(`${apiUrl}/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const response: Promise<responseModel> = await res.json();

  const data: responseModel = await response;

  if (data.status === "error") {
    throw data.message;
  }
  return data.status;
};

export default register;
