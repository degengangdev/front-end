import { Link } from '@imtbl/imx-sdk';
import { useState, useContext } from 'react';
import axios from "axios";
import { linkAddress, baseURL, bypassCheckApi, bypassClaimApi } from './imxConfig'
import Button from "../common/button";
import CountDownTimer from '../common/countDown'
import { WalletContext } from "../providers/walletContextProvider";

axios.defaults.baseURL = baseURL;

const ImxClaimButton = (props) => {
  const link = new Link(linkAddress);
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState("")
  const [showInventory, setshowInventory] = useState(false)
  const [claimsArePublic, setClaimsArePublic] = useState(false)
  //Used to display any unexpected error messages
  const [errorMessage, setErrorMessage] = useState("");

  const [walletDetails, setWalletDetails] = useContext(WalletContext);

  const activationDate = new Date("2021-11-26T17:00Z");

  const updateWallet = (walletId) => {
    var walletString = "";
    //Store the wallet details in the wallet context
    setWalletDetails(prevState => ({
      ...prevState,
      walletId: walletId,
      walletIdString: walletId.substr(0, 5) + " ... " + walletId.substr(walletId.length - 5)
    }));
    if (walletId.length > 10) {
      //Check if we can make a claim
      checkValidClaim(walletId);
    }
    else {
      setWalletDetails(prevState => ({
        ...prevState,
        numClaimablePixelDegens: 0,
        claimablePixelDegens: "",
        claimPixelDegensMessage: ""
      }));
    }
  }

  const setupAndLogin = async () => {
    try {
      setErrorMessage("");
      const { address } = await link.setup({});
      updateWallet(address)
    }
    catch (err) {
      if (err.message != "Link Window Closed")
        setErrorMessage(err.message);
    }
  }

  const logout = () => {
    try {
      setErrorMessage("");
      updateWallet("")
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

      setWalletDetails(prevState => ({
        ...prevState,
        numClaimablePixelDegens: 0,
        claimablePixelDegens: "",
        claimPixelDegensMessage: "Checking eligibility ..."
      }));

      if (bypassCheckApi) {
        setWalletDetails(prevState => ({
          ...prevState,
          numClaimablePixelDegens: 0,
          claimablePixelDegens: "",
          claimPixelDegensMessage: "Test airdropped already"
        }));
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
            setWalletDetails(prevState => ({
              ...prevState,
              numClaimablePixelDegens: 0,
              claimablePixelDegens: "",
              claimPixelDegensMessage: res.data.message
            }));
            setLoading(false);
          }
          else if (res.data.tokens != null && res.data.tokens.length > 0) {
            onClaimAllowed(res.data.tokens);
          }
        })
        .catch(err => {
          setLoading(false);
          setWalletDetails(prevState => ({
            ...prevState,
            numClaimablePixelDegens: 0,
            claimablePixelDegens: "",
            claimPixelDegensMessage: err.toString()
          }));
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
    setWalletDetails(prevState => ({
      ...prevState,
      canClaimPixelDegens: claimableTokens,
      claimablePixelDegens: availTokens,
      claimPixelDegensMessage: ""
    }));
    setLoading(false);
  }

  const claim = () => {
    try {
      setErrorMessage("");
      setLoading(true);
      setshowInventory(false);

      if (bypassClaimApi) {
        setWalletDetails(prevState => ({
          ...prevState,
          canClaimPixelDegens: 0,
          claimablePixelDegens: "",
          claimPixelDegensMessage: "Test error message"
        }));
        setLoading(false);
        return;
      }

      axios.get('/transactions/claim/' + walletDetails.walletId)
        .then((res) => {
          if (res.data.status != null && res.data.status == "Error") {
            setWalletDetails(prevState => ({
              ...prevState,
              canClaimPixelDegens: 0,
              claimablePixelDegens: "",
              claimPixelDegensMessage: res.data.message
            }));
            setLoading(false);
          }
          else if (res.data.result != null && res.data.result.results != null) {
            //Claim completed - tell parent component there are no more claimable tokens
            onClaimSuccessful();
          }
        })
        .catch(err => {
          setLoading(false);
          setWalletDetails(prevState => ({
            ...prevState,
            canClaimPixelDegens: 0,
            claimablePixelDegens: "",
            claimPixelDegensMessage: err.toString()
          }));

        })
    }
    catch (err) {
      if (err.message != "Link Window Closed")
        setErrorMessage(err.message);
    }
  }

  const onClaimSuccessful = (walletString) => {
    setWalletDetails(prevState => ({
      ...prevState,
      canClaimPixelDegens: 0,
      claimablePixelDegens: "",
      claimPixelDegensMessage: "Congratulations!"
    }));

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
                <Button tailwind="w-56" title="Disconnect" onClickhandler={logout}></Button>
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
                  <Button tailwind="w-56" title="Disconnect" onClickhandler={logout}></Button>
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
                  <Button tailwind="w-56" title="Disconnect" onClickhandler={logout}></Button>
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
