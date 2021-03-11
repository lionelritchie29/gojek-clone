import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faGooglePlay,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import useWindowWidth from "../../hooks/useWindowWidth";

const SocialMediaLinks = () => {
  const [socials] = useState([
    {
      id: 1,
      icon: faFacebook,
    },
    {
      id: 2,
      icon: faTwitter,
    },
    {
      id: 3,
      icon: faInstagram,
    },
    {
      id: 4,
      icon: faYoutube,
    },
  ]);

  const windowWidth = useWindowWidth();

  const mobileAppIconsLayout = (
    <div>
      <button className="btn w-full rounded-full text-gray-800 mt-4 font-semibold bg-white">
        <FontAwesomeIcon icon={faGooglePlay} className="mr-2" /> Play store
      </button>

      <button className="btn w-full rounded-full text-gray-800 mt-4 font-semibold bg-white">
        <FontAwesomeIcon icon={faApple} className="mr-2" /> App store
      </button>
    </div>
  );

  const desktopAppIconsLayout = (
    <div className="mt-4">
      <a href="/" className="mr-8">
        <FontAwesomeIcon icon={faGooglePlay} size="2x" className="mr-2" />{" "}
      </a>

      <a href="/" className="mr-8">
        <FontAwesomeIcon icon={faApple} size="2x" className="mr-2" />{" "}
      </a>
    </div>
  );

  return (
    <div className="text-white mt-8 pt-8 lg:mt-0 border-t border-gray-700 lg:border-none">
      <div>
        <h4 className="font-semibold text-lg mb-4 lg:text-xl">
          Connect with us
        </h4>
        <ul className="flex ">
          {socials.map((social) => (
            <li className="mr-12" key={social.id}>
              <a href="/">
                <FontAwesomeIcon size="2x" icon={social.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-lg mt-8 lg:text-xl">
          Download the app
        </h4>

        {windowWidth <= 768 ? mobileAppIconsLayout : desktopAppIconsLayout}
      </div>
    </div>
  );
};

export default SocialMediaLinks;
