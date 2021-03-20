import { useState, useRef, useLayoutEffect, Fragment } from "react";
import TinySlider from "tiny-slider-react";
import appDownloadIcon from "../../assets/info1.png";
import driverPartnerIcon from "../../assets/info2.png";
import goFoodMerchantIcon from "../../assets/info3.png";
import jumpDownloadIcon from "../../assets/info4.png";
import useWindowWidth from "../../hooks/useWindowWidth";
import Fact from "./Fact";

const Facts = () => {
  const windowWidth = useWindowWidth();
  const factDots = useRef();
  let indexBefore = -1;

  const [facts] = useState([
    {
      id: 1,
      icon: appDownloadIcon,
      header: "190 million+",
      detail: "app downloads since 2015",
      color: "#7CCC6C",
      shadow: "shadow-green",
    },
    {
      id: 2,
      icon: driverPartnerIcon,
      header: "2 million+",
      detail: "driver partners",
      color: "#BD7AB3",
      shadow: "shadow-purple",
    },
    {
      id: 3,
      icon: goFoodMerchantIcon,
      header: "900,000+",
      detail: "GoFood merchants",
      color: "#FF8F1C",
      shadow: "shadow-orange",
    },
    {
      id: 4,
      icon: jumpDownloadIcon,
      header: "2.448x",
      detail: "jump in downloads from 2015 to 2020",
      color: "#4AC9E3",
      shadow: "shadow-blue",
    },
  ]);

  const settings = {
    mouseDrag: true,
    controls: false,
    gutter: 20,
    navContainer: "#facts-dots",
    item: 1,
    fixedWidth: 250,
    edgePadding: 20,
    loop: false,
  };

  const dotStyles = {
    height: "10px",
    width: "10px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "0.2rem",
  };

  useLayoutEffect(() => {
    setActiveNav();
  });

  const setActiveNav = () => {
    if (windowWidth > 640) return;

    const { children } = factDots.current;
    const arrChildren = Array.from(children);

    if (indexBefore !== -1) {
      arrChildren[indexBefore].classList.remove("perk-dot-active");
    }

    arrChildren.forEach((child, index) => {
      if (child.classList.contains("tns-nav-active")) {
        indexBefore = index;
        child.classList.add("perk-dot-active");
      }
    });
  };

  return (
    <div className="lg:w-4/5 lg:mx-auto">
      {window.innerWidth <= 640 && (
        <TinySlider
          className="pb-6"
          settings={settings}
          onIndexChanged={setActiveNav}
        >
          {facts.map((fact) => (
            <Fact key={fact.id} fact={fact} />
          ))}
        </TinySlider>
      )}

      {windowWidth <= 640 && (
        <ul
          id="facts-dots"
          ref={factDots}
          className="mx-auto pb-16"
          style={{ width: "fit-content" }}
        >
          {facts.map((fact) => (
            <li style={dotStyles} key={fact.id}></li>
          ))}
        </ul>
      )}

      {window.innerWidth > 640 && (
        <div
          className="md:px-8 pb-12 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10"
          style={{ gridAutoRows: "1fr" }}
        >
          {facts.map((fact) => (
            <Fact key={fact.id} fact={fact} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Facts;
