import apiUrl from "../apiUrl";


const fetchCalendar = async () => {

    const res = await fetch(`${apiUrl}/user/getEvents`, {
        method: "GET",
        credentials: "include",
    });

    return res.json();
};

export default fetchCalendar;