import AchievementSheet from "../components/achievement/AchievementSheet";
import AchievementWhiteSpace from "../components/achievement/AchievementWhiteSpace";
import FactSheet from "../components/facts/FactSheet";
import JoinTheRideSheet from "../components/join-the-ride/JoinTheRideSheet";
import SafetySheet from "../components/safety/SafetySheet";
import VideoHeader from "../components/VideoHeader";

const Home = () => {
  return (
    <div>
      <VideoHeader />
      <AchievementSheet />
      <AchievementWhiteSpace />
      <FactSheet />
      <SafetySheet />
      <JoinTheRideSheet />
    </div>
  );
};

export default Home;
