import apiUrl from "../apiUrl";
import type eventModel from "../../models/eventModel";

const fetchCreate = async (data : eventModel) => {
    
    const res = await fetch(`${apiUrl}/user/createEvent`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(data)
    });

    const response = await res.json();

    return { message: response.message, status: response.status};
};

export default fetchCreate;