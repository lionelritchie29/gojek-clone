import safetyBgMobile from "../../assets/safety-mobile.jpg";
import safetyBgDesktop from "../../assets/safety-desktop.jpg";
import useWindowWidth from "../../hooks/useWindowWidth";

const SafetySheet = () => {
  const windowWidth = useWindowWidth();

  return (
    <section className="safety-container min-h-screen min-w-screen">
      <div
        className="min-h-screen relative min-w-screen py-24 px-6 lg:p-72 flex items-end"
        style={{
          backgroundImage: `url(${
            windowWidth <= 640 ? safetyBgMobile : safetyBgDesktop
          })`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.4))",
          }}
        ></div>
        <div>
          <button
            className="bg-primary font-semibold text-white rounded-full text-lg px-4 lg:px-8 lg:py-2"
            style={{ width: "fit-content" }}
          >
            Know more
          </button>
        </div>
      </div>
    </section>
  );
};

export default SafetySheet;
