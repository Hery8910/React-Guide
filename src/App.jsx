import React, { lazy, Suspense } from "react";
import { HomePage } from "./pages/HomePage";
import { PageRoutes } from "./PageRoutes"
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer/";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<HomePage />}>
        <PageRoutes />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
