import React from "react";
import Chin from "../../assets/2.png";
import Amer from "../../assets/6.png";
import "./styles.scss";

const Directory = () => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${Chin})` }}>
          <a>Male</a>
        </div>
        <div className="item" style={{ backgroundImage: `url(${Amer})` }}>
          <a>Female</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
