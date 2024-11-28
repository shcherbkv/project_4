import "./Navigation.scss";

import NavMeinBtn from "../NavMeinBtn/NavMeinBtn.tsx";
import NavPortfolioBtn from "../NavPortfolioBtn/NavPortfolioBtn.tsx";
import NavStudentsBtn from "../NavStudentsBtn/NavStudentsBtn.tsx";
import NavParentsBtn from "../NavParentsBtn/NavParentsBtn.tsx";
import NavContactsBtn from "../NavContactsBtn/NavContactsBtn.tsx";

export default function Navigation() {
  return (
    <nav className="nav-container">
        <NavMeinBtn />
        <NavPortfolioBtn />
        <NavStudentsBtn />
        <NavParentsBtn />
        <NavContactsBtn />
    </nav>
  );
}