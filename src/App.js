import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Degen from "./pages/degen";
import ComingSoon from "./pages/comingSoon";
import Barfight from "./pages/barFight";
import DcredPage from "./pages/dcredPage";
import BeastsPage from "./pages/beastsPage";
import ClaimPage from "./pages/claimPage";
import WalletContextProvider from "../src/components/providers/walletContextProvider";

import {
  setAddress,
  setNetworkId,
  setConnectType,
  setError,
  setLoading,
  setAddressNetwork,
} from './redux/actions';
import { NotificationContainer } from 'react-notifications';
import config from "./config";
import { Web3 } from "./chain/web3";

class App extends Component {

  constructor(props) {
    super(props);
    window.web3 = null;
    // modern broswers
    if (typeof window.ethereum !== 'undefined') {
      window.web3 = new Web3(window.ethereum);
      window.web3.eth.net.getId((err, netId) => {
        window.ethereum.request({ method: 'eth_accounts' }).then(async (accounts) => {
          this.props.setAddressAndNetwork(accounts[0] || null, `${netId}`);
        });

        window.ethereum.on('accountsChanged', (accounts) => this.handleAddressChanged(accounts));
        window.ethereum.on('networkChanged', (networkId) => this.handleNetworkChanged(networkId));

        this.props.setConnectTypeRequest('metamask');
      });
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.web3 = null;
    }
  }

  componentDidMount() {
    window.web3 = null;
    // modern broswers
    if (typeof window.ethereum !== 'undefined') {
      window.web3 = new Web3(window.ethereum);
      window.web3.eth.net.getId((err, netId) => {
        window.ethereum.request({ method: 'eth_accounts' }).then(async (accounts) => {
          this.props.setAddressAndNetwork(accounts[0] || null, `${netId}`);
        });

        window.ethereum.on('accountsChanged', (accounts) => this.handleAddressChanged(accounts));
        window.ethereum.on('networkChanged', (networkId) => this.handleNetworkChanged(networkId));

        if (config.networkId !== netId) {
          // NotificationManager.error(`Wrong network`);
          window.web3.currentProvider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: window.web3.utils.numberToHex(parseInt(config.networkId, 10)) }],
          });
        }

        this.props.setConnectTypeRequest('metamask');
      });
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.web3 = null;
    }
  }

  handleAddressChanged(accounts) {
    if (typeof window.ethereum !== 'undefined') {
      // window.location.reload(false);
      if (accounts[0]) {
        this.props.setAddressRequest(accounts[0]);
      } else {
        this.props.setAddressAndNetwork(null, null);
        this.props.setConnectTypeRequest('');
      }
    }
  }

  handleNetworkChanged(networkVersion) {
    this.props.setNetworkIdRequest(networkVersion);
    // console.log('networkVersion >', networkVersion)
    if (config.networkId !== networkVersion && window.web3) {
      window.web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: window.web3.utils.numberToHex(parseInt(config.networkId, 10)) }],
      });
    }
    switch (networkVersion) {
      case '1':
        if (config.networkId === '1') {
          this.props.setErrorRequest(false);
        } else {
          this.props.setErrorRequest(true);
        }
        break;
      case '4':
        if (config.networkId === '4') {
          this.props.setErrorRequest(false);
        } else {
          this.props.setErrorRequest(true);
        }
        break;
      default:
        this.props.setErrorRequest(true);
    }
  }

  render() {
    debugger;
    return (
      <div>
        <Router>
          <WalletContextProvider>
            <Switch>
              <Route path="/" component={Degen} exact />
              <Route path="/dcred" component={DcredPage} exact />
              <Route path="/barfights" component={Barfight} exact />
              <Route path="/claim" component={ClaimPage} exact />
              <Route path="/beasts" component={BeastsPage} exact />
            </Switch>
          </WalletContextProvider>
        </Router>
        <NotificationContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoading: (isLoading) => dispatch(setLoading(isLoading)),
    setAddressRequest: (address) => dispatch(setAddress(address)),
    setAddressAndNetwork: (address, networkId) => dispatch(setAddressNetwork(address, networkId)),
    setNetworkIdRequest: (networkId) => dispatch(setNetworkId(networkId)),
    setConnectTypeRequest: (connectType) => dispatch(setConnectType(connectType)),
    setErrorRequest: (error) => dispatch(setError(error)),
  };
};

export default connect(null, mapDispatchToProps)(App);
