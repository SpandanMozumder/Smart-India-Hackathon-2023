import PopUpUpload from "./PopUpUpload";
import PopUpSync from "./PopUpSync";

export default function UploadSection() {
  return (
    <div>
      <div className="w-[20rem] bg-black h-screen p-[1.25rem] pt-[2rem] relative opacity-100">
        <h1 className="text-white pt-[2.5rem] pl-[2rem] pb-[2rem] font-extrabold text-2xl">
          Sync Files
        </h1>
        <p className="text-white pt-[1.25rem] pl-[2rem] pr-[1.25rem]">
          Upload files for the ML identication and generate product profile for
          better understanding of the product itself.
        </p>
        <div className="flex">
          <div className="rounded-full text-white border border-white bg-transparent py-2 px-3 mt-[20rem] ml-8 mr-2 hover:bg-white hover:text-black">
            <PopUpUpload />
          </div>
          <div className="rounded-full text-white border border-white bg-transparent py-2 px-3 mt-[20rem] ml-2 mr-8 hover:bg-white hover:text-black">
            <PopUpSync />
          </div>
        </div>
      </div>
    </div>
  );
}
