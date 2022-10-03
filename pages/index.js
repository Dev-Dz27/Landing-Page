import Head from "next/head";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Slider from "../components/Slider";
import data from "../seeds/data.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Photography Next App</title>
        <meta name="description" content="Generated using next js and tailwind css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero hero={data.hero}  />
      <Slider slides={data.slider.images}  />
      <Instagram slides={data.instagram.images}  />
    </>
  );
}
