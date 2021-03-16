import { useState } from "react";
import TinySlider from "tiny-slider-react";
import ProductItem from "./ProductItem";

const ProductSlider = () => {
  const [products] = useState([
    {
      id: 1,
      category: "Transport & Logistics",
      description:
        "We`ve kinda done 13,000 trips between the earth and the moon.",
      subProducts: [
        "https://lelogama.go-jek.com/prime/upload/image/product-goride.svg",
        "https://lelogama.go-jek.com/prime/upload/image/product-gocar.svg",
        "https://lelogama.go-jek.com/prime/upload/image/product-gobluebird.svg",
        "https://lelogama.go-jek.com/prime/upload/image/product-gosend.svg",
        "https://lelogama.go-jek.com/prime/upload/image/product-gobox.svg",
      ],
      background:
        "https://lelogama.go-jek.com/prime/upload/image/product-intro-card-bg-transport.svg",
      bgColor: "#00AA13",
    },
    {
      id: 2,
      category: "Payments",
      description:
        "From deals to donations, we make transactions easy, reliable, and cashless.",
      subProducts: [
        "https://lelogama.go-jek.com/prime/upload/image/product-gopay.svg",
        "https://lelogama.go-jek.com/prime/upload/image/product-gotagihan.svg",
        "https://lelogama.go-jek.com/prime/upload/image/product-paylater.svg",
        "https://lelogama.go-jek.com/prime/upload/image/product-gosure.svg",
      ],
      background:
        "https://lelogama.go-jek.com/prime/upload/image/product-intro-card-bg-payments.svg",
      bgColor: "#00AED6",
    },
    {
      id: 3,
      category: "Food & Shopping",
      description:
        "Fill your cart with food, electronics, medicines, and more. Without stepping out!",
      subProducts: [
        "https://lelogama.go-jek.com/prime/upload/image/product-gofood.svg",
        "https://lelogama.go-jek.com/prime/upload/image/product-gomed.svg",
        "https://lelogama.go-jek.com/prime/upload/image/product-gomart.svg",
      ],
      background:
        "https://lelogama.go-jek.com/prime/upload/image/product-intro-card-bg-food.svg",
      bgColor: "#EE2737",
    },
    {
      id: 4,
      category: "Business",
      description:
        "Manage your restaurants, run ads, create promos, and do more.",
      subProducts: [
        "https://lelogama.go-jek.com/prime/upload/image/product-gobiz.svg",
      ],
      background:
        "https://lelogama.go-jek.com/prime/upload/image/product-intro-card-bg-business.svg",
      bgColor: "#93328E",
    },
    {
      id: 5,
      category: "Entertainment",
      description:
        "Binge-watch your favorite series, book tickets play games, have a good time!",
      subProducts: [
        "https://lelogama.go-jek.com/prime/upload/image/product-goplay.svg",
        "https://lelogama.go-jek.com/prime/upload/image/product-gotix.svg",
      ],
      background:
        "https://lelogama.go-jek.com/prime/upload/image/product-intro-card-bg-entertainment.svg",
      bgColor: "#DF1995",
    },
  ]);

  const settings = {
    mouseDrag: true,
    // navContainer: "#perk-dots",
    // prevButton: "#perk-prev",
    // nextButton: "#perk-next",
    center: true,
    gutter: 20,
    responsive: {
      640: {
        items: 3,
      },
      768: {
        items: 3,
      },
      1024: {
        items: 5,
      },
    },
  };

  return (
    <div>
      <TinySlider settings={settings}>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </TinySlider>
    </div>
  );
};

export default ProductSlider;
