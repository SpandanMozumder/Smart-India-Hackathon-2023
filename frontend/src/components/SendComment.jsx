import Pin from "../assets/Pin.png";
import { Link } from "react-router-dom";
import HeroImg from "../assets/HeroImg.png";

export default function SendComment() {
  return (
    <div className="overflow-y-hidden">
      <div className="absolute inset-0 z-[-1]">
        <img
          src={HeroImg}
          alt="Background Image"
          className="w-full h-full object-cover fixed"
        />
      </div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl w-[45rem]  text-center shadow-lg ">
          <h2 className="flex text-black font-semibold text-lg">
            <img src={Pin} width="25" alt="pin comment" />
            <span className="px-[1rem]">
              Uploaded / Image Synced from device
            </span>
          </h2>
          <p className="p-[1.5rem] text-left">
            ML - Identification of the image, wait a bit before it generates a
            profile or you can try again with a better picture with more clarity
            from a different angle.ML - Identification of the image, wait a bit
            before it generates a profile or you can try again with a better
            picture with more clarity from a different angle.
          </p>
          <Link to="/report">
            <button className="close-modal absolute top-2 right-2 px-2 py-1 bg-white rounded-md">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/delete-sign--v1.png"
                alt="delete-sign--v1"
                className="bg-white"
              />
            </button>
          </Link>
          <img
            width="28"
            height="28"
            src="https://img.icons8.com/material-sharp/24/sent.png"
            alt="sent"
            className="my-[1rem] mx-[1.5rem]"
          />
        </div>
      </div>
    </div>
  );
}
