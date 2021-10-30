import { useEffect, useState } from 'react'
import { web3 } from '../chain/web3';

const useBlock = () => {
  const [block, setBlock] = useState(0);
  useEffect(() => {
    if (!web3) return;

    const interval = setInterval(async () => {
      try {
        const latestBlockNumber = await web3.eth.getBlockNumber();
        if (block !== latestBlockNumber) {
          setBlock(latestBlockNumber);
        }
      } catch (err) {
        console.log(err);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [block]);

  return block;
}

export default useBlock;
