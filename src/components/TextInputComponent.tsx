import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const TextInputComponent = styled(TextField)({
  color: "#fff",
  "& label": {
    color: "#fff",
    fontWeight: "bold",
  },
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiFilledInput-root": {
    color: "#fff",
    "&::after": {
      borderBottomColor: "#fff",
    }
  },
});

export default TextInputComponent;
