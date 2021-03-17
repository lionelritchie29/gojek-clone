import { useRef } from "react";

const ProductItem = ({ product }) => {
  return (
    <div>
      <div
        className="rounded-3xl"
        style={{ backgroundColor: product.innerBgColor }}
      >
        <div
          className="h-80 rounded-3xl relative"
          style={{ backgroundColor: product.bgColor }}
        >
          <div className="absolute bottom-0 left-0 w-full">
            <img
              className="w-full object-contain"
              src={product.background}
              alt="background"
            />
          </div>
          <div className="flex h-full flex-col p-10">
            {product.subProducts.map((sub) => (
              <img key={sub} className="mb-8 mr-5 w-36" src={sub} />
            ))}
          </div>
        </div>

        <div className="text-white p-8 hidden" id="product-detail">
          <h3 className="text-xl font-bold">{product.category}</h3>
          <p className="text-sm mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
