import Head from 'next/head'
import { useState } from 'react';
import NavBar from './src/NavBar';
import Mainbody from './src/Mainbody';
import Myservice from './src/Myservice';
import Myskills from './src/Myskills';
import Footer from './src/Footer';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const title: string = "BlerchPalmer";

  return (
    <div className={darkMode ? "dark": ""}>
      <Head>
        <title>BLERCHPALMER</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon"  href="/akyimagic.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
      </Head>
      <main className="bg-white dark:bg-gray-800">
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} title={title} />
        <div className="px-10">
          <Mainbody />
          <Myservice />
          <Myskills />
          <Footer title={title} />
        </div>
      </main>
    </div>
  )
}
