/* eslint-disable no-unused-expressions */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Images
import nft1 from "../../assets/images/nft/a0001.png"; 
import nft2 from "../../assets/images/nft/a0002.png"; 
import nft3 from "../../assets/images/nft/a0003.png"; 
import nft4 from "../../assets/images/nft/a0004.png"; 
import nft5 from "../../assets/images/nft/a0005.png"; 
import nft6 from "../../assets/images/nft/a0006.png"; 
import nft7 from "../../assets/images/nft/a0007.png"; 
import nft8 from "../../assets/images/nft/a0008.png"; 


class Minted extends React.Component {
   
  render() {
    return (
      <>  
      <div className="container">
         <div className="row max-800"> 
            <div className="col-md-4 nft-box mb-24">
              <div className="--img-box mb-16">
                <a href="#"><img src={nft2} className="fluid-img" alt="img4" /></a>
              </div>
              <h5>token id 004</h5>
              <p>
                DEED ID: GO!0003-DIM-OY0001-PARCEL003
              </p>
            </div>
            <div className="col-md-4 nft-box mb-24">
              <div className="--img-box mb-16">
               <a href="#"><img src={nft1} className="fluid-img" alt="img4" /></a>
              </div>
              <h5>token id 0003</h5>
              <p>
                DEED ID: GO!0004-DIM-RGB0001-PARCEL004
              </p>
            </div>
            <div className="col-md-4 nft-box mb-24">
              <div className="--img-box mb-16">
                <a href="#"><img src={nft3} className="fluid-img" alt="img4" /></a>
              </div>
              <h5>token id 004</h5>
              <p>
                DEED ID: GO!0004-DIM-ENV0001-PARCEL004
              </p>
            </div>
            <div className="col-md-4 nft-box mb-24">
              <div className="--img-box mb-16">
                <a href="#"><img src={nft4} className="fluid-img" alt="img4" /></a>
              </div>
              <h5>token id 005</h5>
              <p>
                DEED ID: GO!0004-DIM-ENV0001-PARCEL005
              </p>
            </div>
            <div className="col-md-4 nft-box mb-24">
              <div className="--img-box mb-16">
              <a href="#"><img src={nft5} className="fluid-img" alt="img4" /></a>
              </div>
              <h5>token id 006</h5>
              <p>
                DEED ID: GO!0004-DIM-ENV0001-PARCEL006
              </p>
            </div>
            <div className="col-md-4 nft-box mb-24">
              <div className="--img-box mb-16">
              <a href="#"><img src={nft6} className="fluid-img" alt="img4" /></a>
              </div>
              <h5>token id 006</h5>
              <p>
                DEED ID: GO!0004-DIM-ENV0001-PARCEL006
              </p>
            </div>
            <div className="col-md-4 nft-box mb-24">
              <div className="--img-box mb-16">
              <a href="#"><img src={nft7} className="fluid-img" alt="img4" /></a>
              </div>
              <h5>token id 006</h5>
              <p>
                DEED ID: GO!0004-DIM-ENV0001-PARCEL006
              </p>
            </div>
            <div className="col-md-4 nft-box mb-24">
              <div className="--img-box mb-16">
                <a href="#"><img src={nft8} className="fluid-img" alt="img4" /></a>
              </div>
              <h5>token id 006</h5>
              <p>
                DEED ID: GO!0004-DIM-ENV0001-PARCEL006
              </p>
            </div>
        </div>
      </div>
      </>
    );
  }
}

export default Minted;