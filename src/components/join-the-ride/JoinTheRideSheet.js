import joinBgDesktop from "../../assets/join-desktop.jpg";
import JobCards from "./JobCards";

const JoinTheRideSheet = () => {
  return (
    <section className="bg-secondary h-full relative">
      <div
        className="h-2/6 lg:h-4/6 absolute top-0 left-0 w-full join-the-ride-banner z-0"
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

      <div className="top-0 left-0 h-full w-full mx-auto py-16 lg:py-32 z-10 relative">
        <div className="w-10/12 lg:w-4/5 mx-auto">
          <h1 className="text-white mb-40 font-extrabold font-extended text-4xl lg:text-7xl tracking-wide">
            Join the ride
          </h1>

          <JobCards />
        </div>
      </div>
    </section>
  );
};

export default JoinTheRideSheet;
