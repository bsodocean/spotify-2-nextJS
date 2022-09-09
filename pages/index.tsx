import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import Player from "../components/Player";

const Home: NextPage = () => {
  return (
    <div className='bg-black h-screen overflow-hidden '>
      <Head>
        <title>Spotify</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex'>
        <Sidebar />
        <Center />
      </main>

      <div className='sticky bottom-0'>
        <Player />
      </div>
    </div>
  );
};

export default Home;
