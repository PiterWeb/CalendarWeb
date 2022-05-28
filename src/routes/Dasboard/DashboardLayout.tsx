import MiniDrawer from "../../components/DashboardComponent";
// import { css } from "@emotion/css";

// const bodyStyle = css`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `;

type Props = {
    children: JSX.Element;
}

function DashboardRoute ({children}: Props) {

    return(
            <MiniDrawer>
                {children}
            </MiniDrawer>
    )

}

export default DashboardRoute;