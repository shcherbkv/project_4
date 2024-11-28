import "./AboutBlock.scss";

import Pattern from "./Pattern/Pattern.tsx";
import AboutHeading from "./AboutHeading/AboutHeading.tsx";
import AboutText from "./AboutText/AboutText.tsx";

export default function AboutBlock() {
  return (
    <section className="sectionAbout">
        <div className="about-container1">
            <Pattern />
        </div>
        <AboutHeading />
        <AboutText />
        <div className="about-container2">
            <Pattern />
        </div>
        <div className="fish"></div>
    </section>
  );
}