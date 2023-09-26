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
import Employerprofile from "./Employerpages/Employerprofile";
import Employeeprofile from "./Employeepages/Employeeprofile";
import Forgetpassword from "./Employerpages/Forgetpassword";
import Resetpassord from "./Employerpages/Resetpassord";
import Notificationfile from "./Employerpages/Notificationfile";
import Candidates from "./Employerpages/Candidates";
import Employeeslist from "./Employerpages/Employeeslist";
import Notificationprofile from "./Employerpages/Notificationprofile";
import Candidatedetails from "./Employerpages/Candidatedetails";
import Hrlist from "./Employerpages/Hrlist";
import Notification from "./Employeepages/Notification";
import Scorehistory from "./Employeepages/Scorehistory";
// import Employeeslist from "./Employerpages/Employeeslist";
function App() {
  return (
    <>
      <BrowserRouter>
      <Simplecontextprovider>
        <Routes>
          {/* <Route default path="text" element={<Text/>}/> */}
          <Route path="/" element={<Outlethome />}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="contactus" element={<Contactus />} />
            <Route path="Signin" element={<Signin />} />
            <Route path="employee-notification" element={<Notification />} />
            <Route path="history" element={<Scorehistory/>} />
            <Route path="employerlogin" element={<Employeelogin />} />
            <Route path="employeeregister" element={<Employeeregister />} />
            <Route path="employer-register" element={<Employerregister />} />
            <Route path="employer-profile" element={<Employerprofile/>} />
            <Route path="employee-profile" element={<Employeeprofile/>} />
            <Route path="forget-password" element={<Forgetpassword/>} />
            <Route path="reset-password" element={<Resetpassord/>} />
            <Route path="notification" element={<Notificationfile/>} />
            <Route path="candidates" element={<Candidates/>} />
            <Route path="employeelist" element={<Employeeslist/>} />
            <Route path="hrlist" element={<Hrlist/>} />
            <Route  default path="verification/:id/:userId" element={<Notificationprofile/>} />
            <Route   path="candidatedetails/:id" element={<Candidatedetails/>} />
            
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
        </Simplecontextprovider>
      </BrowserRouter>
    </>
  );
}

export default App;
