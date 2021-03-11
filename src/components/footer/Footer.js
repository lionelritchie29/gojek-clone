import logo from "../../assets/logo.svg";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <section className="bg-secondary py-6">
      <div className="w-11/12 lg:w-4/5 mx-auto">
        <div>
          <img width="125" src={logo} alt="logo" />
        </div>

        <FooterLinks />
      </div>
    </section>
  );
};

export default Footer;
