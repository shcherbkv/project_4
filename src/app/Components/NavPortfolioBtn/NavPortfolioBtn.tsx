import "./NavPortfolioBtn.scss";
import { Rubik_Dirt } from 'next/font/google';
import Link from 'next/link';

const rubikDirt = Rubik_Dirt({ 
    subsets: ['ciryllic'],
    weight: ['400']
});

export default function NavPortfolioBtn() {
  return (
    <button className="btn-portfolio"><Link href='../../../PortfolioPage' className="link-portfolio"><p className={rubikDirt.className}>Портфолио</p></Link></button>
  );
}