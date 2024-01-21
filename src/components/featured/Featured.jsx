import React from "react";
import "./Featured.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import animation from "../../assets/Animation - 1698600962481.json"
import Lottie from "lottie-react"
function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
 <span>Workiee24</span> freelance
            Where work never rest  
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "building mobil app"' />
            </div>
            <button>Search</button>
          </div>
          
        </div>
        <div className="right">
        <Lottie animationData={animation} />        </div>
      </div>
    </div>
  );
}

export default Featured;
