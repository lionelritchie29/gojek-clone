import { useState } from "react";

const FooterLinks = () => {
  const [links] = useState([
    {
      id: 1,
      header: "Company",
      links: [
        {
          title: "About",
        },
        {
          title: "Products",
        },
        {
          title: "Blog",
        },
      ],
    },
    {
      id: 2,
      header: "Join with us",
      links: [
        {
          title: "Driver Partners",
        },
        {
          title: "Merchant Partners",
        },
      ],
    },
    {
      id: 3,
      header: "Careers",
      links: [
        {
          title: "Student",
        },
        {
          title: "Professional",
        },
      ],
    },
    {
      id: 4,
      header: "Get in touch",
      links: [
        {
          title: "Help Center",
        },
        {
          title: "Contact Us",
        },
      ],
    },
  ]);

  return (
    <div className="text-white mt-12 lg:py-8 lg:mt-4 lg:mr-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
        {links.map((link) => (
          <div key={link.id}>
            <h4 className="font-semibold lg:text-lg">{link.header}</h4>
            <ul>
              {link.links.map((quickLink) => (
                <li
                  className="hover:underline text-sm lg:text-base mt-4"
                  key={quickLink.title}
                >
                  <a href="/">{quickLink.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default FooterLinks;
