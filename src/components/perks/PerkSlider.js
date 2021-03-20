import { useState, useRef, useLayoutEffect } from "react";
import TinySlider from "tiny-slider-react";

import perk1 from "../../assets/perks/perks1.jpg";
import perk2 from "../../assets/perks/perks2.jpg";
import perk3 from "../../assets/perks/perks3.jpg";
import perk4 from "../../assets/perks/perks4.jpg";
import useWindowWidth from "../../hooks/useWindowWidth";
import Perk from "./Perk";

const PerkSlider = () => {
  const windowWidth = useWindowWidth();
  const perkDots = useRef();
  const slider = useRef();

  let indexBefore = -1;

  const [perks] = useState([
    {
      id: 1,
      img: perk1,
      title: "Free counseling",
      detail:
        "We talk about mental health. This one`s for you and your family.",
    },
    {
      id: 2,
      img: perk2,
      title: "Parental insurance",
      detail: "Subsidised health support for your parents",
    },
    {
      id: 3,
      img: perk3,
      title: "Wellness benefits",
      detail: "We share the bills - health, mobile, internet and more.",
    },
    {
      id: 4,
      img: perk4,
      title: "Fly for work & fun",
      detail: "Explore new offices, cultures, and a thousand islands!",
    },
  ]);

  const dotStyles = {
    height: "10px",
    width: "10px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "0.2rem",
  };

  const settings = {
    mouseDrag: true,
    navContainer: "#perk-dots",
    prevButton: "#perk-prev",
    nextButton: "#perk-next",
    center: true,
    responsive: {
      640: {
        items: 1,
      },
      768: {
        fixedWidth: 480,
        items: 3,
      },
      1024: {
        fixedWidth: 850,
        items: 3,
      },
    },
  };

  useLayoutEffect(() => {
    setActiveNav();
  });

  const setActiveNav = () => {
    const { children } = perkDots.current;
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
    <div className="relative">
      <TinySlider
        ref={slider}
        settings={settings}
        onIndexChanged={setActiveNav}
      >
        {perks.map((perk) => (
          <Perk perk={perk} key={perk.id} />
        ))}
      </TinySlider>

      {windowWidth <= 640 && (
        <ul
          id="perk-dots"
          ref={perkDots}
          className="mx-auto"
          style={{ width: "fit-content" }}
        >
          {perks.map((perk) => (
            <li style={dotStyles} key={perk.id}></li>
          ))}
        </ul>
      )}

      <div
        className="flex justify-between absolute w-full top-1/2 px-4 translate-y-1/2"
        style={{ display: windowWidth <= 640 ? "none" : "flex" }}
      >
        <button
          id="perk-prev"
          className="py-2 px-4 bg-white text-xl inline-block rounded-full"
        >
          &#60;
        </button>
        <button
          id="perk-next"
          className="py-2 px-4 bg-white hover:cursor-pointer text-xl inline-block rounded-full"
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default PerkSlider;
