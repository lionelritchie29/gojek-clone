import { useState } from "react";

import joinDriverIcon from "../../assets/join-driver.svg";
import joinMerchantIcon from "../../assets/join-merchant.svg";
import joinEmployeeIcon from "../../assets/join-employee.svg";
import JobCard from "./JobCard";

const JobCards = () => {
  const [jobs] = useState([
    {
      id: 1,
      icon: joinEmployeeIcon,
      title: "Employees",
      description:
        "Behind Southeast Asia’s only hyper-growth startup are some billion-dollar brains, doing what they do best.",
      btnDesc: "Join as an employee",
    },
    {
      id: 2,
      icon: joinDriverIcon,
      title: "Driver partners",
      description:
        "We’re home to 2 million+ driver partners, who enjoy a bundle of health and financial benefits.",
      btnDesc: "Join as a driver partner",
    },
    {
      id: 3,
      icon: joinMerchantIcon,
      title: "Merchants",
      description:
        "We empower 500,000+ merchants with cutting-edge technologies that help them multiply reach and sales.",
      btnDesc: "Join as a merchant",
    },
  ]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
      {jobs.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}
    </div>
  );
};

export default JobCards;
