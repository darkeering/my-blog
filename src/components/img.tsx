import React from "react";

export const Img = ({ src, width }) => (
  <img
    style={{
      width: width,
      borderRadius: "0.4rem",
      border: "1px solid #aaa",
    }}
    src={src}
  ></img>
);