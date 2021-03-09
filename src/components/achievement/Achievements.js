import Achievement from "./Achievement";

import fortuneFavoriteIcon from "../../assets/icon1.svg";
import contributionIcon from "../../assets/icon2.svg";
import greenerIcon from "../../assets/icon3.svg";
import digitalisingMerchantIcon from "../../assets/icon4.svg";
import { useState } from "react";

const Achievements = () => {
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

  return (
    <div className="lg:w-4/5 lg:mx-auto">
      <div className="flex overflow-auto lg:grid lg:grid-cols-4">
        {achievement.map((achievement) => (
          <Achievement achievement={achievement} key={achievement.id} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
