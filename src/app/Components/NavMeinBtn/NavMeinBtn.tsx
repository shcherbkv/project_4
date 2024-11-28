import "./NavMeinBtn.scss";
import { Ruslan_Display } from 'next/font/google';
import Link from 'next/link';

const ruslanDisplay = Ruslan_Display({ 
    subsets: ['ciryllic'],
    weight: ['400']
});

export default function NavMeinBtn() {
  return (
    <button className="btn-mein"><Link href='../../../MeinPage' className="link-mein"><p className={ruslanDisplay.className}>Главная</p></Link></button>
  );
}