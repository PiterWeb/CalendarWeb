import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const DatePickerTextComponent = styled(TextField)({
  "& label": {
    color: "#fff",
  },
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiFilledInput-root": {
    color: "#fff",
    "&::after": {
      borderBottomColor: "#fff",
    },
  },
});

export default DatePickerTextComponent;
