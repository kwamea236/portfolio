import Head from 'next/head'
import { useState } from 'react';
import NavBar from './src/NavBar.js';
import Mainbody from './src/Mainbody.js';
import Myservice from './src/Myservice.js';
import Footer from './src/Footer.js';
import Contact from './contact/index.js';



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const title = "Blerch";

  return (
    <div className={darkMode ? "dark": ""}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon"  href="/akyimagic.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Dancing+Script&family=Great+Vibes&family=Poppins&display=swap" rel="stylesheet" />

      </Head>
      <main className="bg-white">
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} title={title} />
        <div>
          <Mainbody />
          <Myservice />
          <Contact />
          <Footer title={title} />
        </div>
      </main>
    </div>
  )
}