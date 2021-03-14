import PerkSlider from "./PerkSlider";
import useWindowWidth from "../../hooks/useWindowWidth";

const PerkSheet = () => {
  const windowWidth = useWindowWidth();

  const borderRadiusDesktopStyles = {
    borderTopLeftRadius: "6rem",
    borderTopRightRadius: "6rem",
  };

  const borderRadiusMobileStyles = {
    borderTopLeftRadius: "3rem",
    borderTopRightRadius: "3rem",
  };

  return (
    <section className="bg-secondary">
      <div
        className="bg-white py-16 lg:py-24"
        style={
          windowWidth <= 640
            ? borderRadiusMobileStyles
            : borderRadiusDesktopStyles
        }
      >
        <h1 className="text-center font-extended font-bold lg:font-extrabold text-2xl lg:text-5xl mb-6 lg:mb-16">
          Perks of being in good company
        </h1>
        <PerkSlider />
      </div>
    </section>
  );
};

export default PerkSheet;
