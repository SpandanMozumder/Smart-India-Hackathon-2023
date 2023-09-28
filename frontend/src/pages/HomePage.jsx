import HeroSection from "../components/HeroSection";
import UploadSection from "../components/UploadSection";
import BackgroundImage from "../components/BackgroundImage";
import SidebarNav from "../components/SidebarNav";
import BackgroundControl from "../assets/BackgroundControl.png";
import LoginSignUpButton from "../components/LoginSignUpButton";

const HomePage = () => {
  return (
    <div>
      <div className="relative">
        <BackgroundImage />
        <img
          src={BackgroundControl}
          alt="article image"
          className="absolute ml-[26rem] mt-[3rem]"
        />
        <div>
          <HeroSection />
        </div>
        <div className="flex fixed">
          <SidebarNav />
          <div>
            <UploadSection />
          </div>
          <div className="mt-[2rem] ml-[45rem]">
            <LoginSignUpButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
