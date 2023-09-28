import HeroImg from "../assets/HeroImg.png";

const BackgroundImage = () => {
  return (
    <div className="absolute inset-0 z-[-1]">
      <img
        src={HeroImg}
        alt="Background Image"
        className="w-full h-full object-cover fixed"
      />
    </div>
  );
};

export default BackgroundImage;
