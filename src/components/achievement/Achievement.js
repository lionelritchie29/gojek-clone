const Achievement = ({ achievement }) => {
  return (
    <div className="min-w-full lg:min-w-0">
      <div className="w-1/2 lg:w-3/4 mx-auto">
        <img src={achievement.icon} alt={achievement.title} />
      </div>
      <div className="w-4/5 mx-auto">
        <h3 className="font-semibold text-lg lg:text-2xl lg:font-bold text-center">
          {achievement.title}
        </h3>
        <p
          className="text-sm lg:text-lg text-center"
          style={{ color: "#101820" }}
        >
          {achievement.content}
        </p>
      </div>
    </div>
  );
};

export default Achievement;
