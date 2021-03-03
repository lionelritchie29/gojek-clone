import video from "../assets/video.mp4";

const VideoHeader = () => {
  return (
    <div className="relative h-screen w-full">
      <video
        className="absolute top-0 left-0"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        autoPlay
        muted
        loop
        id="myVideo"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* <div className="absolute py-12 px-60" style={{ top: "30rem" }}>
        <h1 className="text-8xl text-white font-bold">4 countries.</h1>
        <h1 className="text-8xl text-white font-bold">20+ products.</h1>
        <h1 className="text-8xl text-white font-bold">3 super apps.</h1>
      </div> */}
    </div>
  );
};

export default VideoHeader;
