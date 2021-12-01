import { Link } from '@imtbl/imx-sdk';
import { useState } from 'react';
import axios from "axios";
import { linkAddress, baseURL, bypassCheckApi, bypassClaimApi } from './imxConfig'
import Button from "../common/button";
import CountDownTimer from '../common/countDown'

axios.defaults.baseURL = baseURL;

const ImxClaimButton = (props) => {
  const link = new Link(linkAddress);
  const [wallet, setWallet] = useState("")
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState("")
  const [canClaim, setCanClaim] = useState(0)
  const [showInventory, setshowInventory] = useState(false)
  const [claimableTokens, setClaimableTokens] = useState("")
  const [claimsArePublic, setClaimsArePublic] = useState(false)
  //Used to display any unexpected error messages
  const [errorMessage, setErrorMessage] = useState("");

  const activationDate = new Date("2021-11-26T17:00Z");

  const updateWallet = (walletId) => {
    var walletString = "";
    setWallet(walletId);
    if (walletId.length > 10) {
      //Check if we can make a claim
      checkValidClaim(walletId);
    }
    else {
      setCanClaim(0);
      props.onUpdate(walletString, 0, "", "");
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

      var walletString = walletId.substr(0, 5) + " ... " + walletId.substr(walletId.length - 5);
      props.onUpdate(walletString, 0, "", "Checking eligibility ...");

      if (bypassCheckApi) {
        setCanClaim(0);
        setshowInventory(true);
        props.onUpdate(walletString, 0, "", "Test airdropped already");
        setLoading(false);
        //        onClaimAllowed(walletString, ["1111", "2222", "3333", "4444", "5555"]);
        return;
      }

      axios.get('/transactions/check/' + walletId)
        .then((res) => {
          if (res.data.status != null && res.data.status == "Error") {
            setCanClaim(0);
            if (res.data.message.includes("airdropped already")) {
              setshowInventory(true);
            }
            props.onUpdate(walletString, 0, "", res.data.message);
            setLoading(false);
          }
          else if (res.data.tokens != null && res.data.tokens.length > 0) {
            onClaimAllowed(walletString, res.data.tokens);
          }
        })
        .catch(err => {
          setLoading(false);
          setCanClaim(0);
          props.onUpdate(walletString, 0, "", err.toString());
        })
    }
    catch (err) {
      if (err.message != "Link Window Closed")
        setErrorMessage(err.message);
    }
  }

  const onClaimAllowed = (walletString, tokenArray) => {
    var claimableTokens = tokenArray.length;
    var availTokens = tokenArray.join(", ");
    setCanClaim(claimableTokens);
    setClaimableTokens(availTokens);
    setLoading(false);
    props.onUpdate(walletString, claimableTokens, availTokens, "");
  }

  const claim = () => {
    try {
      setErrorMessage("");
      setLoading(true);
      setshowInventory(false);
      var walletString = wallet.substr(0, 5) + " ... " + wallet.substr(wallet.length - 5);

      if (bypassClaimApi) {
        setCanClaim(0);
        setLoading(false);
        props.onUpdate(walletString, 0, "", "Test Error Message");
        //        onClaimSuccessful(walletString);
        return;
      }

      axios.get('/transactions/claim/' + wallet)
        .then((res) => {
          if (res.data.status != null && res.data.status == "Error") {
            setCanClaim(0);
            setLoading(false);
            props.onUpdate(walletString, 0, "", res.data.message);
          }
          else if (res.data.result != null && res.data.result.results != null) {
            //Claim completed - tell parent component there are no more claimable tokens
            onClaimSuccessful(walletString);
          }
        })
        .catch(err => {
          setLoading(false);
          props.onUpdate(walletString, canClaim, claimableTokens, err.toString());
        })
    }
    catch (err) {
      if (err.message != "Link Window Closed")
        setErrorMessage(err.message);
    }
  }

  const onClaimSuccessful = (walletString) => {
    setCanClaim(0);
    setClaimableTokens("");
    setshowInventory(true);
    setLoading(false);
    props.onUpdate(walletString, 0, "", "Congratulations!");
  }

  return (
    <div>
      {
        wallet ?
          canClaim > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
              <div className="col-span-1 justify-center">
                <Button tailwind="w-44" title="Disconnect" onClickhandler={logout}></Button>
              </div>
              <div className="col-span-1 justify-center">
                {!loading &&
                  <div className="mt-4 md:mt-0">
                    <Button tailwind="w-44" title="Claim" onClickhandler={claim}></Button>
                    <div>{response}</div>
                  </div>
                }
              </div>
            </div>
            :
            showInventory ?
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
                <div className="col-span-1 justify-center">
                  <Button tailwind="w-44" title="Disconnect" onClickhandler={logout}></Button>
                </div>
                {!loading &&
                  <div className="col-span-1 justify-center">
                    <a href="https://market.x.immutable.com/inventory" target="__blank">
                      <Button tailwind="w-44" title="Inventory" />
                    </a>
                  </div>
                }
              </div>
              :
              <div className="grid grid-cols-1 gap-y-2 gap-x-8">
                <div className="col-span-1 justify-center">
                  <Button tailwind="w-44" title="Disconnect" onClickhandler={logout}></Button>
                </div>
              </div>
          :
          <div className="flex flex-col items-center justify-center">
            {claimsArePublic ?
              <Button tailwind="w-72 text-xs" title="Connect Wallet" onClickhandler={setupAndLogin}></Button>
              :
              <>
                <div className="text-white">Available in</div>
                <CountDownTimer alarmDate={activationDate} onTimerExpired={setClaimsArePublic} />
              </>
            }
            <p className="text-white text-xs f-f-r justify-center mt-4">{errorMessage}</p>
          </div>
      }
    </div>
  );
}

export default ImxClaimButton;
