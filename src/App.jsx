import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Outlethome from "./Components/Outlethome";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import Notfound from "./Components/Notfound";
import Employeelogin from "./Components/Employeelogin";
import Signin from "./Components/Signin";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlethome />}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="contactus" element={<Contactus />} />
            <Route path="Signin" element={<Signin />} />
            <Route path="employerlogin" element={<Employeelogin />} />
          </Route>

          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
