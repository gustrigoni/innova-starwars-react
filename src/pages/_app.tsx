import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../assets/css/main.css";

import { SearchProvider } from "../SearchContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Component {...pageProps} />
    </SearchProvider>
  );
}
