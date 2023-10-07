import '../styles/globals.css';
import '../styles/global-common.css'
import "../styles/nav.css"
import "../styles/content.css"
import "../styles/side.css"
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
