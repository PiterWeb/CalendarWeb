import fetchCalendar from "../../api/dashboard/fetchCalendar";
import { useQuery } from "react-query";
import EventComponent from "../../components/EventComponent";
import { css } from "@emotion/css";
import type EventModel from "../../models/eventModel";
import BtnComponent from "../../components/BtnComponent";
import { useNavigate } from "react-router-dom";

const eventsSectionStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  flex-grow: 1;
  padding: 1.5rem;
`;

function CalendarDashboardRoute() {
  const { data, isLoading, isError } = useQuery(
    ["calendar", "all"],
    fetchCalendar
  );

  const navigate = useNavigate();

  if (isLoading) return <h3>Loading...</h3>;

  if (isError) return <h3>Error! </h3>;

  return (
    <>
      <h1>Calendar</h1>

      {data?.message ? (
        <section className={eventsSectionStyle}>
          {data.message.map((event: EventModel, i: number) => {
            return <EventComponent key={i} {...event}></EventComponent>;
          })}
        </section>
      ) : (
        <section style={{ textAlign: "center" }}>
          <h2>No events</h2>

          <BtnComponent color="error" variant="contained" size="large" onClick={() =>{
            navigate("/dashboard/create")
          }}>
            Try to create a new one
          </BtnComponent>
        </section>
      )}
    </>
  );
}

export default CalendarDashboardRoute;
