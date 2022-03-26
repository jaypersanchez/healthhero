import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const getLibrary = (provider) => {
  return new Web3(provider);
};

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
      <ToastContainer />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
