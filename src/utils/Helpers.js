import React, { useState, useRef, useEffect } from 'react'
import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import Web3 from "web3";
import { toast } from 'react-toastify';
import env from 'react-dotenv';
const SELECTED_NETWORK_LOCAL_STORAGE_KEY = 'SELECTED_NETWORK'
const web3 = new Web3(window.ethereum);
export const POLYGON = env.POLYGON_CHAINID;
export const POLYGON_TESTNET = env.POLYGON_TESTNET_CHAINID;
export const DEFAULT_CHAIN_ID = POLYGON_TESTNET
export const CHAIN_ID = DEFAULT_CHAIN_ID


const NETWORK_METADATA = {
    [POLYGON]: {
        chainId: '0x' + POLYGON.toString(16),
        chainName: 'MATIC MAINNET',
        nativeCurrency: {
            name: 'MATIC',
            symbol: 'MATIC',
            decimals: 18
        },
        rpcUrls: [env.MAINNET_RPCURL_POLYGON],
        blockExplorerUrls: [env.MAINNET_BLOCKEXPLORER],

    },
    [POLYGON_TESTNET]: {
        chainId: '0x' + POLYGON_TESTNET.toString(16),
        chainName: "MATIC TESTNET",
        nativeCurrency: {
            name: 'MATIC',
            symbol: 'MATIC',
            decimals: 18
        },
        rpcUrls: [env.TESTNET_RPCURL_POLYGON],
        blockExplorerUrls: [env.TESTNET_BLOCKEXPLORER],
    },
}

const CHAIN_NAMES_MAP = {
    [POLYGON]: "Polygon Mainnet",
    [POLYGON_TESTNET]: "Polygon Testnet",
}

const RPC_DATA = {
    [POLYGON]: env.MAINNET_BLOCKEXPLORER,
    [POLYGON_TESTNET]: env.TESTNET_RPCURL_POLYGON
}
const CONTRACTS = {
    [POLYGON]: {
        CreatureAccessoryFactory: env.POLYGON_MAINNET_CREATUREACCESSFACTORY,
        CreatureAccessory: env.POLYGON_MAINNET_CREATUREACCESSORY,
        StaticStorage: env.POLYGON_MAINNET_STATICSTORAGE,
        PhysicalStorage: env.POLYGON_MAINNET_PHYSICALSTORAGE
    },
    [POLYGON_TESTNET]: {
        CreatureAccessoryFactory: env.POLYGON_TEST_CREATUREACCESSORYFACTORY,
        CreatureAccessory: env.POLYGON_TEST_CREATUREACCESSORY,
        StaticStorage: env.POLYGON_TEST_STATICSTORAGE,
        PhysicalStorage: env.POLYGON_TEST_PHYSICALSTORAGE
    }
}

export function getChainName(chainId) {
    return CHAIN_NAMES_MAP[chainId]
}
export const helperToast = {
    success: (content) => {
        toast.dismiss()
        toast.success(content)
    },
    error: (content) => {
        toast.dismiss()
        toast.error(content)
    }
}

export const addNetwork = async (metadata) => {
    await window.ethereum.request({ method: 'wallet_addEthereumChain', params: [metadata] }).catch()
}

const supportedChainIds = [
    DEFAULT_CHAIN_ID
];

const injected = new InjectedConnector({
    supportedChainIds
})

export function getInjectedConnector() {
    return injected
}

export function useChainId() {
    let { chainId } = useWeb3React()

    if (!chainId) {
        const chainIdFromLocalStorage = localStorage.getItem(SELECTED_NETWORK_LOCAL_STORAGE_KEY)
        if (chainIdFromLocalStorage) {
            chainId = parseInt(chainIdFromLocalStorage)
            if (!chainId) {
                // localstorage value is invalid
                localStorage.removeItem(SELECTED_NETWORK_LOCAL_STORAGE_KEY)
            }
        }
    }

    if (!chainId || !supportedChainIds.includes(chainId)) {
        chainId = CHAIN_ID
    }
    return { chainId }
}

export const getConnectWalletHandler = (activate) => {
    console.log("activate", activate)
    console.log(`Default Network ${DEFAULT_CHAIN_ID}`)
    console.log("getInjectedConnector(): ", getInjectedConnector())
    const fn = async () => {
        activate(getInjectedConnector(), (e) => {
            if (e.message.includes("No Ethereum provider")) {
                helperToast.error(<div>
                    Could not find a wallet to connect to.<br/>
                    <a href="https://metamask.io" target="_blank" rel="noopener noreferrer">Add a wallet</a> to start using the app.
                </div>)
                return
            }
            if (e instanceof UnsupportedChainIdError) {
                helperToast.error(
                <div>
                    <div>Your wallet is not connected to {getChainName(DEFAULT_CHAIN_ID)}.</div><br/>
                    <div className="clickable underline margin-bottom" onClick={() => switchNetwork(DEFAULT_CHAIN_ID)}>
                        Switch to {getChainName(DEFAULT_CHAIN_ID)}
                    </div>
                    <div className="clickable underline" onClick={() => switchNetwork(DEFAULT_CHAIN_ID)}>
                        Add {getChainName(DEFAULT_CHAIN_ID)}
                    </div>
                </div>)
                return
            }
            helperToast.error(e.toString())
        })
    }
    return fn
}


export const switchNetwork = async (chainId) => {
    try {
        
        const chainIdHex = web3.utils.toHex(chainId) //'0x' + chainId.toString(16)
        console.log(`switchNetwork ${chainId} ${chainIdHex}`)
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: chainIdHex }]
        })
        helperToast.success("Wallet connected!")
    } catch (ex) {
        // https://docs.metamask.io/guide/rpc-api.html#other-rpc-methods
        // This error code indicates that the chain has not been added to MetaMask.
        if (ex.code === 4902) {
            return await addNetwork(NETWORK_METADATA[chainId])
        }

        console.error(ex)
    }
}

export function getContract(chainId, label) {
    if (!CONTRACTS[chainId]) {
        throw new Error(`Incorrect chainId ${chainId}`);
    }
    if (!CONTRACTS[chainId][label]) {
        throw new Error(`Incorrect label "${label}" for chainId ${chainId}`);
    }
    return CONTRACTS[chainId][label]
}

export function getRPCUrl(chainId){
    return RPC_DATA[chainId];
}

export const getWeb3 = () => {
    return new Promise((resolve, reject) => {
        // Wait for loading completion to avoid race conditions with web3 injection timing.
        window.addEventListener("load", async () => {
            // Modern dapp browsers...
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                try {
                    // Request account access if needed
                    await window.ethereum.enable();
                    // Acccounts now exposed
                    resolve(web3);
                } catch (error) {
                    reject(error);
                }
            }
            // Legacy dapp browsers...
            else if (window.web3) {
                // Use Mist/MetaMask's provider.
                const web3 = window.web3;
                console.log("Injected web3 detected.");
                resolve(web3);
            }
            // Fallback to localhost; use dev console port by default...
            else {
                const provider = new Web3.providers.HttpProvider(
                    "http://localhost:9545"
                );
                const web3 = new Web3(provider);
                console.log("No web3 instance injected, using Local web3.");
                resolve(web3);
            }
        });
    });
};