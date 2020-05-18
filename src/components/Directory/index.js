import React from "react";
import Chin from "../../assets/2.png";
import Amer from "../../assets/6.png";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrapDir">
        <div className="itemDir" style={{ backgroundImage: `url(${Chin})` }}>
          <a>Male</a>
        </div>
        <div className="itemDir" style={{ backgroundImage: `url(${Amer})` }}>
          <a>Female</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
