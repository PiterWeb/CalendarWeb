import { css } from '@emotion/css'
import LinkComponent from './LinkComponent';
import { Home , AccountBox } from '@mui/icons-material';

const navStyle = css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #715aff;
    color: #fff;
    padding: 1rem;
    margin: 0;
    gap: 2rem;
`

function NavbarLandingComponent() {

    return (
        <nav className={navStyle}>
            <LinkComponent to="/"><Home/></LinkComponent>
            <LinkComponent to="/login"><AccountBox/></LinkComponent>
        </nav>
    )

}

export default NavbarLandingComponent;