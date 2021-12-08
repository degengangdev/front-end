import { ImmutableXClient, Link } from '@imtbl/imx-sdk';
import { useState } from 'react';
import axios from "axios";
import { linkAddress, baseURL, bypassCheckApi, bypassClaimApi, imxApiAddress } from '../ImmutableX/imxConfig'
import Button from "../common/button";


axios.defaults.baseURL = baseURL;

const MyPixelDegens = (props) => {
  const link = new Link(linkAddress);
  const [wallet, setWallet] = useState("")
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState("")
  const [canClaim, setCanClaim] = useState(0)
  const [maxCols, setMaxCols] = useState("")
  const [showInventory, setshowInventory] = useState(false);
  const [claimableTokens, setClaimableTokens] = useState("")
  const [userTokens, setUserTokens] = useState([])
  const [degenGangTokens, setdegenGangTokens] = useState([])
  const [degenGangMaxCols, setdegenGangMaxCols] = useState("")
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
    setLoading(false);
    props.onUpdate(walletString, 0, "", "Congratulations!");
  }

  const getMyPixelDegens = async () => {
    setLoading(true);
    getMyDegenGangMembers();
    axios.get('https://api.x.immutable.com/v1/assets?collection=0x93ea8fd40964d2e20b4ded0709b79939062822e4&order_by=token_id&direction=desc&user=' + wallet)
      .then((res) => {
        setUserTokens(res.data.result);
        var colsAttrs = [];
        if (userTokens.length < 4) {
          colsAttrs.push("sm:grid-cols-" + userTokens.length);
          colsAttrs.push("md:grid-cols-" + userTokens.length);
          colsAttrs.push("lg:grid-cols-" + userTokens.length);
        }
        else if (userTokens.length < 8) {
          colsAttrs.push("sm:grid-cols-4");
          colsAttrs.push("md:grid-cols-" + userTokens.length);
          colsAttrs.push("lg:grid-cols-" + userTokens.length);
        }
        else if (userTokens.length < 12) {
          colsAttrs.push("sm:grid-cols-4");
          colsAttrs.push("md:grid-cols-8");
          colsAttrs.push("lg:grid-cols-" + userTokens.length);
        }
        else {
          colsAttrs.push("sm:grid-cols-4");
          colsAttrs.push("md:grid-cols-8");
          colsAttrs.push("lg:grid-cols-12");
        }
        setMaxCols(colsAttrs.join(" "));
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      })
  }

  const getMyDegenGangMembers = async () => {
    setLoading(true);
    axios.get('https://api.opensea.io/api/v1/assets?collection=degengang&owner=' + wallet)
      .then((res) => {
        var tokens = res.data.assets;
        tokens.sort((a, b) => {
          var ia = parseInt(a.token_id);
          var ib = parseInt(b.token_id);
          return ia - ib;
        });
        setdegenGangTokens(tokens);
        var colsAttrs = [];
        if (degenGangTokens.length < 4) {
          colsAttrs.push("sm:grid-cols-" + degenGangTokens.length);
          colsAttrs.push("md:grid-cols-" + degenGangTokens.length);
          colsAttrs.push("lg:grid-cols-" + degenGangTokens.length);
        }
        else if (degenGangTokens.length < 8) {
          colsAttrs.push("sm:grid-cols-4");
          colsAttrs.push("md:grid-cols-" + degenGangTokens.length);
          colsAttrs.push("lg:grid-cols-" + degenGangTokens.length);
        }
        else if (degenGangTokens.length < 12) {
          colsAttrs.push("sm:grid-cols-4");
          colsAttrs.push("md:grid-cols-8");
          colsAttrs.push("lg:grid-cols-" + degenGangTokens.length);
        }
        else {
          colsAttrs.push("sm:grid-cols-4");
          colsAttrs.push("md:grid-cols-8");
          colsAttrs.push("lg:grid-cols-12");
        }
        setdegenGangMaxCols(colsAttrs.join(" "));
        setLoading(false);
      })
      .catch(err => {
        debugger;
        setLoading(false);
      })
  }

  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto text-white f-f-r pl-4 pr-4 pt-48">
      {
        wallet ?
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
            <div className="col-span-1 justify-center">
              <Button tailwind="w-44" title="Go" onClickhandler={getMyPixelDegens}></Button>
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
            <div
              style={{ backgroundImage: `url(images/ClaimPageLitepaperBackground.png)` }}
              className="bg-cover bg-center h-full w-full py-24 md:py-32 lg:py-40 xl:py-60 z-10"
            >
              <div className="flex flex-col items-center justify-center mx-auto container px-4 xl:px-0">
                <p className="text-white text-md sm:test-lg md:text-3xl lg:text-4xl xl:text-41">
                  My Degen Gang Members
                </p>
                <div className={"mt-16 px-16 grid grid-cols-1 gap-y-2 gap-x-8 " + degenGangMaxCols}>
                  {degenGangTokens.map((degenGangToken) => (
                    <div key={degenGangToken.id} className="col-span-1 justify-center">
                      <img alt="" className="w-44" src={degenGangToken.image_url} />
                      <p className="text-center text-white">{degenGangToken.token_id}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mx-auto container px-4 xl:px-0">
                <p className="text-white text-md sm:test-lg md:text-3xl lg:text-4xl xl:text-41">
                  My Pixel Degens
                </p>
                <div className={"mt-16 px-16 grid grid-cols-1 gap-y-2 gap-x-8 " + maxCols}>
                  {userTokens.map((userToken) => (
                    <div key={userToken.id} className="col-span-1 justify-center">
                      <img alt="" className="w-44" src={userToken.image_url} />
                      <p className="text-center text-white">{userToken.token_id}</p>
                    </div>
                  ))}
                </div>
              </div>
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

export default MyPixelDegens;
