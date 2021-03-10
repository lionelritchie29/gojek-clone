const JobCard = ({ job }) => {
  return (
    <div
      className="bg-secondaryLight lg:mr-8 px-8 lg:px-16 pt-0 pb-28 lg:pb-40 relative"
      style={{ borderRadius: "3rem" }}
    >
      <div className="-mt-10">
        <img src={job.icon} alt={job.title} />
      </div>

      <h3 className="font-bold text-lg lg:text-3xl mt-6 lg:mt-10 text-white">
        {job.title}
      </h3>
      <p className="text-white text-sm lg:text-lg mt-4 lg:mt-6">
        {job.description}
      </p>

      <div className="mt-10 absolute bottom-8 lg:bottom-16">
        <button
          className="bg-primary font-semibold text-white rounded-full text-lg px-4 lg:px-8 lg:py-2"
          style={{ width: "fit-content" }}
        >
          {job.btnDesc}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
