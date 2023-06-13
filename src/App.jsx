import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Outlethome from "./Components/Outlethome";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import Notfound from "./Components/Notfound";
import Employeelogin from "./Components/Employeelogin";
import Signin from "./Components/Signin";
import Text from "./Components/Text";
import Employeeregister from "./Components/Employeeregister";
import Simplecontextprovider from "./Commonpages/Simplecontext";
import Employerregister from "./Employerpages/Employerregister";
function App() {
  return (
    <>
      <BrowserRouter>
      <Simplecontextprovider>
        <Routes>
          <Route default path="text" element={<Text/>}/>
          <Route path="/" element={<Outlethome />}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="contactus" element={<Contactus />} />
            <Route path="Signin" element={<Signin />} />
            <Route path="employerlogin" element={<Employeelogin />} />
            <Route path="employerregister" element={<Employeeregister />} />
            <Route path="employee-register" element={<Employerregister />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
        </Simplecontextprovider>
      </BrowserRouter>
    </>
  );
}

export default App;
