import React, { useEffect, useState } from "react";
import Navber from "../Components/Navber";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import useAuth from "../hooks/useAuth";
import Loader from "../Components/Loader";

const RootLayout = () => {
  const { loading } = useAuth();
  const [theme, setTheme] = useState("light");

  const themeChangeHandle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col min-h-screen justify-between bg-base-200">
      <Navber />
      <div className="">
        <Outlet />
      </div>
      <Footer />
      <button
        onClick={themeChangeHandle}
        className="fixed bottom-6 right-6 btn btn-accent rounded-full text-white z-10"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default RootLayout;
