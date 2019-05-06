import React from "react";
import image from "../../assets/404.svg";
import { Svg, Words } from "./PagesStyled";

const PageNotFound = () => {
  return (
    <Words>
      <Svg src={image} alt="page not found" />
      <h2>How'd you get here?</h2>
      <p>The page you're looking for either doesn't exist</p>
      <h2>404 ERROR</h2>
    </Words>
  );
};
export default PageNotFound;
