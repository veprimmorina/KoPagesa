import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Patenta from "./components/Patenta";
import Test from "./components/Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import FaqjaKryesore from "./components/FaqjaKryesore";
import Profili from "./components/Profili";
import Gjobat from "./components/Gjobat";
import GjobatPolice from "./components/GjobatPolice";
import PolicetProfile from "./components/PolicetProfile";
import PoliciaDashboard from "./components/PoliciaDashboard";
import Regjistrohu from "./components/Regjistrohu";
import Kycu from "./components/Kycu";
import ShikoPatentenModal from "./components/ShikoPatentenModal";


function App() {
return(
  <BrowserRouter>
    <Routes>
      <Route path="dashboard/policet/patenta/:id" element={<Patenta />}></Route>
      <Route path="/a" element={<Test />}></Route>
      <Route path="" element={<FaqjaKryesore />}></Route>
      <Route path="/profili" element={<Profili />}></Route>
      <Route path="/policet/profile" element={<PolicetProfile />}></Route>
      <Route path="/gjobat/:numripersonal" element={<GjobatPolice />}></Route>
      <Route path="/dashboard/policet" element={<PoliciaDashboard />}></Route>
      <Route path="/regjistrohu" element={<Regjistrohu />}></Route>
      <Route path="/kycu" element={<Kycu />}></Route>
      <Route path="/profili/:id" element={<ShikoPatentenModal />}></Route>
    </Routes>
  </BrowserRouter>
)
}

export default App;
