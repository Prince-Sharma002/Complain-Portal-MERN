import React from "react";
import AdminPortal from "./Admin side/AdminPortal";
import ComplainPortal from "./components/ComplainPortal";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComplainPortal />} />
        <Route path="/admin" element={<AdminPortal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
