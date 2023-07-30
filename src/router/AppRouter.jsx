import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import { GlobalStyle } from "../styles/Global.styles";
import { useState } from "react";

const AppRouter = ({ themeSelected, setThemeSelected }) => {
  const [currentUser, setCurrentUser] = useState(
    sessionStorage.getItem("user") || ""
  );

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route path="/register" element={<Register />} />

        <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>

        <Route path="/detail/:id" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>

      <Footer
        themeSelected={themeSelected}
        setThemeSelected={setThemeSelected}
      />
    </BrowserRouter>
  );
};

export default AppRouter;
