import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import ActiveSensors from "../pages/ActiveSensors.js";
import ReadData from "../components/ReadData.js";
import NotificationsPage from "../pages/NotificationsPage.js";
import NotFound from "../pages/NotFound.js";
import EditSensor from "../pages/EditSensor.js";
import Profile from "../pages/Profile.js";
import EditProfileDetails from "../pages/EditProfileDetails.js";
import ChangePw from "../pages/ChangePw.js";

const routes = [
	{
		path: "/home",
		component: <Home />,
		name: "Home",
		isPrivate: false,
	},
	{
		path: "/aboutUs",
		component: <AboutUs />,
		name: "About Us",
		isPrivate: false,
	},
	{
		path: "/contactUs",
		component: <ContactUs />,
		name: "Contacts",
		isPrivate: false,
	},
	{
		path: "/login",
		component: <Login />,
		name: "Login",
		isPrivate: false,
	},
	{
		path: "/signup",
		component: <SignUp />,
		name: "Sign Up",
		isPrivate: false,
	},
	{
		path: "/dashboard",
		component: <Dashboard />,
		name: "Dashboard",
		isPrivate: true,
	},
	{
		path: "/activeSensors",
		component: <ActiveSensors />,
		name: "ActiveSensors",
		isPrivate: true,
	},
	{
		path: "/readData",
		component: <ReadData />,
		name: "readData",
		isPrivate: true,
	},
	{
		path : "/notifications",
		component: <NotificationsPage />,
		name: "notifications",
		isPrivate : true,
	},
	{
		path: "*",
		component: <NotFound />,
		name: "Not Found",
		isPrivate: false,
	},
	{
		path: "/dashboard/editSensor",
		component : <EditSensor />,
		name : "Edit Sensor",
		isPrivate : true,
	},
	{
		path : "/dashboard/me",
		component : <Profile />,
		name : "Profile",
		isPrivate : true,
	},
	{
		path : "/dashboard/editDetails",
		component : <EditProfileDetails />,
		name : "Edit Profile Details",
		isPrivate : true,
	},
	{
		path : "/dashboard/changePw",
		component : <ChangePw />,
		name : "Change Password",
		isPrivate : true,
	}
	
];

export default routes;
