import type eventModel from "../models/eventModel";
import { css } from "@emotion/css";
import {
  Close as CloseIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
} from "@mui/icons-material";
import fetchUpdateEvent from "../api/dashboard/fetchUpdate";
import { useState, useEffect } from "react";
import fetchDeleteEvent from "../api/dashboard/fetchDelete";

const articleStyle = css`
  padding: 3rem;
  min-width: 5.5rem;
  max-width: 20rem;
  min-height: 5rem;
  max-height: 15rem;
  background: #ffffff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px #a682ff;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
  }
`;

const actionsSectionStyle = css`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  & > * {
    cursor: pointer;
  }
`;

const datesSectionStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function EventComponent(event: eventModel) {
  var { title, description, important, end, start, id } = event;

  const [loop, setLoop] = useState<number>(0);
  const [isImportant, setImportant] = useState<boolean>(important);
  const [isDeleted, setDeleted] = useState<boolean>(false);

  const handleRemove = () => {
    fetchDeleteEvent(id)
      .then((data) => {
        if (data.status === "ok") {
          return setDeleted(true);
        }
        alert("Error deleting event");
      })
      .catch(() => {
        alert("Error deleting event");
      });
  };

  const handleStar = () => {
    if (isImportant) {
      setImportant(false);
    }
    if (!isImportant) {
      setImportant(true);
    }
  };

  useEffect(() => {
    setImportant(important);
  }, [important]);

  useEffect(() => {
    if (loop === 0) {
      setLoop(loop + 1);
      return;
    }

    event = { ...event, important: isImportant };

    fetchUpdateEvent(event);
  }, [isImportant]);

  if (isDeleted) {
    return null;
  }

  return (
    <article className={articleStyle}>
      <h3>{title}</h3>
      <p>{description}</p>
      <section className={datesSectionStyle}>
        <span>
          From: {start?.month}/{start?.day}/{start?.year}
        </span>
        <span>
          To: {end?.month}/{end?.day}/{end?.year}
        </span>
      </section>
      <section className={actionsSectionStyle}>
        {isImportant ? (
          <StarIcon onClick={handleStar} />
        ) : (
          <StarBorderIcon onClick={handleStar} />
        )}
        <CloseIcon onClick={handleRemove} />
      </section>
    </article>
  );
}

export default EventComponent;
