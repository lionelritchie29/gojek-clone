import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import downloadBgDesktop from "../../assets/download-desktop.png";
import downloadBgMobile from "../../assets/download-mobile.png";
import useWindowWidth from "../../hooks/useWindowWidth";
import AppButton from "../AppButton";

const DownloadSheet = () => {
  const windowWidth = useWindowWidth();

  return (
    <section
      className="md:min-h-screen bg-secondaryLight flex md:items-center"
      style={{
        backgroundImage: `url(${windowWidth <= 640 ? "" : downloadBgDesktop})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:w-3/4 mx-auto md:my-12">
        <div className="w-3/4 md:w-full md:my-0 my-12 mx-auto">
          <h2
            className="text-white text-2xl text-center md:text-left md:text-3xl lg:text-5xl font-extrabold font-extended"
            style={{ lineHeight: "1.3" }}
          >
            Good to Go ? <br /> Download <br /> the Gojek app today!
          </h2>

          <div className="flex flex-col mx-auto md:mx-0 md:flex-row w-3/5 justify-center md:justify-start md:w-3/5 lg:w-2/6 mt-8 md:mt-12">
            <AppButton
              icon={faApple}
              btnClasses="mr-8"
              iconClasses="mr-2"
              text="App store"
            />

            <AppButton
              icon={faGooglePlay}
              btnClasses="mr-4 mt-6 md:mt-0"
              iconClasses="mr-2"
              text="Play store"
            />
          </div>
        </div>

        {windowWidth <= 640 && (
          <div
            className="-mt-80"
            style={{
              backgroundImage: `url(${downloadBgMobile})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "60rem",
            }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default DownloadSheet;
