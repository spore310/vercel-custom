import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks"
import { useEffect } from "react";
import style from '../styles/Home.module.css'
export default function Home() {
  const { address, chainId, connectWallet, disconnectWallet, getNetworkMetadata } = useWeb3();
  const supportedChainIds = [80001,4,1];
  const switches = supportedChainIds.map((ele, index) => {
    return <button className={style.button} onClick={() => switchNetwork(ele)}>{getNetworkMetadata(ele).chainName}</button>
  });
  const { switchNetwork } = useSwitchNetwork();
 
  return (
    <div className={style.main}>
      <div className={style.card}>
        <h1>Supported Networks</h1>
        <ul className={style.list}>
          {supportedChainIds.map((ele,index)=><li className={style.listItem}>{getNetworkMetadata(ele).chainName}</li>)}
        </ul>
      </div>
      <div className={style.card}>

        <span className={style.title}>This site can tell you about your network! Just connect and find out!</span>
        <span className={style.title}>Connect your MetaMask Wallet to try.</span>
          <div><span className={style.label}>Current Wallet: </span>{address ?address: 'Wallet not found'}</div>
          <div><span className={style.label}>Symbol: </span>{address ?getNetworkMetadata(chainId).symbol:'N/A'}</div>
          <div><span className={style.label}>Testnet: </span>{address ?`${getNetworkMetadata(chainId).isTestnet}`:'N/A'}</div>
          <div><span className={style.label}>Chain: </span>{chainId?getNetworkMetadata(chainId).chainName:'N/A'}</div>
       


      </div>
      <div className={style.card}>
        <div className={style.title}>Switch Networks</div>
        {address ? switches: <button onClick={() => connectWallet('injected')}>Connect Wallet</button>}
        
      </div>
    </div>
  )
}
