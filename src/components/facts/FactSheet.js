import Facts from "./Facts";

const FactSheet = () => {
  return (
    <section>
      <h2 className="font-extrabold font-extended pt-28 text-3xl md:text-5xl lg:text-6xl text-center">
        We scale like a dream
      </h2>

      <div className="flex justify-center mt-4 lg:mt-8 pb-16">
        <button
          className="bg-primary font-semibold text-white rounded-full text-lg px-4 lg:px-8 lg:py-2"
          style={{ width: "fit-content" }}
        >
          Scale with us
        </button>
      </div>

      <Facts />
    </section>
  );
};

export default FactSheet;
