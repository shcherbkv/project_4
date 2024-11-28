import "./NavContactsBtn.scss";
import { Rubik_Moonrocks } from 'next/font/google';
import Link from 'next/link';

const rubikMoonrocks = Rubik_Moonrocks({ 
    subsets: ['ciryllic'],
    weight: ['400']
});

export default function NavContactBtn() {
  return (
    <button className="btn-contact"><Link href='../../../ContactsPage' className="link-contacts"><p className={rubikMoonrocks.className}>Контакты</p></Link></button>
  );
}