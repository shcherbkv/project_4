import "../global.scss";
import Greeting from "../Components/Greeting/Greeting.tsx";
import Navigation from "../Components/Navigation/Navigation.tsx";
import Footer from "../Components/Footer/Footer.tsx";


export default function Home() {
    return (
        <>
            <header>
                <Greeting />
                <Navigation />
            </header>
                <p>10101010101010101010101010101010101010101010101010101010</p>
            <Footer />
        </>
  );
}