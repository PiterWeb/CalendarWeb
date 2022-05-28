import { useNavigate } from "react-router-dom";
import {styled} from "@mui/material/styles";
import { Link } from "@mui/material";

const LinkStyled = styled(Link)({
    color: '#fff',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        cursor: 'pointer',
        transform:'scale(1.2)',
        transition: 'all 0.3s ease-in-out'
    }
});

type LinkProps = {
    to: string;
    children: JSX.Element | string;
}

function LinkComponent({to, children} : LinkProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    }

    return (
        <LinkStyled onClick={handleClick}>
            {children}
        </LinkStyled>
    )
}

export default LinkComponent;