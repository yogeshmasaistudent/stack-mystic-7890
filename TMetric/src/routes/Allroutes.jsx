
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Support from "../pages/Support";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Blog from "../pages/Blog";
import Price from "../pages/Price";
import { Navbar } from "../Components/Navbar";
import { DropdownWhyTMatric } from "../Components/DropdownWhyTMatric";
import { DropdownApp } from "../Components/DropdownAppIntegeration";
import { Mywork } from "../pages/Mywork";

import Homepage from "../pages/HomePage/Homepage";
import SideBar from "../Components/SideBar";


const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/why-tmetric" element={<DropdownWhyTMatric />} />
        <Route path="/apps-integrations" element={<DropdownApp />} />
        <Route path="/support" element={<Support />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/price" element={<Price />} />
        {/* <Route path="/price" element={<Container/>}/> */}
        {/* Here i am making another componant */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

      <Route path="/mywork" element={<Mywork />}/>
      <Route path="/dashboard" element={<SideBar/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;