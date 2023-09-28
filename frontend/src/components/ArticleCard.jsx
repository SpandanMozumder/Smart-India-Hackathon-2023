import CommunityImg from "../assets/CommunityImg.jpg";
import Plus from "../assets/Plus.png";

const ArticleCard = () => {
  return (
    <div className=" h-[28rem] ml-28 mr-10 rounded-3xl relative drop-shadow-xl border border-gray-300">
      <div className="flex">
        <img
          src={CommunityImg}
          alt="Background Image"
          className="h-[28rem] w-[20rem] rounded-l-3xl"
        />
        <div className=" w-[65rem] p-[1.5rem] h-[28rem]">
          <h1 className="font-semibold text-2xl pt-[1.5rem]">Aloe Vera</h1>
          <p className="py-[1.5rem]">
            Ayurvedic plants are not merely tools for healing; they are a
            testament to the profound relationship between humans and the
            natural world. The wisdom of Ayurveda recognises that the earth
            provides everything
          </p>
          <h2 className="font-semibold text-xl pt-[1.5rem]">Pinned Comment</h2>
          <p className="py-[1.5rem]">
            ML - identification of the image, wait a bit before it generates a
            profile or you can try again with a betterpicture with more clarity
            from a different angle
          </p>
        </div>
        <div className="scrollable-div p-[3rem] max-h-[28rem] overflow-y-auto">
          <img src={Plus} className="ml-[23rem] mt-[-1rem]"></img>
          <h1 className="font-semibold text-lg">Samjeet</h1>
          <p className="py-[1rem] text-sm">
            ML - Identification of the image, wait a bit before it generates a
            profile or you can try again with a better picture with more clarity
            from a different angle.
          </p>
          <h1 className="font-semibold text-lg">Sarah</h1>
          <p className="py-[1rem] text-sm">
            ML - Identification of the image, wait a bit before it generates a
            profile or you can try again with a better picture with more clarity
            from a different angle.
          </p>
          <h1 className="font-semibold text-lg">Sarah</h1>
          <p className="py-[1rem] text-sm">
            ML - Identification of the image, wait a bit before it generates a
            profile or you can try again with a better picture with more clarity
            from a different angle.
          </p>
          <h1 className="font-semibold text-lg">Samjeet</h1>
          <p className="py-[1rem] text-sm">
            ML - Identification of the image, wait a bit before it generates a
            profile or you can try again with a better picture with more clarity
            from a different angle.
          </p>
          <h1 className="font-semibold text-lg">Samjeet</h1>
          <p className="py-[1rem] text-sm">
            ML - Identification of the image, wait a bit before it generates a
            profile or you can try again with a better picture with more clarity
            from a different angle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
