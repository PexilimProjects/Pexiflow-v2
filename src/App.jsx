import React, { useContext, createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { RouterProvider } from "react-router-dom"; // Import BrowserRouter
import routes from "./route.jsx"; // Import your routes file
import { useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleSwithcTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log(theme);

  return (
    <main className="overflow-y-scroll">
      <RouterProvider router={routes} />
    </main>
  );
}
export default App;

// True is light theme
