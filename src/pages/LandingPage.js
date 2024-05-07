import ContinueWithUser from "../ContinueWithUser";
import Footer from "../Footer";
import NavBar from "../NavBar";
import RightSide from "../RightSide";
import Section2 from "../Section2";
import Section3 from "../Section3";
import Section4 from "../Section4";

const LandingPage = ()=>{
  return(
    <div className="flex flex-col gap-6">
        <div id="navbar">
          <NavBar />
        </div>
        <div id="section1" class="flex justify-evenly border border-gray-200" >
          <ContinueWithUser/>
          <RightSide/>
        </div>
        <div id="section2" className="border border-gray-200">
          <Section2/>
        </div>
        <div id="section3" className="border border-gray-200">
          <Section3/>
        </div>
        <div id="section4" className="border border-gray-200">
          <Section4/>
        </div>
        <div id="footer">
          <Footer/>
        </div>

      </div>
  );
}

export default LandingPage;