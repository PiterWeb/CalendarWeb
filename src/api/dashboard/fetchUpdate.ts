import type eventModel from "../../models/eventModel";
import apiUrl from "../apiUrl";

const fetchUpdateEvent = async (event: eventModel) => {
  const res = await fetch(`${apiUrl}/user/updateEventById?id=${event.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(event),
  });

  return await res.json();
};

export default fetchUpdateEvent;
