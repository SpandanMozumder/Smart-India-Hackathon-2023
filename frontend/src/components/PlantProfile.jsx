import "../App.css";
import Plant1 from "../assets/Plant1.png";
import Plant2 from "../assets/Plant2.png";
import Plant3 from "../assets/Plant3.png";
import Biomass from "../assets/Biomass.png";
import Study from "../assets/Study.png";
import Windmill from "../assets/Windmill.png";
import Reset from "../assets/Reset.png";
import BackButton from "../assets/BackButton.png";
import Share from "../assets/Share.png";
import { Link } from "react-router-dom";

const PlantProfile = () => {
  const imageList = [Plant1, Plant2, Plant3];

  return (
    <div className="flex">
      <div className="scrollable-div bg-white ml-[4rem] w-[34rem] absolute h-screen overflow-y-auto p-[4rem]">
        <div className="flex mb-[5rem] gap-[1rem] mx-[-1rem]">
          <button>
            <img src={BackButton}></img>
          </button>
          <button className="rounded-full bg-black text-white p-[0.5rem] px-3 hover:bg-white hover:border hover:border-black hover:text-black">
            Aloe Vera
          </button>
          <button className="rounded-full flex p-[0.5rem] border border-black px-3 hover:bg-black hover:text-white">
            <img src={Reset}></img> Try Again
          </button>
          <Link to="/comment">
            <button className="rounded-full flex p-[0.5rem] border border-black  hover:bg-black hover:text-white">
              <img src={Share}></img>Save Changes
            </button>
          </Link>
        </div>
        <span className="flex font-extralight">
          Articles
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios/50/right-squared--v2.png"
            alt="right-squared--v2"
            className="ml-[1rem]"
          />
        </span>
        <h1 className="mt-[1rem] text-3xl font-medium">
          The Healing Power of Ayurveda and the true essence of the nature
        </h1>
        <p className="pt-[1.5rem]">
          Ayurvedic plants are not merely tools for healing; they are a
          testament to the profound relationship between humans and the natural
          world. The wisdom of Ayurveda recognizes that the earth provides
          everything we need for our well-being. These plants offer a holistic
          approach to health, addressing not only physical ailments but also the
          mental and spiritual aspects of our lives.
          <br />
          <br />
          As interest in traditional healing methods grows, Ayurvedic plants
          continue to gain recognition worldwide. Their remarkable therapeutic
          properties have earned them a place in modern medicine and wellness
          practices. Whether you are seeking relief from a specific ailment or
          striving for overall health and balance, Ayurvedic plants remain a
          valuable resource, offering a natural path to well-being.
        </p>
      </div>

      <div className="scrollable-div absolute ml-[38rem] h-screen overflow-y-auto mt-[2.5rem] w-[15rem]">
        {imageList.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="pb-[1rem]"
          />
        ))}
      </div>

      <div className="scrollable-div absolute ml-[54rem] h-screen w-auto overflow-y-auto p-[2rem] bg-gray-200 mr-[2.2rem] mt-[2.5rem] rounded-2xl">
        <h1 className="text-2xl font-medium pb-[0.5rem] flex">
          <img src={Biomass} className="pr-[0.5rem]"></img>Morphology
        </h1>
        <p className="pb-[1rem]">
          Ayurvedic plants are not merely tools for healing; they are a
          testament to the profound relationship between humans and the natural
          world. The wisdom of Ayurveda recognizes that the earth provides
          everything we need for our well-being. These plants offer a holistic
          approach to health, addressing not only physical ailments but also the
          mental and spiritual aspects of our lives.
        </p>
        <h1 className="text-2xl font-medium pb-[0.5rem] flex">
          <img src={Study} className="pr-[0.5rem]"></img>Use Cases
        </h1>
        <p className="pb-[1rem]">
          Ayurvedic plants are not merely tools for healing: they are a
          testament to the profound relationship between humans and the natural
          world. The wisdom of Ayurveda recognizes that the earth provides
          everything we need for our well-being. These plants offer a holistic
          approach to health, addressing not only physical ailments but also the
          mental and spiritual aspects of our lives.
          <br />
          Ayurvedic plants are not merely tools for healing; they are a
          testament to the profound relationship between humans and the natural
          world. The wisdom of Ayurveda recognizes that the earth provides
          everything we need for our well-being. These plants offer a holistic
          approach to health, addressing not only physical ailments but also the
          mental and spiritual aspects of our lives.
        </p>
        <h1 className="text-2xl font-medium pb-[0.5rem] flex">
          <img src={Windmill} className="pr-[0.5rem]"></img>Alternatives
        </h1>
        <p className="pb-[1rem]">
          Ayurvedic plants are not merely tools for healing; they are a
          testament to the profound relationship between humans and the natural
          world. The wisdom of Ayurveda recognizes that the earth provides
          everything we need for our well-being. These plants offer a holistic
          approach to health, addressing not only physical ailments but also the
          mental and spiritual aspects of our lives.
        </p>
        <h1 className="text-2xl font-medium pb-[0.5rem]">Storage Guidelines</h1>
        <p className="pb-[1rem]">
          Ayurvedic plants are not merely tools for healing; they are a
          testament to the profound relationship between humans and the natural
          world. The wisdom of Ayurveda recognizes that the earth provides
          everything we need for our well-being. These plants offer a holistic
          approach to health, addressing not only physical ailments but also the
          mental and spiritual aspects of our lives.
        </p>
        <h1 className="text-2xl font-medium pb-[0.5rem]">
          Seasonal and Regional Variability
        </h1>
        <p className="pb-[1rem]">
          Ayurvedic plants are not merely tools for healing; they are a
          testament to the profound relationship between humans and the natural
          world. The wisdom of Ayurveda recognizes that the earth provides
          everything we need for our well-being. These plants offer a holistic
          approach to health, addressing not only physical ailments but also the
          mental and spiritual aspects of our lives.
        </p>
        <h1 className="text-2xl font-medium pb-[0.5rem]">Notes</h1>
        <p className="pb-[1rem]">
          Ayurvedic plants are not merely tools for healing; they are a
          testament to the profound relationship between humans and the natural
          world. The wisdom of Ayurveda recognizes that the earth provides
          everything we need for our well-being. These plants offer a holistic
          approach to health, addressing not only physical ailments but also the
          mental and spiritual aspects of our lives.
        </p>
      </div>
    </div>
  );
};

export default PlantProfile;
