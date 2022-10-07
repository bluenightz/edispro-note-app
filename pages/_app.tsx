import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import LayoutAuth from "../components/LayoutAuth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LayoutAuth>
        <Component {...pageProps} />
      </LayoutAuth>
    </Provider>
  );
}

export default MyApp;
