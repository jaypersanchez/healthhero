/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// images
import profile from "../../assets/images/profile.png"; 
 
// eslint-disable-next-line
function NFT() {  

  return (
    <>
    <div id="user-profile" className="user-profile">
        <div className="c-box border-bottom-0">
          <h5 className="clr-blue mb-3">profile</h5>
          <div className="user-avator mt-16 mb-16">
            <img src={profile} alt="img4" />
          </div>
          <h2 className="clr-red mb-3">Sam Thomas</h2>
          <p>0xbcb49u7hb8889nmkjX</p>
          <p className="fs-14">Joined January 2022</p>

          <a href="#" className="mt-16"><span class="icon-share"><span class="path1"></span><span class="path2"></span></span></a>
        </div>
      </div>
    </>
  );
}

export default NFT;