import { Link } from '@imtbl/imx-sdk';
import { useState } from 'react';
import axios from "axios";
import { linkAddress, baseURL } from './imxConfig'
import Button from "../common/button";
import { getJsonWalletAddress } from 'ethers/lib/utils';

axios.defaults.baseURL = baseURL;

const ImxClaimButton = (props) => {
  const link = new Link(linkAddress);
  const [wallet, setWallet] = useState("")
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState("")
  const [canClaim, setCanClaim] = useState(0)
  const [claimableTokens, setClaimableTokens] = useState("")
  //Used to display any unexpected error messages
  const [errorMessage, setErrorMessage] = useState("");

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
      var walletString = walletId.substr(0, 5) + " ... " + walletId.substr(walletId.length - 5);
      props.onUpdate(walletString, 0, "", "Checking eligibility ...");
      axios.get('/transactions/check/' + walletId)
        .then((res) => {
          if (res.data.status != null && res.data.status == "Error") {
              setCanClaim(0);
              props.onUpdate(walletString, 0, "", res.data.message);
          }
          else if (res.data.tokens != null && res.data.tokens.length > 0) {
            var availTokens = res.data.tokens.join(", ");
            setCanClaim(res.data.tokens.length);
            setClaimableTokens(availTokens);
            setLoading(false);
            props.onUpdate(walletString, res.data.tokens.length, availTokens, "");
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

  const getClaimedPixelDegens() {

  }

  const claim = () => {
    try {
      setErrorMessage("");
      setLoading(true);
      var walletString = wallet.substr(0, 5) + " ... " + wallet.substr(wallet.length - 5);
      axios.post('/transactions/claim', { wallet })
        .then((res) => {
          if (res.data.status != null && res.data.status == "Error") {
            setCanClaim(0);
            props.onUpdate(walletString, 0, "", res.data.message);
          }
          else if (res.data.result != null && res.data.result.results != null) {
            //Claim completed - tell parent component there are no more claimable tokens
            setCanClaim(0);
            setClaimableTokens("");
            props.onUpdate(walletString, 0, "", "Congratulations!");
            props.onSuccessfulClaim()
          }
          setLoading(false);
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
            <div className="flex flex-col items-center justify-center">
              <Button tailwind="w-44" title="Disconnect" onClickhandler={logout}></Button>
            </div>
          :
          <div className="flex flex-col items-center justify-center">
            <Button tailwind="w-44" title="Connect" onClickhandler={setupAndLogin}></Button>
            <p className="text-white text-xs f-f-r justify-center mt-4">{errorMessage}</p>
          </div>
      }
    </div>
  );
}

export default ImxClaimButton;
