import React from "react";
import Nav from "../Components/Nav/Nav.component";
import { Outlet } from "react-router-dom";

const CommonLayout = () => {
  return (
    <>
      <div>
        <div className="container mx-auto min-h-screen">
          <Nav />
          <main>{<Outlet />}</main>
        </div>
      </div>
    </>
  );
};

export default CommonLayout;
