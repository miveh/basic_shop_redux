import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default Layout;
