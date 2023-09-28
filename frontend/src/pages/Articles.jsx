import ArticleCard from "../components/ArticleCard";
import SidebarNav from "../components/SidebarNav";
import BackButton from "../assets/BackButton.png";

const Articles = () => {
  return (
    <div>
      <div className="flex opacity-70 fixed">
        <SidebarNav />
      </div>
      <div className="flex mb-[2rem] gap-[1rem] mx-[7rem] pt-[2.5rem]">
        <button>
          <img src={BackButton}></img>
        </button>
        <button className="rounded-full bg-black text-white p-[0.5rem] px-3  hover:bg-white hover:border hover:border-black hover:text-black">
          All Posts
        </button>
        <button className="rounded-full flex p-[0.5rem] border border-black px-3  hover:bg-black hover:text-white">
          Unrecognised Reports
        </button>
        <button className="rounded-full flex p-[0.5rem] border border-black px-3  hover:bg-black hover:text-white">
          Your Posts
        </button>
      </div>
      <ArticleCard />
    </div>
  );
};

export default Articles;
