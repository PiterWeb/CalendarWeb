import apiUrl from "../apiUrl";

const fetchDeleteEvent = async (id: string) => {
  const res = await fetch(`${apiUrl}/user/deleteEventById?id=${id}`, {
    method: "DELETE",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    credentials: "include",
  });

  return await res.json();
};

export default fetchDeleteEvent;
