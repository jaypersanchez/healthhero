/* eslint-disable no-unused-expressions */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Activity extends React.Component {
  render() {
    return (
      <>  
      <div className="container">
         <div className="row activity-list"> 
            <ul>
              <li>You minted ID 12 on Monday Jan 5, 2022</li>
              <li>Jammy Neilson bought ID 23 for $246 on Monday Feb 2, 2021</li>
              <li>Sarah Ty bought ID 09 for $900 on Monday Nov 20, 2021</li>
              <li>You minted ID 34 on Monday March 1, 2021</li>
            </ul>
        </div>
      </div>
      </>
    );
  }
}
export default Activity;