import { useState } from "react";
import { InputAdornment } from "@mui/material";
import { AccountCircle, Key } from "@mui/icons-material";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";
import TextInputComponent from "./TextInputComponent";
import BtnComponent from "./BtnComponent";
import login from "../api/auth/login";
import register from "../api/auth/register";

const formStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #715aff;
  color: #fff;
  margin: 4rem;
  padding: 4rem;
  gap: 2rem;
  width: 14rem;
`;

const h1Style = css`
  border: 4px solid #fff;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

type AuthFormComponentProps = {
  type: "login" | "register";
};

function AuthFormComponent({ type }: AuthFormComponentProps) {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleClick = () => {
    if (username !== null && password !== null) {
      if (type === "login")
        login(username, password)
          .then(() => navigate("/dashboard"))
          .catch((e) => alert(e));

      if (type === "register")
        register(username, password)
          .then(() => navigate("/dashboard"))
          .catch((e) => alert(e));
    }
  };

  return (
    <form className={formStyle}>
      <h1 className={h1Style}>{type.toUpperCase()}</h1>
      <TextInputComponent
        id="filled-basic"
        label="Username"
        variant="filled"
        onChange={(e) => setUsername(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextInputComponent
        id="filled-basic"
        label="Password"
        type="password"
        variant="filled"
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Key />
            </InputAdornment>
          ),
        }}
      />

      <BtnComponent variant="contained" size="large" onClick={handleClick}>
        {type}
      </BtnComponent>
    </form>
  );
}

export default AuthFormComponent;
