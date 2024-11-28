import "./Footer.scss";

import { Tektur } from 'next/font/google';

import Image from 'next/image';

import vk from '../../../public/iconVK.png' ;
import tg from '../../../public/iconTG.png' ;
import wa from '../../../public/iconWA.png' ;
import ok from '../../../public/iconOK.png' ;

const tektur = Tektur({ 
    subsets: ['ciryllic'],
    weight: ['400']
});

export default function Footer() {
  return (
    <footer className="footer-container">
        <p className={tektur.className}>© 2024 Кислова Полина Юрьевна</p>
        <Image src={vk} alt="VK" className="footerIcon VK" />
        <Image src={tg} alt="Telegram" className="footerIcon TG" />
        <Image src={wa} alt="WatsApp" className="footerIcon WA" />
        <Image src={ok} alt="OK" className="footerIcon OK" />
        <p className={tektur.className}>+7(968)-850-38-20</p>
    </footer>
  );
}