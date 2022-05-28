import apiUrl from "../apiUrl";

const fetchImportant = async () => {
  const res = await fetch(`${apiUrl}/user/getImportantEvents`, {
    method: "GET",
    credentials: "include",
  });

  return res.json();
};

export default fetchImportant;
