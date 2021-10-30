import {
  SET_ADDRESS,
  SET_NETWORKID,
  SET_CONNECT_TYPE,
  SET_ERROR,
  SET_LOADING,
  SET_ADDRESS_NETWORK,
} from '../actions';

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: { address },
});
export const setAddressNetwork = (address, networkId) => ({
  type: SET_ADDRESS_NETWORK,
  payload: { address, networkId },
});

export const setNetworkId = (networkId) => ({
  type: SET_NETWORKID,
  payload: { networkId },
});

export const setConnectType = (connectType) => ({
  type: SET_CONNECT_TYPE,
  payload: { connectType },
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: { error },
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: { isLoading },
});
