import { Link } from '@imtbl/imx-sdk';
import { useState } from 'react';
import axios from "axios";
import { linkAddress, baseURL } from './imxConfig'
import Button from "../common/button";

axios.defaults.baseURL = baseURL;

const ImxClaimButton = () => {
    const link = new Link(linkAddress);
    const [wallet, setWallet] = useState("")
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState("")

  const setupAndLogin = async () => {
    const { address } = await link.setup({});
    setWallet(address)
  }
    
    const logout = () => {
        setWallet("")
    }

    const claim = () => {
        setLoading(true)
        axios.post('/transactions/claim', {wallet})
            .then((res)=>{
                console.log(res.data.results);
                setLoading(false);
                setResponse(JSON.stringify(res.data.results))
            })
            .catch(err=>{
                console.log(err.response.data.error)
                setLoading(false);
                setResponse(err.response.data.error)
            })
    }

    return (
      <div>
        {
            wallet?
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
              <div className="col-span-1 justify-center">
                <Button tailwind="w-32" title="Logout" onClickhandler={logout}></Button>
              </div>
              <div className="col-span-1 justify-center">
                {!loading &&
                  <div className="mt-4 md:mt-0">
                    <Button tailwind="w-32" title="Claim" onClickhandler={claim}></Button>
                    <div>{response}</div>
                  </div>
                }
              </div>
            </div>
            :
            <div className="justify-center">
              <Button tailwind="w-32" title="Login" onClickhandler={setupAndLogin}></Button>
            </div>
          }
      </div>
    );
  }
  
  export default ImxClaimButton;