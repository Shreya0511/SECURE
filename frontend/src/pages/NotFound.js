import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../routes/Routes";
import getCookies from "../hooks/getCookies";
import setCookies from "../hooks/setCookies";
import removeCookies from "../hooks/removeCookies";
import { AuthData } from "../services/AuthService";

function NotFound() {
	const privateRoutes = [];
	routes.map((route, index) => {
		if (route.isPrivate) {
			privateRoutes.push(route.path);
		}
		return null;
	});

	const [errorMsg, setErrorMsg] = useState("");
	const [redirectMsg, setRedirectMsg] = useState("");
	const { user } = AuthData();
	const navigate = useNavigate();
	useEffect(() => {
		console.log("authenticated", user.isAuthenticated);
		if(privateRoutes.includes(window.location.pathname) && user.isAuthenticated === null){
			setErrorMsg("loading");
		}
		if (
			privateRoutes.includes(window.location.pathname) &&
			!user.isAuthenticated
		) {
			setErrorMsg("You are not authorized to view this page, Please Login to continue.");
			
		} else {
			setErrorMsg("The page you are looking for does not exist");
			
		}
	});

	// useEffect(() => {
	// 	setTimeout(function () {
	// 		// console.log("user", isprotected);
	// 		if (user.isAuthenticated) {
	// 			navigate("/dashboard");
	// 		} else {
	// 			if (privateRoutes.includes(window.location.pathname)) {
	// 				navigate("/login");
	// 			} else navigate("/home");
	// 		}
	// 	}, 30000);
	// }, [user, navigate]);

	return (
		<div style ={{backgroundColor : "white", height : "50vh", width : "80vw", margin : "auto", marginTop : "3rem",display : "flex", alignItems: "center", justifyContent : "center", flexDirection: "column",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        }}>
			<h2>{errorMsg}</h2>
			<p><button
				style={{
					backgroundColor: "chocolate",
                    borderRadius : ".5rem",
					color: "white",
					border: "none",
					cursor: "pointer",
                    marginTop : "1.2rem",
                    height : "3rem",
                    width : "5rem",
                    fontSize : "1.3rem",
				}}
				onClick={() => {
					navigate("/home");
				}}
			>Home</button></p>
		</div>
	);
}

export default NotFound;
