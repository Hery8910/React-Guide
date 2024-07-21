import React from "react";
import { Routes, Route} from "react-router-dom";
import { HomePage } from "./pages/HomePage"
import { ComponentPage } from "./pages/ComponentPage";
import { HooksPage } from "./pages/HooksPage";
import { StylesPage } from "./pages/StylesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { BestPractice } from "./pages/BestPractice";
import { Exercises } from "./pages/Exercises";

export function PageRoutes() {
  return (
    <Routes>
      
        <Route index path="/" element={<HomePage/>} />
        <Route path="/Components/*" element={<ComponentPage/>} />
        <Route path="/Hooks/*" element={<HooksPage/>} />
        <Route path="/Styles" element={<StylesPage />} />
        <Route path="/BestPractice" element={<BestPractice />} />
        <Route path="/Exercises" element={<Exercises/>} />
        <Route path="/*" element={<NotFoundPage/>} />
      
    </Routes>
  );
}