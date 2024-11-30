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
                <main>
                    <section>
                        <LiteratureHeader />
                        <BooksBlock>
                    </section>
                    <section>
                        <LanguageHeader />
                        <UlTheme >
                    </section>
                </main>
            <Footer />
        </>
  );
}
