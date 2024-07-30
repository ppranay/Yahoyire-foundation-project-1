import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Funds from "../components/Funds";
import PageHeader from "../components/PageHeader";
import "../css/About2.css"
import { Link } from "react-router-dom";
// import "../css/about.css";
// import aboutimage from "../assets/aboutimage.jpg";
import Team from "../components/Team";
import Award from "../components/Award";
import Objective from "../components/Objective";
import KeyFocus from "../components/KeyFocus";
import AbtPageHeader from "../components/AbtPageHeader";

 function About() {
  return (
    <>
      <Navbar />
      <PageHeader title="About Us" path="/about" name="About Us"/>
      
      {/* <About2/> */}
      <Award/>
      {/* <Landing /> */}
      {/* <KeyFocus/> */}
     <Objective/>
     <KeyFocus/>

        
      <Team/>
      <Funds />
      <Footer />
      <BackToTop />
    </>
  );
}
export default About