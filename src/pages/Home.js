import FactSheet from "../components/FactSheet";
import VideoHeader from "../components/VideoHeader";

const Home = () => {
  return (
    <div>
      <VideoHeader />
      <FactSheet />
      <div
        className="h-72 bg-white -mt-60"
        style={{
          borderTopRightRadius: "2.5rem",
          borderTopLeftRadius: "2.5rem",
        }}
      >
        {" "}
      </div>
    </div>
  );
};

export default Home;
