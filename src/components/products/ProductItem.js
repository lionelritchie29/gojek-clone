const ProductItem = ({ product }) => {
  return (
    <div>
      <div
        id="product-container"
        className="rounded-3xl w-3/4 mx-auto"
        style={{ backgroundColor: product.innerBgColor }}
      >
        <div
          className="h-72 md:h-80 rounded-3xl relative"
          style={{ backgroundColor: product.bgColor }}
        >
          <div className="absolute bottom-0 left-0 w-full">
            <img
              className="w-full object-contain"
              src={product.background}
              alt="background"
            />
          </div>
          <div className="flex h-full flex-col p-5 md:p-10">
            {product.subProducts.map((sub) => (
              <img key={sub} className="mb-8 mr-5 w-36" alt="" src={sub} />
            ))}
          </div>
        </div>

        <div className="text-white p-6 hidden" id="product-detail">
          <h3 className="text-xl font-bold">{product.category}</h3>
          <p className="text-sm mt-2">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
