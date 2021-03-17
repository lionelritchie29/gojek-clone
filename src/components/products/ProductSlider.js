import { useLayoutEffect, useState, useRef } from "react";
import TinySlider from "tiny-slider-react";
import ProductItem from "./ProductItem";

const ProductSlider = () => {
  const slider = useRef();

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
      innerBgColor: "#257226",
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
      innerBgColor: "#0085AD",
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
      innerBgColor: "#A6192E",
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
      innerBgColor: "#720062",
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
      innerBgColor: "#890C58",
    },
  ]);

  useLayoutEffect(() => {
    const { ref } = slider.current;
    const { index, slideItems } = slider.current.slider.getInfo();

    ref.classList.add("-m-9");
    slideItems[index].style.marginRight = "4.5rem";
    slideItems[index].firstChild.classList.add("product-active");
    slideItems[index]
      .querySelector("#product-detail")
      .classList.remove("hidden");
  });

  const onIndexChanged = (info, eventName) => {
    const { index, indexCached, slideItems } = info;
    const previousProductDetail = slideItems[indexCached].querySelector(
      "#product-detail"
    );
    const productDetail = slideItems[index].querySelector("#product-detail");

    // reset previous slide
    previousProductDetail.classList.add("hidden");
    slideItems[indexCached].style.marginRight = "0";
    slideItems[indexCached].firstChild.classList.remove("product-active");

    // set current slide as active
    productDetail.classList.remove("hidden");
    slideItems[index].style.marginRight = "4.5rem";
    slideItems[index].firstChild.classList.add("product-active");
  };

  const settings = {
    mouseDrag: false,
    navContainer: "#product-nav",
    // prevButton: "#perk-prev",
    // nextButton: "#perk-next",
    navAsThumbnails: true,
    center: true,
    gutter: 40,
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
    <div className="lg:px-36 py-36 mx-auto">
      <TinySlider
        className="py-24"
        settings={settings}
        onIndexChanged={onIndexChanged}
        ref={slider}
      >
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </TinySlider>

      <ul
        id="product-nav"
        className="text-white flex w-full lg:px-36 mt-12 lg:w-3/5 mx-auto justify-between"
      >
        {products.map((product) => (
          <li key={product.id}>{product.category}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSlider;
