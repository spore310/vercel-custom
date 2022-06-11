import '../styles/globals.css';
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

function MyApp({ Component, pageProps }) {
  const supportedChainIds = [80001,1,4];
const connectors = {
  injected: {}
}
  return (<ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors}>
    <Component {...pageProps} />
    </ThirdwebWeb3Provider>)
}

export default MyApp
