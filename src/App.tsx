import React, { FC } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home1,
  Home2,
  Child11,
  Child111,
  Child12,
  Child13,
  Child131,
  Child14

} from "./pages/Overview";

const App: FC = () => {

  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home1 />}></Route>
          <Route path="/home/child11" element={<Child11 />}></Route>
          <Route path="/home/child11/child111" element={<Child111 />}></Route>
          <Route path="/home/child12" element={<Child12 />}></Route>
          <Route path="/home/child13" element={<Child13 />}></Route>
          <Route path="/home/child131" element={<Child131 />}></Route>
          <Route path="/home/child14" element={<Child14 />}></Route>
          <Route path="/home2" element={<Home2 />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
