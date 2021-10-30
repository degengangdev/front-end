import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from "../button";
import Slide from "react-reveal/Slide";
import { Link, useLocation } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import {
  setAddress,
  setNetworkId,
  setConnectType,
} from "../../../redux/actions";
import config from "../../../config";

function Index({ setmenu, menu }) {
  const location = useLocation();
  // const [mint, setMint] = useState(false);

  const address = useSelector((state) => state.authUser.address);
  // const connectType = useSelector((state) => state.authUser.connectType);

  const dispatch = useDispatch();

  // const onClickhandler = () => {
  //   setMint(!mint);
  // };

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

  return (
    <>
      <nav className="w-full pt-6 md:pt-8 xl:pt-16">
        <ul className="flex items-center justify-center lg:justify-between w-full relative">
          <li>
            <Link to="/">
              <img
                className="w-60 md:w-auto lg:w-40 xl:w-auto"
                src="images/logo.png"
                alt="logo"
              />
            </Link>
          </li>
          <button
            onClick={() => setmenu(true)}
            className="focus:outline-none absolute 2xl:hidden -right-2 md:right-0 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" icon icon-tabler icon-tabler-menu-2"
              width={40}
              height={40}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1={4} y1={6} x2={20} y2={6} />
              <line x1={4} y1={12} x2={20} y2={12} />
              <line x1={4} y1={18} x2={20} y2={18} />
            </svg>
          </button>
          <li className="text-xs xl:text-base 2xl:text-lg -mt-2 hidden lg:flex items-center md:ml-6 ">
            <ul className="flex items-center space-x-4 2xl:space-x-6">
              <li className="text-white uppercase hover:text-magenta transition-all duration-300 ease-in-out">
                <a href="/#about">about</a>
              </li>
              <li className="text-white uppercase hover:text-magenta transition-all duration-300 ease-in-out">
                <a href="/#roadmap">roadmap</a>
              </li>
              <li className="text-white uppercase hover:text-magenta transition-all duration-300 ease-in-out">
                <a href="/#bar">degen bar</a>
              </li>
              {/* <li className="text-white uppercase hover:text-magenta transition-all duration-300 ease-in-out">
                <a href="/#fight">BAR FIGHTS</a>
              </li> */}
              <li className="text-white uppercase hover:text-magenta transition-all duration-300 ease-in-out">
                <a href="/barfights">bar fights</a>
              </li>
              <li className="text-white uppercase hover:text-magenta transition-all duration-300 ease-in-out">
                <a href="http://degengangmerch.com" target="_blank">merch</a>
              </li>
            </ul>
            <ul className="flex items-center md:ml-6 lg:ml-10 2xl:ml-16 lg:space-x-4 2xl:space-x-9">
              <li className="text-white hover:text-magenta transition-all duration-300 ease-in-out">
                <a href="https://twitter.com/Degenganghq">
                  <svg
                    width={42}
                    height={35}
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M59.0988 15.0825C57.063 15.983 54.904 16.5744 52.6935 16.8371C55.0235 15.4436 56.7674 13.2505 57.6001 10.6665C55.4135 11.9678 53.0161 12.8798 50.5175 13.3731C48.8391 11.5773 46.6144 10.3864 44.1894 9.98536C41.7643 9.58435 39.2746 9.99578 37.1075 11.1557C34.9404 12.3156 33.2172 14.159 32.2058 16.3993C31.1944 18.6395 30.9515 21.1512 31.5148 23.5438C27.0804 23.3215 22.7424 22.1692 18.7822 20.1616C14.8221 18.154 11.3285 15.3359 8.52814 11.8905C7.53691 13.593 7.01602 15.5284 7.01881 17.4985C7.01881 21.3651 8.98681 24.7811 11.9788 26.7811C10.2082 26.7254 8.47649 26.2472 6.92814 25.3865V25.5251C6.92867 28.1003 7.81979 30.5961 9.4504 32.5893C11.081 34.5825 13.3508 35.9504 15.8748 36.4611C14.2311 36.9066 12.5076 36.9722 10.8348 36.6531C11.5465 38.8698 12.9335 40.8083 14.8017 42.1974C16.6699 43.5865 18.9258 44.3566 21.2535 44.3998C18.9401 46.2167 16.2913 47.5598 13.4585 48.3523C10.6257 49.1448 7.66448 49.3712 4.74414 49.0185C9.842 52.297 15.7764 54.0375 21.8375 54.0318C42.3521 54.0318 53.5708 37.0371 53.5708 22.2985C53.5708 21.8185 53.5575 21.3331 53.5361 20.8585C55.7198 19.2803 57.6044 17.3252 59.1015 15.0851L59.0988 15.0825Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
              <li className="text-white hover:text-magenta transition-all duration-300 ease-in-out">
                <a href="http://discord.gg/VyxVr4byxH">
                  <svg
                    width={42}
                    height={35}
                    viewBox="0 0 64 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M54.1787 4.36349C50.0996 2.5136 45.7253 1.15069 41.1517 0.370096C41.0684 0.355031 40.9852 0.392679 40.9423 0.467979C40.3798 1.4569 39.7566 2.74702 39.3202 3.76106C34.4011 3.03318 29.5072 3.03318 24.6889 3.76106C24.2524 2.72448 23.6066 1.4569 23.0415 0.467979C22.9986 0.395192 22.9154 0.357543 22.8321 0.370096C18.2611 1.1482 13.8868 2.51111 9.80516 4.36349C9.76982 4.37854 9.73954 4.40367 9.71944 4.43628C1.42238 16.6875 -0.850534 28.6376 0.26448 40.4396C0.269526 40.4973 0.30232 40.5526 0.347728 40.5877C5.82189 44.5609 11.1246 46.9731 16.3287 48.5719C16.412 48.597 16.5003 48.5669 16.5533 48.4991C17.7843 46.8376 18.8817 45.0856 19.8226 43.2432C19.8781 43.1353 19.8251 43.0073 19.7116 42.9646C17.971 42.312 16.3136 41.5164 14.7193 40.6128C14.5932 40.54 14.5831 40.3617 14.6991 40.2764C15.0346 40.0279 15.3702 39.7694 15.6905 39.5083C15.7485 39.4607 15.8293 39.4506 15.8974 39.4807C26.3714 44.2071 37.7108 44.2071 48.0612 39.4807C48.1294 39.4481 48.2101 39.4582 48.2706 39.5058C48.5911 39.7669 48.9266 40.0279 49.2646 40.2764C49.3806 40.3617 49.373 40.54 49.2469 40.6128C47.6526 41.5339 45.9952 42.312 44.252 42.9621C44.1385 43.0048 44.0881 43.1353 44.1436 43.2432C45.1047 45.083 46.2021 46.835 47.4104 48.4966C47.4609 48.5669 47.5516 48.597 47.6349 48.5719C52.8644 46.9731 58.167 44.5609 63.6411 40.5877C63.6891 40.5526 63.7194 40.4998 63.7244 40.4421C65.0589 26.7977 61.4893 14.9456 54.2619 4.43877C54.2442 4.40367 54.214 4.37854 54.1787 4.36349ZM21.3867 33.2534C18.2333 33.2534 15.635 30.3921 15.635 26.8781C15.635 23.3641 18.1829 20.5028 21.3867 20.5028C24.6157 20.5028 27.1888 23.3892 27.1383 26.8781C27.1383 30.3921 24.5904 33.2534 21.3867 33.2534ZM42.6527 33.2534C39.4994 33.2534 36.901 30.3921 36.901 26.8781C36.901 23.3641 39.4489 20.5028 42.6527 20.5028C45.8817 20.5028 48.4548 23.3892 48.4044 26.8781C48.4044 30.3921 45.8817 33.2534 42.6527 33.2534Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
              {location.pathname === "/mint" ? (
                /* connect wallet button */
                <li>
                  <Button
                    onClickhandler={onMetamaskConnect}
                    title={address === null ? "CONNECT WALLET" : `${address.substring(0, 7)}...${address.substring(address.length - 5, address.length)}`}
                  />
                  {" "}
                </li>
              ) : (
                <li>
                  <a href="https://opensea.io/collection/degengang" target="__blank">
                    <Button title="OPENSEA" />
                  </a>
                </li>
              )}
            </ul>
          </li>
        </ul>
      </nav>
      <Slide left>
        <div
          className={
            menu
              ? "z-50 w-1/2 sm:w-1/3 sm:overflow-y-auto sm:h-full bg-black  rounded-tr-2xl fixed min-h-screen -ml-2 sm:-ml-4 md:-ml-2 top-0 left-0 shadow  2xl:hidden"
              : "hidden"
          }
        >
          <div className="flex justify-end w-full p-6">
            <button
              className="focus:outline-none text-white"
              onClick={() => setmenu(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M15 1L1 15"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1L15 15"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col text-xs pl-8 space-y-4 f-f-r uppercase">
            <li className="text-white transition duration-150 ease-in ">
              <a href="/#home">about</a>
            </li>
            <li className="text-white">
              <a href="/#roadmap">roadmap</a>
            </li>
            <li className="text-white">
              <a href="/#features">degen bar</a>
            </li>
            <li className="text-white">
              <a href="/barfights">BAR FIGHTS</a>
            </li>
            <li className="text-white">
              <a href="http://degengangmerch.com">MERCH</a>
            </li>
            {/* <li className="text-white">
              <a href="/#roadmap">faqs</a>
            </li> */}
            <li className="text-white flex items-center space-x-4">
              <div className="">
                <a href="href">
                  <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={41}
                    height={31}
                    viewBox="0 0 41 31"
                  >
                    <image
                      width={41}
                      height={31}
                      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAfCAYAAAB6Q+RGAAADUElEQVRYhc2YWYiPURjGf/6GmezGNpbImoTsJEtGliJZSrghZctyoUi5EBduJSkXliy5lguFCzJluSAXSKEsk20QxjKER6/ev7755vv+35mhmXnq1Nf7nfec52zv+5zTQhIBaAmUAaOACcAU4AqwO8QZWAGsB24BN4DrwHPgW4hzCMlSoByYDUwEegLdgLvAdOBthr8N8IQT/QC8AG4Dl4ALwON/ITnCG14M9AdaJdTZBzwAevtgStz+HXgPVALtgW1A55jvL+ANcBY4BVS4rS6MZEIpl/RSjYfvkramcEmcyU7ARWBc1jL8Z9jMz/R9Wwu5hH7WNQFBfHJ2JnGKG/oBmxqPVx3MBebHjXGSG4A+TcPvD9p4qGobNUZJDgSWNj6vOij38hdRkvlQ09QoBpZFQ16eZKekvdCEmOcrW4vkWE93zQUdgUVRklbmRLJFc5rN1vZR5KxnBDqaILjs4mA4MD7Q7yFwzU+tiZPuAT4jgSHAHUs7kzwtZeG5pIWRdFUiabukbxl+xyV1j/iNlnQ9oL9fkjZIKjanLQEONZJWp+TWAwX8bkjqkOAzStKrgH6PSCrLuUbMwn1XK0k4DFSn/DsGfEyw33Z9kAVb7kG5wNj41GVVEl4Dz1L+3SnQ5r2AfnsZ0VzgJi5OESP44Wub8q9NgTbbBfTbARiQc1GahWHA0JQ6Ywrk+1kpdgt3UwP6tcH3zLm8z4KR2OyzFkUPYEeBNlYBk+phTxpMqZ20yoBTlg8JRyWNldRH0mxJFQF+jyWtlNRP0mBJuyRVB/ZpuGDKvNLvKKGocRVdVg8f/OC19n1WH1TEly8EJQ0gaOjaAB9Di7QT25xQk0u5qkZhN7V3wJf/SNyurlXAj5C6uQJBOo+fwH5gAXDS79INhWWf88ByYGNKNoriswV925OrgT3+QpGEIlft1X6b6+jhY7Irob7+opG0dT74oO7788pV4JG/fKzNOESWkXbZc07+3m0BfQ2w3WNfGp4AS4CbTt4UfRc/FF09ixjZr/788taX9b3bbIBngGkFMphtq+PA3r+rFlMnQyUdkvQ6JWbdjcmu+haTdydS2v4k6Zy/ntRqN60T05gHJT2MNbTgHwjmy5DYJFRJOu1tF9WpL/EbszrtbCiQRmUAAAAASUVORK5CYII="
                    />
                  </svg>
                </a>
              </div>
              <div className="">
                <a href="href">
                  <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={42}
                    height={35}
                    viewBox="0 0 42 35"
                  >
                    <image
                      width={42}
                      height={35}
                      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAjCAYAAADizJiTAAADcklEQVRYhcWYW4hNYRiGnz2GhswghAvKhRxuUMYhh0hCGUyUkBzKECJ3UrhyJdxRxIVDTTlzI0lzIeMQIWFoppwzzmYMZsa8+nffYu09+7zWnnlrtQ9r73+9//sd/u/7IpLIM7oA44F5wFhgANAGvAJuAheAmiQUugG9gE84onm+FkuqkvRRsWiT9EbSaUlTEnAolLRaUpmkiP9GhaTZIZIukrRfUrPS47ukTZL6SBopaYOkW7a50qjVbdHekmokvZQ0JgSSXSUdyICgHz995Dxs9db0Fp4h6bPdfCZpfECiFVmSjEeTpJ221ghJ4wrMaYcAve39MOAssDDHGBsEbA4Qny7QLgEvgZPACaCnp8D6JLvaLqk4SzWXSmoJoOYfSQ2+9ytcMHmKNgB/4nbWHdgNnAJmZqHIBKAwgKIFUQXhC7ACOA78U2GSpPoUu/wm6YikaWnULLR0ExRPJc3xr+0pej9F0nUoAdZYcr5oOx1oydyPVvOxoKgELvvX8Ez0EzgMTEnzABdwZXa9Bm4At4HHwAug0a6gaG33/zjTVQYwmXMPl9reh2D6bfFu5Sk6zkxWYUG1LAdFnHuUhKAm0bM9Dp6PTgeuAoeAeuBdSA/MFe2e7yn6HCgGltjnvJdUKfDd/D0GnqJ3gFrfjUgnEq2zQI2BR/QtcK7zuMXgrqkagwLfh73Aw87lGMW1BKdkDNGPwHrgTcfyikGtVf3tUBD3RTVQbrvqDFxJFEgkIBqxwFoELLdjrLmDCH+zAqid2UlQ5bi0NNXqyXo7y1utyco3nBWrkj0jUTnmpB8JLO4Ach5+AHtS5e9402OV9S7gV97p/cdBi4/kSFJXRqwwaAuhwEiHakn90nUO6dqKtdaZ5guu45ycSYuTyaTE+esqq1X7WvMWRpXkXGsdcCyjX2fRtPWQVC6pNgR1f9nAIePnZ/pDN8HYaL1MkA7ToVHSumxnBekUHC5pi6SHIflonaQFuQw1XB4tNb9zFUsR0M+GEKOBiTZ9CwPngR3Ao1zWKrQjyyX3+dZPx3eWQXEP2AecCZKbvajvZeqtBGaZqkHgCD0Ajlqd+yHobhOlJ2f2uTYdGQX0t3SUqupvAj7bqXbdihnXSv8OSjAVUQc3zhls4xk3JR5qhJ1ruALFkW6xM9qNXlwN+8SOQff6NSyCUQB/AaotY0FNN+5hAAAAAElFTkSuQmCC"
                    />
                  </svg>
                </a>
              </div>
            </li>
            {location.pathname === "/mint" ? (
              /* connect wallet button */
              <li>
                <a href="/">
                  <Button
                    onClickhandler={onMetamaskConnect}
                    title="CONNECT WALLET"
                  />
                </a>{" "}
              </li>
            ) : (
              <li>
                <a href="/">
                  <Button title="APE IN" />
                </a>{" "}
              </li>
            )}
          </ul>
        </div>
      </Slide>
    </>
  );
}

export default Index;
