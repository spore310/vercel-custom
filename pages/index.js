import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks"
import { useEffect } from "react";
import style from '../styles/Home.module.css'
import Form from '../components/login';
export default function Home() {

 
 
  return (
    <div className={style.main}>
      <div className={style.card}>
        <Form/>
      </div>
      <div className={style.card}>
        <h1>Supported Networks</h1>
        <ul className={style.list}>
          
        </ul>
      </div>
      <div className={style.card}>

        <span className={style.title}>This site can tell you about your network! Just connect and find out!</span>
        <span className={style.title}>Connect your MetaMask Wallet to try.</span>
          <div><span className={style.label}>Current Wallet: </span></div>
          <div><span className={style.label}>Symbol: </span></div>
          <div><span className={style.label}>Testnet: </span></div>
          <div><span className={style.label}>Chain: </span></div>
       


      </div>
      <div className={style.card}>
        <div className={style.title}></div>
        <button onClick={() =>{}}>Connect Wallet</button>
        
      </div>
    </div>
  )
}
