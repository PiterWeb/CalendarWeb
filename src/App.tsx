import { css, keyframes } from "@emotion/css";
import { Stack, Button } from "@mui/material";
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import Card from "./components/CardComponent";
import BtnComponent from "./components/BtnComponent";
import { useNavigate } from "react-router-dom";

const h1Style = css`
  background-color: #715AFF;
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  text shadow: 100px 1000px #ffffff;
  padding: 0.5rem;
`;

const divStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const h2Style = css`
  color: aliceblue;
`;

function App() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  }

  return (
    <div className={divStyle}>
      <h1 className={h1Style}>CalendarWEB</h1>

      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Card>
          <h2 className={h2Style}>Organize your life</h2>
        </Card>
        <Card>
          <h2 className={h2Style}>On all your devices</h2>
        </Card>
        <Card>
          <h2 className={h2Style}>Continually</h2>
        </Card>
      </Stack>

      <BtnComponent variant="contained" size="large" endIcon={<AutoFixHighOutlinedIcon />} onClick={handleClick}>Get Started</BtnComponent>

    </div>
  );
}

export default App;
