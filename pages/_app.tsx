import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";
import LayoutAuth from "../components/LayoutAuth";
import { NextPageWithLayout } from "../interfaces";
import { SWRConfig } from "swr";
import { config } from "../swr/config";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <LayoutAuth>{page}</LayoutAuth>);

  return (
    <SWRConfig value={config}>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </SWRConfig>
  );
}

export default MyApp;
