import { Routes, Route, Outlet} from "react-router-dom";
import Index from '../App'
import Error from './ErrorRoute'
import LoginRoute from './LoginRoute'
import RegisterRoute from './RegisterRoute'
import NavbarLanding from "../components/NavbarLandingComponent";
import DashboardLayout from "./Dasboard/DashboardLayout";
import ImportantDashboardRoute from "./Dasboard/ImportantDashboardRoute";
import CreateDashboardRoute from "./Dasboard/CreateDashboardRoute";
import CalendarDashboardRoute from "./Dasboard/CalendarDashboardRoute";

function CustomRoutes () {

    return(
        <Routes>
            <Route path="/" element={<><NavbarLanding/><Outlet/></> }>
                <Route path="" element={<Index />}/>
                <Route path="login" element={<LoginRoute />} />
                <Route path="register" element={<RegisterRoute />} />
            </Route>
            <Route path="/dashboard" element={<DashboardLayout><Outlet/></DashboardLayout>} >
                <Route path="" element={<CalendarDashboardRoute/>}/>
                <Route path="important" element={<ImportantDashboardRoute/>}/>
                <Route path="create" element={<CreateDashboardRoute/>}/>
                <Route path="*" element={<Error/>}/>
                {/* <Route path="edit/:id" element=''/> */}
                {/* <Route path="delete/:id" element=''/> */}
                {/* <Route path="view/:id" element=''/> */}
            </Route>
            <Route path="*" element={<Error />} />
        </Routes>
    )

}

export default CustomRoutes;