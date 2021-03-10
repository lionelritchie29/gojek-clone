import safetyBgMobile from "../../assets/safety-mobile.jpg";
import safetyBgDesktop from "../../assets/safety-desktop.jpg";
import { useEffect, useState } from "react";

const SafetySheet = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const resizeWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindowWidth();
    window.addEventListener("resize", resizeWindowWidth);
    return () => window.removeEventListener("resize", resizeWindowWidth);
  }, []);

  return (
    <section className="safety-container min-h-screen min-w-screen">
      <div
        className="min-h-screen min-w-screen py-24 px-6 lg:p-72 flex items-end"
        style={{
          backgroundImage: `url(${
            windowWidth <= 640 ? safetyBgMobile : safetyBgDesktop
          })`,
        }}
      >
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
