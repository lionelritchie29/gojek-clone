const FactSheet = () => {
  return (
    <div className="bg-secondary">
      <div className="factsheet-header p-24 flex flex-col justify-center align-center">
        <h2
          className="text-white font-bold text-5xl text-center"
          style={{ lineHeight: "4rem" }}
        >
          We're Gojek, <br />
          the drivers of change
        </h2>

        <div class="flex justify-center mt-12">
          <button
            class="bg-primary font-semibold text-white rounded-full text-xl px-8 py-3"
            style={{ width: "fit-content" }}
          >
            Explore careers
          </button>
        </div>
      </div>
    </div>
  );
};

export default FactSheet;
