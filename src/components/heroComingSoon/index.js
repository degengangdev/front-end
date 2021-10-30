import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BigNumber from 'bignumber.js';
import Fade from "react-reveal/Fade";
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Navbar from "../common/navbar/index";
import Button from "../common/button";
import { degenGangContract } from '../../chain/contracts';
import useTotalSupply from '../../hooks/useTotalSupply';
import useBlock from '../../hooks/useBlock';
import {
  sendTransaction,
} from '../../chain/utils';
import {
  setAddress,
  setNetworkId,
  setConnectType,
} from "../../redux/actions";
import config from "../../config";

export default function Index() {
  const [menu, setmenu] = useState(false);
  const [value, setValue] = useState(1);

  const dispatch = useDispatch();

  const address = useSelector(state => state.authUser.address);
  const connectType = useSelector((state) => state.authUser.connectType);
  const totalSupply = useTotalSupply();
  const block = useBlock();
  const [maxAllowNfts, setMaxAllowNfts] = useState(0);
  const [isPrivate, setIsPrivate] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [isWhiteListed, setIsWhiteListed] = useState(false);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    async function fetchValues(address) {
      try {
        const isPrivateStatus = Boolean(await degenGangContract.contract.methods.privateSaleIsActive().call());
        const isPublicStatus = Boolean(await degenGangContract.contract.methods.publicSaleIsActive().call());
        const curBalance = Number(await degenGangContract.contract.methods.balanceOf(address).call());
        setIsPrivate(isPrivateStatus);
        setIsPublic(isPublicStatus);

        if (address) {
          setIsWhiteListed(await degenGangContract.contract.methods.userWhiteList(address).call());
        }
        if (isPrivateStatus) {
          setMaxAllowNfts(3 - curBalance);
        }
        if (isPublicStatus) {
          setMaxAllowNfts(30);
        }

        setPending(false);
      } catch (error) { console.log(error) }
    }
    if (address) {
      fetchValues(address);
    }
  }, [address, block]);
  
  const onMetamaskConnect = async () => {
    if (typeof window.ethereum === 'undefined') {
      NotificationManager.warning('Please install MetaMask!');
      return;
    }
    if (window.ethereum.networkVersion !== config.networkId) {
      if (config.networkId === '1')
        NotificationManager.warning('Please switch to mainnet.');
      else if (config.networkId === '3')
        NotificationManager.warning('Please switch to ropsten testnet.');
      else if (config.networkId === '4')
        NotificationManager.warning('Please switch to rinkeby testnet.');
      else if (config.networkId === '137')
        NotificationManager.warning('Please switch to polygon network.');
      return;
    }
    if (window.ethereum.selectedAddress !== null) {
      const { networkVersion, selectedAddress } = window.ethereum;
      dispatch(setAddress(selectedAddress));
      dispatch(setNetworkId(networkVersion));
      dispatch(setConnectType("metamask"));      
    }
    if (window.ethereum.selectedAddress === null) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        window.location.reload();
      } catch (err) {
        console.log("err :>> ", err);
      }
    }
  };

  const onBuy = useCallback(async () => {
    if (address && degenGangContract) {
      const bgAmount = new BigNumber(value);
      if (bgAmount.isNaN() || bgAmount.isZero()) {
        NotificationManager.warning('Please enter amount!');
      } else if (isPrivate && !isWhiteListed) {
        NotificationManager.warning(`You are not in whilte list for private sale.`);
      } else if (bgAmount.isGreaterThan(maxAllowNfts)) {
        NotificationManager.warning(`You can't purchase more than ${maxAllowNfts} once.`);
      } else {
        try {
          let encodedABI = null;
          if (isPrivate) {
            encodedABI = degenGangContract.contract.methods
              .privateMintByUser(`0x${bgAmount.toString(16)}`)
              .encodeABI();
          }
          if (isPublic) {
            encodedABI = degenGangContract.contract.methods
              .publicMintByUser(`0x${bgAmount.toString(16)}`)
              .encodeABI();
          }

          if (!encodedABI) {
            NotificationManager.warning(`Sale is not opened`);
            return;
          }

          try {
            setPending(true);
            await sendTransaction(connectType, address, degenGangContract.address, encodedABI, `0x${bgAmount.times(6e16).toString(16)}`);
            setPending(false);
          } catch (error) {
            setPending(false);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [degenGangContract, address, connectType, value, isPrivate, isPublic, maxAllowNfts, block]);

  return (
    <div
      style={{ backgroundImage: `url(images/first.png)` }}
      className="xl:bg-cover bg-center  md:pb-20 h-full w-full xl:pb-64"
    >
      <Fade bottom>
        <div className="mx-auto container flex flex-col items-center justify-center px-4 xl:px-0 relative z-50">
          <Navbar menu={menu} setmenu={setmenu} />
          {
            isPrivate ?
              <p className="text-center text-xs  md:text-sm lg:text-lg mt-20 md:mt-28 text-white">Only Whitelist users could mint 3 DEGGNs as limit.</p> :
              ""
          }
          <div className="lg:flex-row flex flex-col flex-col-reverse lg:space-x-10 items-stretch mt-12 md:mt-16  mb-12 md:mb-14 lg:mb-20 xl:mb-28">
            <div className="mt-8 lg:mt-0 px-6 py-6 2xl:px-12 xl:py-8 border-4 border-yellowBrand lg:w-1/2 flex flex-col items-center ">
              <p className="text-white text-xl md:text-3xl lg:text-4xl xl:text-41">
                MINT
              </p>
              <p className="text-white text-base md:text-lg lg:text-2xl f-f-r mt-8 text-center">
                You can mint up to 30 DEGEN GANG Members
              </p>
              <p className="text-white text-base md:text-lg lg:text-2xl f-f-r mt-1 text-center">
                The price per NFT is 0.06 ETH
              </p>

              <p className="text-yellowBrand text-base md:text-lg lg:text-2xl f-f-r mt-8 lg:mt-12">
                {isPrivate || isPublic ? totalSupply.toString(10) : ""}{isPrivate || isPublic ? "/7000 NFTs Minted" : ""}
              </p>
              <div className="flex items-center space-x-1 my-6 xl:my-8">
                <button
                  onClick={() => {
                    value >= 1 && setValue(value - 1);
                  }}
                  className="text-magenta h-10 bg-white w-10 flex items-center justify-center rounded-l-full"
                >
                  -
                </button>
                <input
                  value={value && value}
                  min="1"
                  placeholder="1"
                  type="number"
                  className="w-20 focus:outline-none h-10 text-center text-xl text-magenta placeholder-magenta pb-2"
                />
                <button
                  onClick={() => value < maxAllowNfts && setValue(value + 1)}
                  className="text-magenta h-10 bg-white w-10 flex items-center justify-center rounded-r-full"
                >
                  +
                </button>
              </div>
              <Button
                title={"Buy"}
                onClickhandler={!address ? onMetamaskConnect : !pending && (((isPrivate && isWhiteListed) || isPublic) && maxAllowNfts > 0) && onBuy}
              />
              {
                isPrivate && !isWhiteListed ?
                  (<p className="text-white text-base md:text-md md:text-2md f-f-r mt-4 text-center">
                    You are not in whilte list for private sale.
                  </p>) : ""
              }
            </div>
            <img className="z-0 lg:w-1/2  " src="images/mint.png" alt="" />
          </div>
        </div>
      </Fade>
    </div>
  );
}
