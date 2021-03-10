import { useState } from "react";
import appDownloadIcon from "../../assets/info1.png";
import driverPartnerIcon from "../../assets/info2.png";
import goFoodMerchantIcon from "../../assets/info3.png";
import jumpDownloadIcon from "../../assets/info4.png";
import Fact from "./Fact";

const Facts = () => {
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

  return (
    <div className="lg:w-4/5 lg:mx-auto mt-16">
      <div
        className="flex overflow-auto px-4 lg:px-8 lg:grid lg:grid-cols-4 gap-6 lg:gap-10"
        style={{ gridAutoRows: "1fr" }}
      >
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} />
        ))}
      </div>
    </div>
  );
};

export default Facts;
