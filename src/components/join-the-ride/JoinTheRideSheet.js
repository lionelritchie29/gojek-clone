import joinBgDesktop from "../../assets/join-desktop.jpg";

const JoinTheRideSheet = () => {
  return (
    <section className="h-screen bg-secondary relative">
      <div
        className="h-3/5 relative join-the-ride-banner z-0"
        style={{
          backgroundImage: `url(${joinBgDesktop})`,
        }}
      >
        <div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            background: "linear-gradient(0deg,rgba(21,21,21,0),#151515)",
          }}
        ></div>
      </div>

      <div className="absolute top-0 left-0 h-full w-full mx-auto py-32">
        <div className="w-4/5 mx-auto">
          <h1 className="text-white font-bold text-7xl tracking-wide">
            Join the ride
          </h1>
        </div>
      </div>
    </section>
  );
};

export default JoinTheRideSheet;
