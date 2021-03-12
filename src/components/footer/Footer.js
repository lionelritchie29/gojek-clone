import logo from "../../assets/logo.svg";
import FooterLinks from "./FooterLinks";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <section className="bg-secondary py-6 lg:py-16">
      <div className="w-11/12 lg:w-3/4 mx-auto">
        <div>
          <img width="125" src={logo} alt="logo" />
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4">
            <FooterLinks />
          </div>
          <div className="w-full lg:w-1/4">
            <SocialMediaLinks />
          </div>
        </div>

        <ul className="text-white md:flex md:justify-center lg:justify-start mt-8 pt-8 border-gray-700 border-t">
          <li className="underline mt-3 md:mr-10">
            <a href="/">Privacy Policy</a>
          </li>
          <li className="underline mt-3 md:mr-10">
            <a href="/">Terms & Conditions</a>
          </li>
          <li className="underline mt-3 md:mr-10">
            <a href="/">Data Attribution</a>
          </li>
        </ul>

        <p className="text-white mt-8 lg:mt-12 md:px-6 lg:px-0 text-sm md:text-base md:text-center lg:text-left">
          &copy; 2021 Gojek | Gojek is a trademark of PT Aplikasi Karya Anak
          Bangsa. Registered in the Directorate General of Intellectual Property
          of the Republic of Indonesia.
        </p>
      </div>
    </section>
  );
};

export default Footer;
