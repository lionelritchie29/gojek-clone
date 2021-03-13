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
    <div className="pr-10" style={styles}>
      <div className="w-full h-full relative" style={bgStyles}>
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "linear-gradient(180deg,rgba(21,21,21,0),#151515)",
            borderRadius: "4rem",
          }}
        ></div>

        <div className="text-white w-full absolute z-10 bottom-12 left-12">
          <h3 className="font-bold text-2xl">{perk.title}</h3>
          <p>{perk.detail}</p>
        </div>

        <button
          className="bg-primary font-semibold text-white absolute bottom-12 right-12 rounded-full text-lg px-4 lg:px-8 lg:py-2"
          style={{ width: "fit-content" }}
        >
          View all
        </button>
      </div>
    </div>
  );
};

export default Perk;
