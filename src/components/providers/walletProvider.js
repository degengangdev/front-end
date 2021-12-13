import WalletContext from "../contexts/walletContext";

const WalletProvider = ({ children }) => {
  const [walletId, setWalletId] = useState("BLANK");
  return (
    <WalletContext.Provider value={{ walletId }}>
      {children}
    </WalletContext.Provider>
  );
};