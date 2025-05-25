import React from "react";
import img from "../assets/images.jpeg";
import "../css/StyleImage.css";

const StyleImage = () => {
  const pStyle = {
    backgroundColor: "red",
    fontSize: "30px",
  };

  return (
    <div className="style-bg">
      <img src={img} alt="" />
      {/* <p style={{ backgroundColor: "red", fontSize: "20px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        iusto eos suscipit repudiandae. Saepe eos dolor fugit? Unde consectetur
        magni dolor eius harum aliquid non? Expedita libero sit nesciunt
        provident.
      </p> */}
      <p style={pStyle}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, tempore
        molestiae! Quidem alias dolorum veritatis reprehenderit iure quisquam
        officiis velit, recusandae dicta corrupti? Voluptatem nihil explicabo
        ut! Expedita, nihil minus.
      </p>
    </div>
  );
};

export default StyleImage;
