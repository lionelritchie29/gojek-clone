import Features from "./Features";

const FactSheet = () => {
  return (
    <div className="bg-secondary">
      <div>
        <section className="p-8 pt-24 lg:p-24 factsheet-header flex flex-col justify-center align-center">
          <h2 className="text-white font-bold text-3xl lg:text-5xl text-center">
            We're Gojek, <br />
            the drivers of change
          </h2>

          <div className="flex justify-center mt-8">
            <button
              className="bg-primary font-semibold text-white rounded-full text-lg lg:text-xl px-8 py-3"
              style={{ width: "fit-content" }}
            >
              Explore careers
            </button>
          </div>
        </section>

        <Features />
      </div>
    </div>
  );
};

export default FactSheet;
