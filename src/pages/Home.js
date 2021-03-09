import AchievementSheet from "../components/achievement/AchievementSheet";
import FactSheet from "../components/facts/FactSheet";
import VideoHeader from "../components/VideoHeader";

const Home = () => {
  return (
    <div>
      <VideoHeader />
      <AchievementSheet />
      <div
        className="h-72 bg-white -mt-52"
        style={{
          borderTopRightRadius: "6rem",
          borderTopLeftRadius: "6rem",
        }}
      >
        {" "}
      </div>
      <FactSheet />
    </div>
  );
};

export default Home;
