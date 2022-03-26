/* eslint-disable no-unused-expressions */
import React from 'react';

import Minted from './user-profile/Minted';
import Activity from './user-profile/Activity';
import Offers from './user-profile/Offers';
import 'bootstrap/dist/css/bootstrap.min.css';

const Tabs = {
  MINTED: 0,
  ACTIVITY: 1,
  OFFERS: 2,
};

const UserProfile = () => {
  const [activeTab, setActiveTab] = React.useState(Tabs.MINTED);

  function onChangeTab(evt, _tab) {
    evt.preventDefault();
    setActiveTab(_tab);
  }

  return (
    <>
      <div className="user-container position-relative">
        <div className="logo inner-header position-relative"></div>
        <div className="inner-navigation d-md-flex justify-content-between">
          <div className="container">
            <div className="row">
              <div className="col-md-12 d-flex align-items-center justify-content-between">
                <ul className="d-flex align-items-center">
                  <li
                    className={activeTab === Tabs.MINTED ? 'active' : ''}
                    onClick={(evt) => onChangeTab(evt, Tabs.MINTED)}
                  >
                    <a href="#">
                      Minted<span className="badge">8</span>
                    </a>
                  </li>
                  <li
                    className={activeTab === Tabs.ACTIVITY ? 'active' : ''}
                    onClick={(evt) => onChangeTab(evt, Tabs.ACTIVITY)}
                  >
                    <a href="#">Activity</a>
                  </li>
                  <li
                    className={activeTab === Tabs.OFFERS ? 'active' : ''}
                    onClick={(evt) => onChangeTab(evt, Tabs.OFFERS)}
                  >
                    <a href="#">Offers</a>
                  </li>
                </ul>
                <div className="d-flex align-items-center justify-content-end">
                  <button className="sort-btn">Sort</button>
                  <button className="sort-btn">Date</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="inner-container">
          {activeTab === Tabs.MINTED && <Minted />}
          {activeTab === Tabs.ACTIVITY && <Activity />}
          {activeTab === Tabs.OFFERS && <Offers />}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
