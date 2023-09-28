import { useState } from "react";
import UploadImg from "../assets/UploadImg.png";

export default function PopUpUpload() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="overflow-y-hidden">
      <button onClick={toggleModal} className="">
        Upload
      </button>

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            onClick={toggleModal}
            className="overlay fixed inset-0 bg-black opacity-80"
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md w-[45rem]  text-center ">
            <h2 className="flex text-black font-semibold text-lg">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/connection-sync.png"
                alt="connection-sync"
              />
              <span className="px-[1rem]">
                Uploaded / Image Synced from device
              </span>
            </h2>
            <img
              src={UploadImg}
              alt="Uploaded Image"
              className="py-[1.5rem] px-[1.5rem]"
            ></img>
            <button
              className="close-modal absolute top-2 right-2 px-2 py-1 bg-white rounded-md"
              onClick={toggleModal}
            >
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/delete-sign--v1.png"
                alt="delete-sign--v1"
                className="bg-white"
              />
            </button>
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/material-sharp/24/sent.png"
              alt="sent"
              className="my-[1rem] mx-[1.5rem]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
