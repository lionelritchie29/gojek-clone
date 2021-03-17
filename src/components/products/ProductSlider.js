import { useLayoutEffect, useState, useRef } from "react";
import TinySlider from "tiny-slider-react";
import ProductItem from "./ProductItem";
import useWindowWidth from "../../hooks/useWindowWidth";

const ProductSlider = () => {
  const slider = useRef();
  const windowWidth = useWindowWidth();

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

    if (windowWidth > 640) ref.classList.add("-m-9");

    if (windowWidth >= 1024) {
      slideItems[index].style.marginRight = "4.5rem";
      slideItems[index].firstChild.classList.add("product-active");
      slideItems[index].firstChild.firstChild.classList.add("-mt-16");
    } else if (windowWidth >= 768) {
      slideItems[index].style.marginRight = "5.5rem";
      slideItems[index].firstChild.classList.add("product-active");
      slideItems[index].firstChild.firstChild.classList.add("-mt-16");
    } else {
      slideItems[index].style.marginRight = "1rem";
      slideItems[index].firstChild.style.transform = "scaleY(1.1)";
      slideItems[index].firstChild.classList.add("w-52");
    }

    if (windowWidth > 640) {
      slideItems[index]
        .querySelector("#product-detail")
        .classList.remove("hidden");
    }
  });

  const onIndexChanged = (info, eventName) => {
    const { index, indexCached, slideItems } = info;
    const previousProductDetail = slideItems[indexCached].querySelector(
      "#product-detail"
    );
    const productDetail = slideItems[index].querySelector("#product-detail");

    // reset previous slide
    if (windowWidth > 640) {
      previousProductDetail.classList.add("hidden");
      slideItems[indexCached].firstChild.firstChild.classList.remove("-mt-16");
    }

    if (windowWidth >= 768) {
      slideItems[indexCached].firstChild.classList.remove("product-active");
      slideItems[indexCached].style.marginRight = "0";
    } else {
      slideItems[indexCached].style.marginRight = "0";
      slideItems[indexCached].firstChild.style.transform = "scaleY(1)";
      slideItems[indexCached].firstChild.classList.remove("w-52");
    }

    // set current slide as active
    if (windowWidth > 640) {
      productDetail.classList.remove("hidden");
      slideItems[index].firstChild.firstChild.classList.add("-mt-16");
    }

    if (windowWidth >= 1024) {
      slideItems[index].firstChild.classList.add("product-active");
      slideItems[index].style.marginRight = "4.5rem";
    } else if (windowWidth >= 768) {
      slideItems[index].firstChild.classList.add("product-active");
      slideItems[index].style.marginRight = "5.5rem";
    } else {
      slideItems[index].style.marginRight = "1rem";
      slideItems[index].firstChild.style.transform = "scaleY(1.1)";
      slideItems[index].firstChild.classList.add("w-52");
    }
  };

  const settings = {
    mouseDrag: false,
    navContainer: "#product-nav",
    controls: false,
    navAsThumbnails: true,
    center: true,

    responsive: {
      300: {
        items: 3,
        mouseDrag: true,
        gutter: 20,
        fixedWidth: 192,
      },
      768: {
        items: 3,
        mouseDrag: false,
        gutter: 40,
        fixedWidth: false,
      },
      1024: {
        items: 5,
        mouseDrag: false,
        gutter: 40,
        fixedWidth: false,
      },
    },
  };

  return (
    <div className="lg:px-36 py-8 mx-auto">
      <TinySlider
        className="py-28"
        settings={settings}
        onIndexChanged={onIndexChanged}
        ref={slider}
      >
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </TinySlider>

      <ul
        style={{ display: windowWidth <= 640 ? "none" : "flex" }}
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
