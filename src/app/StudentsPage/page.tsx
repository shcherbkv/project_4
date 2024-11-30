import "../global.scss";
import "./StudentPage.scss";
import Greeting from "../Components/Greeting/Greeting.tsx";
import Navigation from "../Components/Navigation/Navigation.tsx";
import MainBlock from "../Components/MainBlock/MainBlock.tsx";
import AboutBlock from "../Components/AboutBlock/AboutBlock.tsx";
import Footer from "../Components/Footer/Footer.tsx";

import Grade5 from "./Components/Grade5/Grade5.tsx";
import Grade6 from "./Components/Grade6/Grade6.tsx";
import Grade7 from "./Components/Grade7/Grade7.tsx";
import Grade8 from "./Components/Grade8/Grade8.tsx";
import Grade9 from "./Components/Grade9/Grade9.tsx";
import Grade10 from "./Components/Grade10/Grade10.tsx";
import Grade11 from "./Components/Grade11/Grade11.tsx";

import { Bad_Script } from 'next/font/google';

const badScript = Bad_Script({ 
    subsets: ['ciryllic'],
    weight: ['400']
});

export default function Home() {
    return (
        <>
            <header>
                <Greeting />
                <Navigation />
            </header>
            <main className={badScript.className}>
                <section className="grades-container">
                    <Grade5 />
                    <Grade6 />
                    <Grade7 />
                    <Grade8 />
                    <Grade9 />
                    <Grade10 />
                    <Grade11 />
                </section>
            </main>
            <Footer />
        </>
  );
}
