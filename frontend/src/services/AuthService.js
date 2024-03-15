import { createContext, useContext, useEffect, useState } from "react";
import RenderRoutes from "../routes/RenderRoutes";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {

  const [user, setUser] = useState({user : "",isAuthenticated: false});
  const [results, setResults] = useState(100);






    return (
      <AuthContext.Provider
        value={{
          user,
          setUser,
          results,
          setResults
        }}
      >
          <div className="right-container">
            <RenderRoutes />
          </div>
      </AuthContext.Provider>
    );
  }