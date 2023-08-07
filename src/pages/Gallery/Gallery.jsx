import React from "react";
import Masonry from "react-responsive-masonry";
import PageCover from "../../components/PageCover/PageCover";
import galleryCover from "../../assets/pageCover/gallery.jpg";

const Gallery = () => {
  const images = [
    "https://i.ibb.co/rskZd1m/food4.png",
    //...
    "https://i.ibb.co/TBxtyj4/Screenshot-82.png",
    "https://i.ibb.co/GJhHRNw/food6.png",
    "https://i.ibb.co/qgSbzpL/food5.png",
    "https://i.ibb.co/fFr8Y5D/food3.png",
    "https://i.ibb.co/r2cQm2j/food2.png",
    "https://i.ibb.co/rskZd1m/food4.png",
    //...
    "https://i.ibb.co/TBxtyj4/Screenshot-82.png",
    "https://i.ibb.co/GJhHRNw/food6.png",
    "https://i.ibb.co/qgSbzpL/food5.png",
    "https://i.ibb.co/fFr8Y5D/food3.png",
    "https://i.ibb.co/r2cQm2j/food2.png",
  ];
  return (
    <div>
      <PageCover bgImg={galleryCover} coverTitle={"Gallery"}></PageCover>
      <div className="my-3">
        <Masonry columnsCount={3} gutter="2px">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{ width: "100%", display: "block" }}
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Gallery;
