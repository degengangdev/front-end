import { useCallback, useEffect, useState } from 'react';
import useBlock from './useBlock';
import { degenGangContract } from '../chain/contracts';

const useTotalSupply = () => {
  const [value, setValue] = useState(0);

  const block = useBlock();

  const fetchTS = useCallback(async () => {
    try {
      const _ts = await degenGangContract.contract.methods.totalSupply().call();
      setValue(Number(_ts));
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchTS();
  }, [block, fetchTS, setValue]);

  return value;
};

export default useTotalSupply;
