import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import PaymentSuccess from "./components/PaymentSuccess";
import VolunteerForm from "./components/VolunteerForm";
import MembershipForm from "./components/MembershipForm"
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Project1 from "./components/Projects/Project1";
import Project2 from "./components/Projects/Project2";
import Project3 from "./components/Projects/Project3";
import Project4 from "./components/Projects/Project4";
import Project5 from "./components/Projects/Project5";
import News from "./components/News";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/event" element={<News/>} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/donate" element={<Donate />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/volunteer" element={<VolunteerForm />} />
        <Route path="/member" element={<MembershipForm />} />
        <Route path="/donate" element={<Donate />} />
        {/* <Route path="/MembershipForm" element={<MembershipForm />} /> */}
        <Route path="/projects" element={<Projects/>} />
        <Route path="/achievements" element={<Achievements/>} />
        <Route path="/project1" element={<Project1/>} />
        <Route path="/project2" element={<Project2/>} />
        <Route path="/project3" element={<Project3/>} />
        <Route path="/project4" element={<Project4/>} />
        <Route path="/project5" element={<Project5/>} />

        {/* <Route path="/checkout" element={<Checkout />} /> */}
        <Route exact path="*" element={<Navigate to={"/"} />} />
        
      </Routes>
    </BrowserRouter>
  );
}
