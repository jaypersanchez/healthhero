import { useEffect } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { toast } from "react-toastify";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

function getErrorMessage(error) {
    console.log("errorInstance", error instanceof NoEthereumProviderError);
  if (error instanceof NoEthereumProviderError) {
    return toast.error("No Metamask Extension Installed");
  } else if (error instanceof UnsupportedChainIdError) {
    return toast.error("Unsupported Ethereum Network");
  } else if (error instanceof UserRejectedRequestErrorInjected) {
    return toast.error("Connection is rejected");
  } else {
    return toast.error("Something Went Wrong");
  }
}

function useMetaMaskConnect() {
  const context = useWeb3React();
  const { account, activate, active, error } = context;

  useEffect(() => {
    
    if (error) {
      getErrorMessage(error);
    }
  }, [error]);

  const activateMetaMask = () => {
    activate(injected);
  };

  return { account, active, activateMetaMask };
}

export default useMetaMaskConnect;
