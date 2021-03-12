import AchievementSheet from "../components/achievement/AchievementSheet";
import AchievementWhiteSpace from "../components/achievement/AchievementWhiteSpace";
import DownloadSheet from "../components/download/DownloadSheet";
import FactSheet from "../components/facts/FactSheet";
import JoinTheRideSheet from "../components/join-the-ride/JoinTheRideSheet";
import PerkSlider from "../components/perks/PerkSlider";
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
      <DownloadSheet />
      <PerkSlider />
    </div>
  );
};

export default Home;
