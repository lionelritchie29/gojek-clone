import Achievement from "./Achievement";

import fortuneFavoriteIcon from "../../assets/icon1.svg";
import contributionIcon from "../../assets/icon2.svg";
import greenerIcon from "../../assets/icon3.svg";
import digitalisingMerchantIcon from "../../assets/icon4.svg";
import { useState, useLayoutEffect, useRef } from "react";
import TinySlider from "tiny-slider-react";
import useWindowWidth from "../../hooks/useWindowWidth";

const Achievements = () => {
  const windowWidth = useWindowWidth();
  const achievementDots = useRef();
  let indexBefore = -1;

  const [achievement] = useState([
    {
      id: 1,
      icon: fortuneFavoriteIcon,
      title: `Fortune's favorite`,
      content:
        "Southeast Asia’s only company to make it to Fortune’s ‘Change the World’ list twice.",
    },
    {
      id: 2,
      icon: contributionIcon,
      title: `$7.1b contribution`,
      content: "Value added to the Indonesian economy in 2019.",
    },
    {
      id: 3,
      icon: greenerIcon,
      title: `Tonne times greener`,
      content: "Saved 11.3 tonnes of plastic in cutlery since October 2020.",
    },
    {
      id: 4,
      icon: digitalisingMerchantIcon,
      title: `Digitalising merchants`,
      content:
        "80% growth in registered Food merchants during the pandemic due to Gojek’s digitisation solutions for MSMEs.",
    },
  ]);

  const settings = {
    mouseDrag: true,
    controls: false,
    navContainer: "#achievement-dots",
    item: 1,
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
    if (windowWidth >= 1024) return;

    const { children } = achievementDots.current;
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
      {window.innerWidth < 1024 && (
        <TinySlider settings={settings} onIndexChanged={setActiveNav}>
          {achievement.map((achievement) => (
            <Achievement achievement={achievement} key={achievement.id} />
          ))}
        </TinySlider>
      )}

      {windowWidth < 1024 && (
        <ul
          id="achievement-dots"
          ref={achievementDots}
          className="mx-auto mt-8"
          style={{ width: "fit-content" }}
        >
          {achievement.map((achievement) => (
            <li style={dotStyles} key={achievement.id}></li>
          ))}
        </ul>
      )}

      {window.innerWidth >= 1024 && (
        <div className="lg:grid lg:grid-cols-4">
          {achievement.map((achievement) => (
            <Achievement achievement={achievement} key={achievement.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Achievements;
