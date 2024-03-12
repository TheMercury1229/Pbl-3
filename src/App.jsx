import React, { useContext } from "react";
import Outlet from "./Pages/Outlet";
import { DarkModeContext } from "./Context/darkModeContext";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Outlet />
    </div>
  );
};

export default App;
