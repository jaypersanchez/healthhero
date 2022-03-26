/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
import React from "react";
import {useWeb3React} from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import Web3 from "web3";
//import ethers from "ethers";
import "bootstrap/dist/css/bootstrap.min.css";
import useMetaMaskConnect from "./useMetaMask";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import {CreatureAccessory} from "../../abi/CreatureAccessory.js"
import {CreatureAccessoryFactory} from "../../abi/CreatureAccessoryFactory.js";
import {StaticStorage} from "../../abi/StaticStorage.js";
import {PhysicalStorage} from "../../abi/PhysicalStorage.js";
import env from "react-dotenv";


import {
    useChainId,
    getContract,
    CHAIN_ID,
    getWeb3,
    connect,
    disconnect
} from "../../utils/Helpers.js";

// images
import nft1 from "../../assets/images/nft-1.png";
import nft2 from "../../assets/images/nft-2.png";
import {ConnectButton} from "./styled";


const propTypes = {
    onCloseNftView: PropTypes.func,
};

// eslint-disable-next-line
function getParsedData(web3, allInfos) {
    let parsedInfos = []
    for (let info of allInfos) {
        let item = {}
        item['xPos'] = parseInt(info.xPos);
        item['yPos'] = parseInt(info.yPos);
        item['id'] = parseInt(info.id);
        item['name'] = web3.utils.toAscii(info.name);
        item['image'] = web3.utils.toAscii(info.image);
        parsedInfos.push(item)
    }
    return parsedInfos
}

function NFT({onCloseNftView = () => null, img, xPos, yPos, name, setList}) {
    
    const {chainId, active, account, activate, connector, deactivate} = useWeb3React()

    useEffect(() => {
        getBalanceOf()
    }, [])

    const connectWallet = async () => {
        connect(activate)
        console.log("active", active)
    }

    const disConnectWallet = async () => {
        disconnect(deactivate)
    }

    const getBalanceOf = async () => {
        try {

            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.getAccounts();
            const creatureAccessoryFactoryToken = new web3.eth.Contract(CreatureAccessoryFactory, getContract(CHAIN_ID, "CreatureAccessoryFactory"));
            const tokenIds = await creatureAccessoryFactoryToken.methods.getTokenIds().call()
            const mintData = await creatureAccessoryFactoryToken.methods.getMintedData().call()
            const mintDataList = []
            for (let i = 0; i < mintData.length; i++) {
                mintDataList.push(JSON.parse(web3.utils.toAscii(mintData[i])))
            }
            setList(mintDataList)
            const creatureAccessoryToken = new web3.eth.Contract(CreatureAccessory, getContract(CHAIN_ID, "CreatureAccessory"));
            const balanceOf = await creatureAccessoryToken.methods.balanceOf(accounts[0], 2).call()
        } catch (e) {
            console.log("e: ", e.toString())
        }
    }

    const canMint = async () => {
        try {
            const web3 = new Web3(window.ethereum);
            const creatureAccessoryFactoryToken = new web3.eth.Contract(CreatureAccessoryFactory, getContract(CHAIN_ID, "CreatureAccessoryFactory"));
            let canmint = await creatureAccessoryFactoryToken.methods.canMint(7, 1);
            console.log(`can mint? ${Boolean(canmint).toString()}`);
        }
        catch (e) {
            console.log("e: ", e.toString())
        }
    }


    const stringToBytes = async (value) => {
            // Otherwise, fall back to 7-bit ASCII only
            var result = new Uint8Array(value.length);
            for (var i=0; i<value.length; i++){
                result[i] = value.charCodeAt(i);/* w ww. ja  v  a 2s . co  m*/
            }
            return result;
    }

    const mintToken = async () => {
        try {
                const web3 = createAlchemyWeb3(env.ALCHEMY_URL);
                const metaData = JSON.stringify({x: xPos, y: yPos, name: name, image: img})
                const hexMetaData = web3.utils.asciiToHex(metaData);
                const chainIdHex = web3.utils.toHex(CHAIN_ID)
                const accounts = await web3.eth.getAccounts();
                const acctaddress = accounts[0];
                const creatureAccessoryFactoryToken = new web3.eth.Contract(CreatureAccessoryFactory, env.POLYGON_TEST_CREATUREACCESSORYFACTORY);
                const tokenIds = await creatureAccessoryFactoryToken.methods.getTokenIds().call()
                console.log("tokenIds: ", tokenIds)
                var max = tokenIds.reduce(function(a, b) {
                    return Math.max(parseInt(a), parseInt(b));
                });
                console.log(`Params 7 :: ${env.POLYGON_TEST_CREATUREACCESSORYFACTORY} :: 1 :: ${img} :: ${hexMetaData} :: ${acctaddress}`);
                let txn = await creatureAccessoryFactoryToken.methods.mint(max + 1, acctaddress, 1, img, hexMetaData).send({
                                                                            from: acctaddress,
                                                                            gas: 2000000,
                                                                        }
                                                                    )
                console.log(`txn ${JSON.stringify(txn)}`)
        } catch (e) {
            console.log("e: ", e.toString())
        }
    }

   

    if (!active) {

        return (
            <>
                <div id="nft-view" className="nft-view position-relative">
                    {/* mint card */}
                    <div className="mint-card">
                        <button className="close-btn-nft" onClick={onCloseNftView}>
                            <span className="icon-NFT-cross"></span>
                            Close
                        </button>
                        <img src={img || nft1} alt="img4" className="img-fluid mt-4"/>
                        <h5 className="clr-blue mb-3 mt-16">token id 0003</h5>
                        <h2 className="clr-red mb-3">
                            {name || 'Go!Bot'}
                        </h2>
                        <p>This NFT hasn't been claimed yet so click mint to buy it now!</p>

                        <button className="btn-large btn-blue mb-24" onClick={() => mintToken()}>
                            Mint Token
                        </button>

                        {/* <div className='flex flex-row items-center justify-center w-full m-4'>
                            <button
                            onClick={connectWallet}
                            className='py-2 text-sm font-bold text-white rounded-lg w-40 bg-primary hover:bg-primarydarkdark'
                            >
                            Connect to MetaMask
                            </button>
                            <div className='p-2'>
                            {active ? (
                                <span>
                                Connected with <b>{account}</b>
                                </span>
                            ) : (
                                <span>Not connected</span>
                            )}
                            </div>
                            <button
                            onClick={disconnect}
                            className='py-2 text-sm font-bold text-white rounded-lg w-40 bg-primary hover:bg-primarydarkdark'
                            >
                            Disconnect
                            </button>
                        </div> */}
                        {active}
                        {active ? (
                            <button disabled className="badge-btn badge-btn-green mb-24">
                                <span className="icon-success"></span>
                                Your Account is Connected
                            </button>
                        ) : (
                            <ConnectButton
                                href="#"
                                className="badge-btn mb-24"
                                onClick={connectWallet}
                            >
                                <span className="icon-info"></span>
                                Connect Account to Get Started!
                            </ConnectButton>
                        )}

                        <div className="c-box -social">
                            <p>Share with your friends and followers </p>
                            <ul>
                                <li>
                                    <a href="#" target="_blank">
                  <span className="icon-twitter-fill">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                  <span className="icon-whatsapp-fill">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                  </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                  <span className="icon-facebook-fill">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                  <span className="icon-email-fill">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Mint Token */}
                    <div className="mint-card d-none">
                        <h5 className="clr-white d-flex align-items-center mb-16">
                            <span className="icon-arrow mr-3"></span>
                            BACK
                        </h5>
                        <h2 className="clr-red mb-3"> 003</h2>
                        <p>Minting 1 Token for 0.08 ETH </p>

                        <div className="t-price mb-16">
                            <p className="fs-12 mb-1">Current Token price:</p>
                            <h3>
              <span className="icon-Ethereum">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
                <span className="path4"></span>
                <span className="path5"></span>
                <span className="path6"></span>
                <span className="path7"></span>
              </span>
                                0.08 ($253.66)
                            </h3>
                        </div>
                        <div className="t-price mb-16">
                            <p className="fs-12 mb-1">Connected Account Balance:</p>
                            <h3>
              <span className="icon-Ethereum">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
                <span className="path4"></span>
                <span className="path5"></span>
                <span className="path6"></span>
                <span className="path7"></span>
              </span>
                                0.0000 ($0)
                            </h3>
                        </div>
                        <a href="#" className="btn-large btn-blue mb-24">
                            Confirm Checkout
                        </a>
                        <a href="#" className="badge-btn badge-btn-green mb-24">
                            <span className="icon-check"></span>
                            Your Account is Connected
                        </a>

                        <div className="d-flex clr-yellow mb-24 fs-14">
                            <span className="icon-info me-2 clr-yellow"></span>
                            You do not have enough ETH in your connected wallet. Please add some
                            funds, refresh and try again.
                        </div>
                    </div>

                    {/* Transaction Request */}
                    <div className="mint-card d-none">
                        <h5 className="clr-white d-flex align-items-center mb-16">
                            <span className="icon-arrow mr-3"></span>
                            BACK
                        </h5>
                        <h2 className="clr-red mb-3">Transaction Request</h2>
                        <p>
                            Please confirm that you want to mint the selected Go!bot parcel.
                        </p>

                        <a href="#" className="btn-large btn-blue mb-24">
                            Confirm
                        </a>
                        <a href="#" className="badge-btn badge-btn-green mb-24">
                            <span className="icon-check"></span>
                            Your Account is Connected
                        </a>
                    </div>

                    {/* Congratulations! */}
                    <div className="mint-card mint-success d-none">
                        <span className="icon-check icon-check-success mb-12"></span>
                        <h2 className="clr-red mb-3">Congratulations!</h2>
                        <p>
                            Your payment is completed. You have successfully minted the Go!Bot
                            parcel.
                        </p>
                        <ul>
                            <li>
                                {" "}
                                <span>Order No</span> <strong>#12</strong>{" "}
                            </li>
                            <li>
                                {" "}
                                <span>Date</span> <strong>13 Jan 2022</strong>{" "}
                            </li>
                            <li>
                                {" "}
                                <span>Time</span> <strong>12:34 pm</strong>{" "}
                            </li>
                            <li>
                                {" "}
                                <span>Total in ETH</span> <strong>0.08 ETH</strong>{" "}
                            </li>
                            <li>
                                {" "}
                                <span>Total in $</span> <strong>$253.66</strong>{" "}
                            </li>
                        </ul>
                        <a href="#" className="btn-large btn-blue mb-24">
                            View You Go!Bot
                        </a>
                        <a href="#" className="badge-btn badge-btn-green mb-24">
                            <span className="icon-check"></span>
                            Your Account is Connected
                        </a>
                    </div>

                    {/* Make and Offer */}

                    {/* mint card */}
                    <div className="mint-card d-none">
                        <button className="close-btn-nft">
                            <span className="icon-NFT-cross"></span>
                            Close
                        </button>
                        <img src={nft2} alt="img4" className="img-fluid"/>
                        <h5 className="clr-blue mb-3 mt-16">token id 0641</h5>
                        <h2 className="clr-red mb-3">DEED ID: GO!0641-DIM-PH065-PARCEL01</h2>
                        <p>
                            This parcel of Health Hero City land is sold. You can always make an
                            offer on this parcel or select another parcel that is currently
                            available for minting.
                        </p>

                        <a href="#" className="btn-large btn-blue mb-24 mt-16">
                            Make an Offer
                        </a>
                        <a href="#" className="badge-btn badge-btn-green mb-24">
                            <span className="icon-check"></span>
                            Your Account is Connected
                        </a>
                    </div>

                    {/* Confirm Offer */}
                    <div className="mint-card d-none">
                        <h5 className="clr-white d-flex align-items-center mb-16">
                            <span className="icon-arrow mr-3"></span>
                            BACK
                        </h5>
                        <h2 className="clr-red mb-3">OFFER ON ID 01</h2>
                        <p>Owner: Jeff Nielson </p>

                        <div className="t-price mb-16">
                            <p className="fs-12 mb-1">Current Token price:</p>
                            <h3>
              <span className="icon-Ethereum">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
                <span className="path4"></span>
                <span className="path5"></span>
                <span className="path6"></span>
                <span className="path7"></span>
              </span>
                                0.08 ($253.66)
                            </h3>
                        </div>
                        <div className="t-price mb-16">
                            <p className="fs-12 mb-10">You Offer:</p>
                            <h3 className="enter-amount d-flex">
              <span className="icon-Ethereum">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
                <span className="path4"></span>
                <span className="path5"></span>
                <span className="path6"></span>
                <span className="path7"></span>
              </span>
                                <input
                                    value="0.085 ($270.50)"
                                    type="text"
                                    className="input-icon"
                                />
                            </h3>
                        </div>
                        <a href="#" className="btn-large btn-blue mb-24">
                            Confirm Offer
                        </a>
                        <a href="#" className="badge-btn badge-btn-green mb-24">
                            <span className="icon-check"></span>
                            Your Account is Connected
                        </a>
                    </div>

                    {/* Confirmation */}
                    <div className="mint-card d-none">
                        <h5 className="clr-white d-flex align-items-center mb-16">
                            <span className="icon-arrow mr-3"></span>
                            BACK
                        </h5>
                        <h2 className="clr-red mb-3">Offer Request</h2>
                        <p>
                            Please confirm that you want to make an offer on the ID 01 Go! Bot.
                        </p>

                        <a href="#" className="btn-large btn-blue mb-24">
                            Confirm
                        </a>
                        <a href="#" className="badge-btn badge-btn-green mb-24">
                            <span className="icon-check"></span>
                            Your Account is Connected
                        </a>
                    </div>

                    {/* Offer Sent!! */}
                    <div className="mint-card mint-success d-none">
                        <span className="icon-check icon-check-success mb-12"></span>
                        <h2 className="clr-red mb-3">Offer Sent!</h2>
                        <p>Your Offer has been sent successfully.</p>
                        <ul>
                            <li>
                                {" "}
                                <span>Order No</span> <strong>#12</strong>{" "}
                            </li>
                            <li>
                                <span>Date</span> <strong>13 Jan 2022</strong>{" "}
                            </li>
                            <li>
                                <span>Time</span> <strong>12:34 pm</strong>{" "}
                            </li>
                            <li>
                                <span>Total in ETH</span> <strong>0.08 ETH</strong>{" "}
                            </li>
                            <li>
                                <span>Total in $</span> <strong>$253.66</strong>{" "}
                            </li>
                        </ul>
                        <a href="#" className="btn-large btn-blue mb-24">
                            View All Your Offers
                        </a>
                        <a href="#" className="badge-btn badge-btn-green mb-24">
                            <span className="icon-check"></span>
                            Your Account is Connected
                        </a>
                    </div>
                </div>
            </>
        );
    } else if (active && chainId == CHAIN_ID){

        console.log("active", active)
        console.log("chainId", chainId)

        return (
            <>
                <div id="nft-view" className="nft-view position-relative">
                    {/* mint card */}
                    <div className="mint-card">
                        <button className="close-btn-nft" onClick={onCloseNftView}>
                            <span className="icon-NFT-cross"></span>
                            Close
                        </button>
                        <img src={img || nft1} alt="img4" className="img-fluid mt-4"/>
                        <h5 className="clr-blue mb-3 mt-16">token id 0003</h5>
                        <h2 className="clr-red mb-3">
                            {name || 'Go!Bot'}
                        </h2>
                        <p>This NFT hasn't been claimed yet so click mint to buy it now!</p>

                        <button className="btn-large btn-blue mb-24" onClick={() => mintToken()}>
                            Mint Token
                        </button>
                        {active ? (
                            <button disabled className="badge-btn badge-btn-green mb-24">
                                <span className="icon-success"></span>
                                Your Account is Connected
                            </button>
                        ) : (
                            <ConnectButton
                                href="#"
                                className="badge-btn mb-24"
                            >
                                <span className="icon-info"></span>
                                Connect Account to Get Started!
                            </ConnectButton>
                        )}

                        <div className="c-box -social">
                            <p>Share with your friends and followers </p>
                            <ul>
                                <li>
                                    <a href="#" target="_blank">
                  <span className="icon-twitter-fill">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                  <span className="icon-whatsapp-fill">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                  </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                  <span className="icon-facebook-fill">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                  <span className="icon-email-fill">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Mint Token */}
                    <div className="mint-card d-none">
                        <h5 className="clr-white d-flex align-items-center mb-16">
                            <span className="icon-arrow mr-3"></span>
                            BACK
                        </h5>
                        <h2 className="clr-red mb-3">MINT TOKEN 003</h2>
                        <p>Minting 1 Token for 0.08 ETH </p>

                        <div className="t-price mb-16">
                            <p className="fs-12 mb-1">Current Token price:</p>
                            <h3>
              <span className="icon-Ethereum">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
                <span className="path4"></span>
                <span className="path5"></span>
                <span className="path6"></span>
                <span className="path7"></span>
              </span>
                                0.08 ($253.66)
                            </h3>
                        </div>
                        <div className="t-price mb-16">
                            <p className="fs-12 mb-1">Connected Account Balance:</p>
                            <h3>
              <span className="icon-Ethereum">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
                <span className="path4"></span>
                <span className="path5"></span>
                <span className="path6"></span>
                <span className="path7"></span>
              </span>
                                0.0000 ($0)
                            </h3>
                        </div>
                        <a href="#" className="btn-large btn-blue mb-24">
                            Confirm Checkout
                        </a>
                        <a href="#" className="badge-btn badge-btn-green mb-24">
                            <span className="icon-check"></span>
                            Your Account is Connected
                        </a>

                        <div className="d-flex clr-yellow mb-24 fs-14">
                            <span className="icon-info me-2 clr-yellow"></span>
                            You do not have enough ETH in your connected wallet. Please add some
                            funds, refresh and try again.
                        </div>
                    </div>

                    {/* Transaction Request */}
                    <div className="mint-card d-none">
                        <h5 className="clr-white d-flex align-items-center mb-16">
                            <span className="icon-arrow mr-3"></span>
                            BACK
                        </h5>
                        <h2 className="clr-red mb-3">Transaction Request</h2>
                        <p>
                            Please confirm that you want to mint the selected Go!bot parcel.
                        </p>

                        <a href="#" className="btn-large btn-blue mb-24">
                            Confirm
                        </a>
                        <a href="#" className="badge-btn badge-btn-green mb-24">
                            <span className="icon-check"></span>
                            Your Account is Connected
                        </a>
                    </div>

                    {/* Congratulations! */}
                    <div className="mint-card mint-success d-none">
                        <span className="icon-check icon-check-success mb-12"></span>
                        <h2 className="clr-red mb-3">Congratulations!</h2>
                        <p>
                            Your payment is completed. You have successfully minted the Go!Bot
                            parcel.
                        </p>
                        <ul>
                            <li>
                                {" "}
                                <span>Order No</span> <strong>#12</strong>{" "}
                            </li>
                            <li>
                                {" "}
                                <span>Date</span> <strong>13 Jan 2022</strong>{" "}
                            </li>
                            <li>
                                {" "}
                                <span>Time</span> <strong>12:34 pm</strong>{" "}
                            </li>
                            <li>
                                {" "}
                                <span>Total in ETH</span> <strong>0.08 ETH</strong>{" "}
                            </li>
                            <li>
                                {" "}
                                <span>Total in $</span> <strong>$253.66</strong>{" "}
                            </li>
                        </ul>
                        <a href="#" className="btn-large btn-blue mb-24">
                            View You Go!Bot
                        </a>
                        <a href="#" className="badge-btn badge-btn-green mb-24">
                            <span className="icon-check"></span>
                            Your Account is Connected
                        </a>
                    </div>

                    {/* Make and Offer */}

                    {/* mint card */}
                    <div className="mint-card d-none">
                        <button className="close-btn-nft">
                            <span className="icon-NFT-cross"></span>
                            Close
                        </button>
                        <img src={nft2} alt="img4" className="img-fluid"/>
                        <h5 className="clr-blue mb-3 mt-16">token id 0641</h5>
                        <h2 className="clr-red mb-3">DEED ID: GO!0641-DIM-PH065-PARCEL01</h2>
                        <p>
                            This parcel of Health Hero City land is sold. You can always make an
                            offer on this parcel or select another parcel that is currently
                            available for minting.
                        </p>

                        <a href="#" className="btn-large btn-blue mb-24 mt-16">
                            Make an Offer
                        </a>
                        <a href="#" className="badge-btn badge-btn-green mb-24">
                            <span className="icon-check"></span>
                            Your Account is Connected
                        </a>
                    </div>

                    {/* Confirm Offer */}
                    <div className="mint-card d-none">
                        <h5 className="clr-white d-flex align-items-center mb-16">
                            <span className="icon-arrow mr-3"></span>
                            BACK
                        </h5>
                        <h2 className="clr-red mb-3">OFFER ON ID 01</h2>
                        <p>Owner: Jeff Nielson </p>

                        <div className="t-price mb-16">
                            <p className="fs-12 mb-1">Current Token price:</p>
                            <h3>
              <span className="icon-Ethereum">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
                <span className="path4"></span>
                <span className="path5"></span>
                <span className="path6"></span>
                <span className="path7"></span>
              </span>
                                0.08 ($253.66)
                            </h3>
                        </div>
                        <div className="t-price mb-16">
                            <p className="fs-12 mb-10">You Offer:</p>
                            <h3 className="enter-amount d-flex">
              <span className="icon-Ethereum">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
                <span className="path4"></span>
                <span className="path5"></span>
                <span className="path6"></span>
                <span className="path7"></span>
              </span>
                                <input
                                    value="0.085 ($270.50)"
                                    type="text"
                                    className="input-icon"
                                />
                            </h3>
                        </div>
                        <a href="#" className="btn-large btn-blue mb-24">
                            Confirm Offer
                        </a>
                        <a href="#" className="badge-btn badge-btn-green mb-24">
                            <span className="icon-check"></span>
                            Your Account is Connected
                        </a>
                    </div>

                    {/* Confirmation */}
                    <div className="mint-card d-none">
                        <h5 className="clr-white d-flex align-items-center mb-16">
                            <span className="icon-arrow mr-3"></span>
                            BACK
                        </h5>
                        <h2 className="clr-red mb-3">Offer Request</h2>
                        <p>
                            Please confirm that you want to make an offer on the ID 01 Go! Bot.
                        </p>

                        <a href="#" className="btn-large btn-blue mb-24">
                            Confirm
                        </a>
                        <a href="#" className="badge-btn badge-btn-green mb-24">
                            <span className="icon-check"></span>
                            Your Account is Connected
                        </a>
                    </div>

                    {/* Offer Sent!! */}
                    <div className="mint-card mint-success d-none">
                        <span className="icon-check icon-check-success mb-12"></span>
                        <h2 className="clr-red mb-3">Offer Sent!</h2>
                        <p>Your Offer has been sent successfully.</p>
                        <ul>
                            <li>
                                {" "}
                                <span>Order No</span> <strong>#12</strong>{" "}
                            </li>
                            <li>
                                {" "}
                                <span>Date</span> <strong>13 Jan 2022</strong>{" "}
                            </li>
                            <li>
                                {" "}
                                <span>Time</span> <strong>12:34 pm</strong>{" "}
                            </li>
                            <li>
                                {" "}
                                <span>Total in ETH</span> <strong>0.08 ETH</strong>{" "}
                            </li>
                            <li>
                                {" "}
                                <span>Total in $</span> <strong>$253.66</strong>{" "}
                            </li>
                        </ul>
                        <a href="#" className="btn-large btn-blue mb-24">
                            View All Your Offers
                        </a>
                        <a href="#" className="badge-btn badge-btn-green mb-24">
                            <span className="icon-check"></span>
                            Your Account is Connected
                        </a>
                    </div>
                </div>
            </>
        );
    }

}

NFT.propTypes = propTypes;

export default NFT;
