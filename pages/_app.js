import Navbar from "../components/Navbar";
import "../styles/globals.css";
import data from "../seeds/data.json";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar navbar={data.navbar} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
