import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import ActiveSensors from "../pages/ActiveSensors.js";

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
		isPrivate: false,
	},
	{
		path: "/activeSensors",
		component: <ActiveSensors />,
		name: "ActiveSensors",
		isPrivate: false,
	},
	
];

export default routes;
