import { useState } from "react";
import heartFilled from '../assets/images/icons/heart-filled.svg'

import heartEmpty from '../assets/images/icons/heart-empty.svg'
const HeartWidget = () => {
    const [isFav, setIsFav] =useState(false);
    const toggleFav = ()=>{
        setIsFav(!isFav);
    }
    return (
      <div className="heart-widget" onClick={toggleFav}>
          <img src={isFav ? heartFilled : heartEmpty} alt="heart-widget" className="heart-img" />
      </div>
    );
  };
  export default HeartWidget;