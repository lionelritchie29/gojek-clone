const Feature = ({ feature }) => {
  return (
    <div className="min-w-full lg:min-w-0">
      <div className="w-1/2 lg:w-3/5 mx-auto">
        <img src={feature.icon} />
      </div>
      <div className="w-4/5 mx-auto">
        <h3 className="font-semibold text-lg text-center">{feature.title}</h3>
        <p className="text-sm text-center" style={{ color: "#101820" }}>
          {feature.content}
        </p>
      </div>
    </div>
  );
};

export default Feature;
