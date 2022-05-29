import apiUrl from "../apiUrl";

const fetchImportant = async () => {
  const res = await fetch(`${apiUrl}/user/getImportantEvents`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  });

  return res.json();
};

export default fetchImportant;
