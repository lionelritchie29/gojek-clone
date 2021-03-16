import ProductSlider from "./ProductSlider";

const ProductSheet = () => {
  return (
    <section className="bg-secondary py-12 lg:py-36">
      <div className="w-4/5 lg:w-2/5 mx-auto">
        <h1 className="text-white font-extended font-extrabold text-center text-2xl lg:text-5xl">
          We build products that nations run on
        </h1>
        <div className="flex justify-center">
          <button
            className="bg-primary font-semibold text-white rounded-full text-base lg:text-lg px-6 lg:px-8 lg:py-2 mt-4 lg:mt-10"
            style={{ width: "fit-content" }}
          >
            View all products
          </button>
        </div>
      </div>

      <ProductSlider />
    </section>
  );
};

export default ProductSheet;
