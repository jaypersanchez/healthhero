/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Table from 'react-bootstrap/Table'

// Images
import nft1 from "../../assets/images/nft/a0001.png"; 

function Offers() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  

  return (
      <>  
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-11 pt-40 offers-wrap">
            <Tabs
              defaultActiveKey="Offers-Received"
              transition={true}
              className="mb-40"
            >
              <Tab eventKey="Offers-Received" className="offer-rec" title="Offers Received">
                <Table responsive>
                  <thead>
                    <tr>
                      <th className="item-id">ID</th>
                      <th className="item-name">Items</th>
                      <th>Price (ETH)</th>
                      <th>Price ($)</th>
                      <th>From</th>
                      <th>Expiration</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="item-id">12</td>
                      <td className="item-name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                      <td>.00 8 ETH</td>
                      <td>$265</td>
                      <td>James Nill</td>
                      <td>March 30, 2022</td>
                      <td className="actions">
                        <Button onClick={() => setSmShow(true)}><span class="icon-view"></span></Button>
                        <Button onClick={() => setLgShow(true)}><span class="icon-tick"></span></Button>
                        <Button><span class="icon-cross"></span></Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="item-id">12</td>
                      <td className="item-name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                      <td>.00 8 ETH</td>
                      <td>$265</td>
                      <td>James Nill</td>
                      <td>March 30, 2022</td>
                      <td className="actions">
                        <Button onClick={() => setSmShow(true)}><span class="icon-view"></span></Button>
                        <Button onClick={() => setLgShow(true)}><span class="icon-tick"></span></Button>
                        <Button><span class="icon-cross"></span></Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="item-id">12</td>
                      <td className="item-name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                      <td>.00 8 ETH</td>
                      <td>$487</td>
                      <td>James Nill</td>
                      <td>March 30, 2022</td>
                      <td className="actions">
                        <Button onClick={() => setSmShow(true)}><span class="icon-view"></span></Button>
                        <Button onClick={() => setLgShow(true)}><span class="icon-tick"></span></Button>
                        <Button><span class="icon-cross"></span></Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="item-id">12</td>
                      <td className="item-name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                      <td>.00 8 ETH</td>
                      <td>$563</td>
                      <td>James Nill</td>
                      <td>March 30, 2022</td>
                      <td className="actions">
                        <Button onClick={() => setSmShow(true)}><span class="icon-view"></span></Button>
                        <Button onClick={() => setLgShow(true)}><span class="icon-tick"></span></Button>
                        <Button><span class="icon-cross"></span></Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="item-id">12</td>
                      <td className="item-name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                      <td>.00 8 ETH</td>
                      <td>$345</td>
                      <td>James Nill</td>
                      <td>March 30, 2022</td>
                      <td className="actions">
                        <Button onClick={() => setSmShow(true)}><span class="icon-view"></span></Button>
                        <Button onClick={() => setLgShow(true)}><span class="icon-tick"></span></Button>
                        <Button><span class="icon-cross"></span></Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="item-id">12</td>
                      <td className="item-name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                      <td>.00 8 ETH</td>
                      <td>$788</td>
                      <td>James Nill</td>
                      <td>March 30, 2022</td>
                      <td className="actions">
                        <Button onClick={() => setSmShow(true)}><span class="icon-view"></span></Button>
                        <Button onClick={() => setLgShow(true)}><span class="icon-tick"></span></Button>
                        <Button><span class="icon-cross"></span></Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="item-id">12</td>
                      <td className="item-name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                      <td>.00 8 ETH</td>
                      <td>$643</td>
                      <td>James Nill</td>
                      <td>March 30, 2022</td>
                      <td className="actions">
                        <Button onClick={() => setSmShow(true)}><span class="icon-view"></span></Button>
                        <Button onClick={() => setLgShow(true)}><span class="icon-tick"></span></Button>
                        <Button><span class="icon-cross"></span></Button>
                      </td>
                    </tr>
                    
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="Offers-Made" className="offer-made" title="Offers Made">
              <Table responsive>
                  <thead>
                    <tr>
                      <th className="item-id">ID</th>
                      <th className="item-name">Items</th>
                      <th>Price (ETH)</th>
                      <th>Price ($)</th>
                      <th>From</th>
                      <th>Expiration</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="item-id">12</td>
                      <td className="item-name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                      <td>.00 8 ETH</td>
                      <td>$325</td>
                      <td>James Nill</td>
                      <td>March 30, 2022</td>
                      <td className="actions">
                        <Button onClick={() => setSmShow(true)}><span class="icon-view"></span></Button>
                        <Button onClick={() => setLgShow(true)}><span class="icon-tick"></span></Button>
                        <Button><span class="icon-cross"></span></Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="item-id">12</td>
                      <td className="item-name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                      <td>.00 8 ETH</td>
                      <td>$265</td>
                      <td>James Nill</td>
                      <td>March 30, 2022</td>
                      <td className="actions">
                        <Button onClick={() => setSmShow(true)}><span class="icon-view"></span></Button>
                        <Button onClick={() => setLgShow(true)}><span class="icon-tick"></span></Button>
                        <Button><span class="icon-cross"></span></Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="item-id">12</td>
                      <td className="item-name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                      <td>.00 8 ETH</td>
                      <td>$567</td>
                      <td>James Nill</td>
                      <td>March 30, 2022</td>
                      <td className="actions">
                        <Button onClick={() => setSmShow(true)}><span class="icon-view"></span></Button>
                        <Button onClick={() => setLgShow(true)}><span class="icon-tick"></span></Button>
                        <Button><span class="icon-cross"></span></Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="item-id">12</td>
                      <td className="item-name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                      <td>.00 8 ETH</td>
                      <td>$212</td>
                      <td>James Nill</td>
                      <td>March 30, 2022</td>
                      <td className="actions">
                        <Button onClick={() => setSmShow(true)}><span class="icon-view"></span></Button>
                        <Button onClick={() => setLgShow(true)}><span class="icon-tick"></span></Button>
                        <Button><span class="icon-cross"></span></Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="item-id">12</td>
                      <td className="item-name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                      <td>.00 8 ETH</td>
                      <td>$899</td>
                      <td>James Nill</td>
                      <td>March 30, 2022</td>
                      <td className="actions">
                        <Button onClick={() => setSmShow(true)}><span class="icon-view"></span></Button>
                        <Button onClick={() => setLgShow(true)}><span class="icon-tick"></span></Button>
                        <Button><span class="icon-cross"></span></Button>
                      </td>
                    </tr>
                    
                  </tbody>
                </Table>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>


      {/* View Offer Popup */}
      <Modal  
        show={smShow}
        onHide={() => setSmShow(false)}
        size="sm" 
        className="actions-modal">
        <Modal.Header closeButton> </Modal.Header>
        <Modal.Body>
          <div className="nft-box mb-24">
            <div className="--img-box mb-16">
              <img src={nft1} className="fluid-img" alt="img4" />
            </div>
            <h5>token id 006</h5>
            <p>
              DEED ID: GO!0004-DIM-ENV0001-PARCEL006
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setSmShow(false)} className="btn-success"> Accept </Button>
          <Button variant="secondary" onClick={() => setSmShow(false)} className="btn-danger"> Reject </Button>
        </Modal.Footer>
      </Modal>

      {/* Confirmation Offer Popup */}
      <Modal 
        show={lgShow}
        onHide={() => setLgShow(false)}
        size="sm" className="actions-modal">
        <Modal.Header closeButton> </Modal.Header>
        <Modal.Body>
          <div className="ms-auto me-auto mb-24 ps-5 pe-5">
             <h2 className="clr-red mb-12">Confirm Request</h2>
             <p>Please confirm that you want to accept the offer from James Nill on ID 12 for .008 ETH, $265</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setLgShow(false)} className="btn-success"> Accept </Button>
          <Button variant="secondary" onClick={() => setLgShow(false)} className="btn-danger"> Reject </Button>
        </Modal.Footer>
      </Modal>
      </>
     );
    }
    
export default Offers;