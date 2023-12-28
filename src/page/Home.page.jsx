import React from "react";
import Nav from "../Components/Nav/Nav.component";
import { useTheme } from "next-themes";

const HomePage = () => {
  const { theme } = useTheme();
  const lightBackgroundStyle = {
    backgroundImage:
      "linear-gradient(180deg, rgba(255,255,255,1) 8%, rgba(255,255,255,0.3) 100%), url(/bg.jpg)",
    backgroundSize: "cover",
    backgrounPosition: "center",
  };

  const darkBackgroundStyle = {
    ...lightBackgroundStyle,
    backgroundImage:
      "linear-gradient(180deg, rgba(0,0,0,1) 5%, rgba(4,5,6,0.3) 100%), url(/bg.jpg)",
  };

  return (
    <div style={theme === "dark" ? darkBackgroundStyle : lightBackgroundStyle}>
      <div className="container mx-auto min-h-screen">
        <Nav />
        <main className="p-4">
          <div className="hero-content flex flex-col justify-center items-center gap-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="font-extrabold text-center mt-5 text-3xl whitespace-nowrap sm:text-4xl md:text-5xl lg:text-6xl ">
              歡迎，加密先鋒
            </h1>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
