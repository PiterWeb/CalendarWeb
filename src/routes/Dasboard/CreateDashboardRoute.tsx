import { useState, useEffect } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { css } from "@emotion/css";
import { Checkbox } from "@mui/material";
import DatePickerTextComponent from "../../components/DatePickerTextComponent";
import TextInputComponent from "../../components/TextInputComponent";
import BtnComponent from "../../components/BtnComponent";
import fetchCreate from "../../api/dashboard/fetchCreate";
import type eventModel from "../../models/eventModel";
import type dateModel from "../../models/dateModel";

const dateSelectorsStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
`;

const importantSpan = css`
  font-size: 1.15rem;
  font-weight: bold;
`;

function CreateDashboardRoute() {
  const [isImportant, setIsImportant] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleClick = async () => {
    if (startDate && endDate) {
      const start: dateModel = {
        year: startDate.getFullYear(),
        month: startDate.getMonth(),
        day: startDate.getDate(),
      };
      const end: dateModel = {
        year: endDate.getFullYear(),
        month: endDate.getMonth(),
        day: endDate.getDate(),
      };

      const data: eventModel = {
        title,
        description,
        start,
        end,
        important: isImportant,
        id: "",
      };

      const { message, status } = await fetchCreate(data);

      if (status === "ok") {
        return alert(message);
      } else {
        return alert(message);
      }
    }

    alert("You must select both dates before creating an event.");
  };

  return (
    <>
      <h1>Create Events</h1>

      <main className={dateSelectorsStyle}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Starting Date"
            value={startDate}
            onChange={(newValue) => {
              setStartDate(newValue as Date);
            }}
            renderInput={(params) => (
              <DatePickerTextComponent variant="filled" {...params} />
            )}
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Ending Date"
            value={endDate}
            onChange={(newValue) => {
              setEndDate(newValue as Date);
            }}
            renderInput={(params) => (
              <DatePickerTextComponent variant="filled" {...params} value="" />
            )}
          />
        </LocalizationProvider>

        <TextInputComponent
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          label="Title"
          variant="filled"
          placeholder="Name it"
        />

        <TextInputComponent
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          label="Description"
          variant="filled"
          placeholder="Describe the event"
        />

          <span className={importantSpan}>Important
          <Checkbox
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
            }}
            checked={isImportant}
            onChange={(e) => setIsImportant((e) => !e)}
          />
          </span>

        <BtnComponent
          color="error"
          variant="contained"
          size="large"
          onClick={handleClick}
        >
          Submit Event
        </BtnComponent>
      </main>
    </>
  );
}

export default CreateDashboardRoute;
