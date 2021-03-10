import safetyBgMobile from "../../assets/safety-mobile.jpg";
import safetyBgDesktop from "../../assets/safety-desktop.jpg";
import { useEffect, useState } from "react";

const SafetySheet = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 680) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <section className="safety-container min-h-screen min-w-screen">
      <div
        className="min-h-screen min-w-screen py-24 px-6 lg:p-72 flex items-end"
        style={{
          backgroundImage: `url(${
            isMobile ? safetyBgMobile : safetyBgDesktop
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
