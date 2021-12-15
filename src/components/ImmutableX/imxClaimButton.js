import { Link } from '@imtbl/imx-sdk';
import { useState, useContext } from 'react';
import axios from "axios";
import { linkAddress, baseURL, bypassCheckApi, bypassClaimApi, bypassConnect, bypassDisconnect } from './imxConfig'
import Button from "../common/button";
import { WalletContext, WalletContextProvider } from "../providers/walletContextProvider";

axios.defaults.baseURL = baseURL;

const ImxClaimButton = (props) => {
  const link = new Link(linkAddress);
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState("")
  const [showInventory, setshowInventory] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");

  const [walletDetails, setWalletDetails] = useContext(WalletContext);

  const updateWallet = (walletId) => {
    //Store the wallet details in the wallet context
    setWalletDetails({ walletId: walletId, walletIdString: walletId.substr(0, 5) + " ... " + walletId.substr(walletId.length - 5) });
    if (walletId.length > 10) {
      //Check if we can make a claim
      checkValidClaim(walletId);
    }
    else {
      clearWallet();
    }
  }

  const clearWallet = () => {
    setWalletDetails(prevState => ({ walletId: "", walletIdString: "", numClaimablePixelDegens: 0, claimablePixelDegens: "", claimPixelDegensMessage: "" }));
  }

  const clearPixelDegenClaimStatus = (claimPixelDegensMessage) => {
    setWalletDetails(prevState => ({
      ...prevState,
      numClaimablePixelDegens: 0,
      claimablePixelDegens: "",
      claimPixelDegensMessage: claimPixelDegensMessage
    }));
  }

  const setPixelDegenClaimStatus = (numClaimablePixelDegens, claimablePixelDegens, claimPixelDegensMessage) => {
    setWalletDetails(prevState => ({
      ...prevState,
      numClaimablePixelDegens: numClaimablePixelDegens,
      claimablePixelDegens: claimablePixelDegens,
      claimPixelDegensMessage: claimPixelDegensMessage
    }));
  }

  const setupAndLogin = async () => {
    try {
      setErrorMessage("");
      if (bypassConnect) {
        updateWallet("0xTESTTESTTESTTESTTESTTESTxf")
      }
      else {
        const { address } = await link.setup({});
        updateWallet(address)
      }
    }
    catch (err) {
      if (err.message != "Link Window Closed")
        setErrorMessage(err.message);
    }
  }

  const logout = () => {
    try {
      setErrorMessage("");
      clearWallet();
    }
    catch (err) {
      if (err.message != "Link Window Closed")
        setErrorMessage(err.message);
    }
  }

  const checkValidClaim = (walletId) => {
    try {
      setErrorMessage("");
      setLoading(true)
      setshowInventory(false);

      clearPixelDegenClaimStatus("Checking eligibility ...");

      if (bypassCheckApi) {

        //Already claimed
        //setPixelDegenClaimStatus(0, "", "Test airdropped already");
        //setshowInventory(true);
        //setLoading(false);

        //Eligable to claim
        setPixelDegenClaimStatus(2, "1111, 2222", "TEST TEST Claim your pixel degens");
        setshowInventory(true);
        setLoading(false);

        return;
      }

      axios.get('/transactions/check/' + walletId)
        .then((res) => {
          if (res.data.status != null && res.data.status == "Error") {
            if (res.data.message.includes("airdropped already")) {
              setshowInventory(true);
            }
            setPixelDegenClaimStatus(0, "", res.data.message);
            setLoading(false);
          }
          else if (res.data.tokens != null && res.data.tokens.length > 0) {
            onClaimAllowed(res.data.tokens);
          }
        })
        .catch(err => {
          setLoading(false);
          setPixelDegenClaimStatus(0, "", err.toString());
        })
    }
    catch (err) {
      if (err.message != "Link Window Closed")
        setErrorMessage(err.message);
    }
  }

  const onClaimAllowed = (tokenArray) => {
    var claimableTokens = tokenArray.length;
    var availTokens = tokenArray.join(", ");
    setPixelDegenClaimStatus(claimableTokens, availTokens, "");
    setLoading(false);
  }

  const claim = () => {
    try {
      setErrorMessage("");
      setLoading(true);
      setshowInventory(false);

      if (bypassClaimApi) {

        //Error
        //setPixelDegenClaimStatus(0, "", "TESTTESTTEST error message");
        //setLoading(false);

        //Claim Success
        onClaimSuccessful();

        return;
      }

      axios.get('/transactions/claim/' + walletDetails.walletId)
        .then((res) => {
          if (res.data.status != null && res.data.status == "Error") {
            setPixelDegenClaimStatus(0, "", res.data.message);
            setLoading(false);
          }
          else if (res.data.result != null && res.data.result.results != null) {
            //Claim completed - tell parent component there are no more claimable tokens
            onClaimSuccessful();
          }
        })
        .catch(err => {
          setLoading(false);
          setPixelDegenClaimStatus(0, "", err.toString());
        })
    }
    catch (err) {
      if (err.message != "Link Window Closed")
        setErrorMessage(err.message);
    }
  }

  const onClaimSuccessful = (walletString) => {
    setPixelDegenClaimStatus(0, "", "Congratulations!");
    setshowInventory(true);
    setLoading(false);
  }

  return (
    <div>
      {
        walletDetails.walletId ?
          walletDetails.numClaimablePixelDegens > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
              <div className="col-span-1 justify-center">
                <Button tailwind="w-44" title="Disconnect" onClickhandler={logout}></Button>
              </div>
              <div className="col-span-1 justify-center">
                <div className="mt-4 md:mt-0">
                  <Button tailwind="w-44" title="Claim" onClickhandler={claim}></Button>
                  <div>{response}</div>
                </div>
              </div>
            </div>
            :
            showInventory ?
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
                <div className="col-span-1 justify-center">
                  <Button tailwind="w-44" title="Disconnect" onClickhandler={logout}></Button>
                </div>
                <div className="col-span-1 justify-center">
                  <a href="https://market.x.immutable.com/inventory" target="__blank">
                    <Button tailwind="w-44" title="Inventory" />
                  </a>
                </div>
              </div>
              :
              <div className="grid grid-cols-1 gap-y-2 gap-x-8">
                <div className="col-span-1 justify-center">
                  <Button tailwind="w-44" title="Disconnect" onClickhandler={logout}></Button>
                </div>
              </div>
          :
          <div className="flex flex-col items-center justify-center">
            <Button tailwind="w-44 sm:w-72 text-xs" title="Connect Wallet" onClickhandler={setupAndLogin}></Button>
            <p className="text-white text-xs f-f-r justify-center mt-4">{errorMessage}</p>
          </div>
      }
    </div>
  );
}

export default ImxClaimButton;
