import { useState } from "react";
import TinySlider from "tiny-slider-react";

import perk1 from "../../assets/perks/perks1.jpg";
import perk2 from "../../assets/perks/perks2.jpg";
import perk3 from "../../assets/perks/perks3.jpg";
import perk4 from "../../assets/perks/perks4.jpg";
import Perk from "./Perk";

const PerkSlider = () => {
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

  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    loop: true,
    items: 3,
    gutter: 20,
    center: true,
  };

  return (
    <TinySlider settings={settings}>
      {perks.map((perk) => (
        <Perk perk={perk} key={perk.id} />
      ))}
    </TinySlider>
  );
};

export default PerkSlider;
