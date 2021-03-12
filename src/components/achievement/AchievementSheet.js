import Achievements from "./Achievements";

const AchievementSheet = () => {
  return (
    <section className="bg-secondary">
      <div>
        <section className="p-8 pt-24 lg:p-24 factsheet-header flex flex-col justify-center align-center">
          <h2 className="font-extended text-white font-extrabold text-3xl md:text-4xl lg:text-6xl tracking-wide text-center">
            We're Gojek, <br />
            the drivers of change
          </h2>

          <div className="flex justify-center mt-8 lg:mt-16">
            <button
              className="bg-primary font-semibold text-white rounded-full text-lg px-4 lg:px-8 lg:py-2"
              style={{ width: "fit-content" }}
            >
              Explore careers
            </button>
          </div>
        </section>

        <Achievements />
      </div>
    </section>
  );
};

export default AchievementSheet;
