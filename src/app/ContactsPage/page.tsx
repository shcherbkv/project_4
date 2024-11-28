import "../global.scss";
import Greeting from "../Components/Greeting/Greeting.tsx";
import Navigation from "../Components/Navigation/Navigation.tsx";
import MainBlock from "../Components/MainBlock/MainBlock.tsx";
import AboutBlock from "../Components/AboutBlock/AboutBlock.tsx";
import Footer from "../Components/Footer/Footer.tsx";

export default function Home() {
    return (
        <>
            <header>
                <Greeting />
                <Navigation />
            </header>
            <p>texttexttexttexttexttexttexttexttexttexttexttext</p>
            <Footer />
        </>
  );
}