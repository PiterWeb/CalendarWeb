import { useQuery } from "react-query";
import fetchImportant from "../../api/dashboard/fetchImportant";
import type EventModel from "../../models/eventModel";
import EventComponent from "../../components/EventComponent";
import { css } from "@emotion/css";

function ImportantDashboardRoute() {
  const { data, isLoading, isError } = useQuery(["calendar" , "important"], fetchImportant);

  if (isLoading) return <h3>Loading...</h3>;

  if (isError) return <h3>Error! </h3>;

  const eventsSectionStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  flex-grow: 1;
  padding: 1.5rem;
`;

  return (
    <>
      <h1>Important Events </h1>

      <section className={eventsSectionStyle}>
      {data?.message && data.status === "ok"? (data.message.map((event: EventModel, i: number) => {
            return <EventComponent key={i} {...event}></EventComponent>;
          })) : (<>
          
            <h3>No important events found</h3>
          </>)}
      </section>
      
    </>
  );
}

export default ImportantDashboardRoute;
