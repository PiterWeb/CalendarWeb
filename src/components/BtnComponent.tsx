import {styled} from "@mui/material/styles";
import { Button } from "@mui/material";

const BtnComponent = styled(Button)({
    margin: "4rem",
    fontWeight: "bold",
    backgroundColor: '#a682ff',
    '&:hover': {
        backgroundColor: '#715AFF',
    },
});

export default BtnComponent;