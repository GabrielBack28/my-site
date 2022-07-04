import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Home } from "./pages/home";

export const Router = () => {
   return(
       <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
       </BrowserRouter>
   )
}
