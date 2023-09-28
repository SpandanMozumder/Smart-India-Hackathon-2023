import SidebarNav from "../components/SidebarNav";
import PlantProfile from "../components/PlantProfile";

const MLResponse = () => {
  return (
    <div className="flex">
      <div className="flex opacity-70 fixed">
        <SidebarNav />
      </div>
      <PlantProfile />
    </div>
  );
};

export default MLResponse;
