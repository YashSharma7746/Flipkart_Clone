import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@chakra-ui/react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import "./Products.Carousel.css";
import { Link } from "react-router-dom";


function ProductsCarousel({ data }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="Karu"
      style={{
        backgroundColor: "#ebd5af",
        width: "100%",
        margin: "auto",
        marginTop: "10px",
        padding: "30px",
        boxSizing: "border-box",
        fontFamily: "Roboto, Arial, sans-serif",
      }}
    >
      <Slider {...settings}>
        {data.map((item, i) => (
          <Link to={`/${item.link}`}>
            <div className="card" key={item.subtext}>
            <div className="card-top">
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={item.name}
              >
                <Image src={item.image} alt={item.name} key={item.name} />
              </div>

              <h1
                style={{
                  maxWidth: "40ch",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
                key={i}
              >
                {item.name}
              </h1>
            </div>
            <div className="card-bottom" key={item.price}>
              <h3>
                <span style={{ color: "#388e3c" }}>{item.price}</span>
              </h3>
              <p style={{ color: "grey", fontSize: "14px" }}>{item.subtext}</p>
            </div>
          </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default ProductsCarousel;
