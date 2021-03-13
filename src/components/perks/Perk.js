const Perk = ({ perk }) => {
  const styles = {
    height: "27.5rem",
    position: "relative",
  };

  const bgStyles = {
    backgroundImage: `url(${perk.img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "4rem",
  };

  return (
    <div className="p-6 lg:pr-10" style={styles}>
      <div className="w-full h-full relative" style={bgStyles}>
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "linear-gradient(180deg,rgba(21,21,21,0),#151515)",
            borderRadius: "4rem",
          }}
        ></div>

        <div className="flex flex-col justify-end p-8 lg:block  h-full">
          <div className="text-white w-full lg:absolute z-10 lg:bottom-12 lg:left-12">
            <h3 className="font-bold text-lg lg:text-2xl">{perk.title}</h3>
            <p className="text-sm lg:text-base">{perk.detail}</p>
          </div>

          <button
            className="bg-primary font-semibold mt-8 text-white z-10 lg:absolute lg:bottom-12 lg:right-12 rounded-full text-lg px-4 lg:px-8 lg:py-2"
            style={{ width: "fit-content" }}
          >
            View all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Perk;
