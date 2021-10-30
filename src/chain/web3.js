// import WalletConnect from "@walletconnect/client";
// import QRCodeModal from "@walletconnect/qrcode-modal";
const Web3 = require('web3');
const web3 = new Web3(window.ethereum);

// let connector = new WalletConnect({
//   bridge: "https://bridge.walletconnect.org", // Required
//   qrcodeModal: QRCodeModal,
// });

// const createConnector = () => {
//   connector = new WalletConnect({
//     bridge: "https://bridge.walletconnect.org", // Required
//     qrcodeModal: QRCodeModal,
//   });
// }

export {
  Web3,
  web3,
  // connector,
  // createConnector
};
