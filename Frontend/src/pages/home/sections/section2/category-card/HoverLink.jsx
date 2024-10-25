import arrow from "../../../../../assets/images/icons/arrow.svg";
import arrowHover from "../../../../../assets/images/icons/arrow-hover.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const HoverLink = ({categoria}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="link"
     onMouseEnter={()=> setIsHovered(true)}
     onMouseLeave={()=> setIsHovered(false)}>
        
      <Link to={`/our-products/${categoria.toLowerCase()}`}>Conocé más</Link>
      <img src={isHovered ? arrowHover : arrow} alt="flecha" className="link-arrow"></img>
    </div>
  );
};

export default HoverLink;
