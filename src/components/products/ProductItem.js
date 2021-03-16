const ProductItem = ({ product }) => {
  return (
    <div style={{ backgroundColor: product.bgColor }}>{product.category}</div>
  );
};

export default ProductItem;
