import React from "react";
import { Header } from "./Header/Header";
import { Outlet } from "react-router";
import { Footer } from "./Footer/Footer";

export const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
