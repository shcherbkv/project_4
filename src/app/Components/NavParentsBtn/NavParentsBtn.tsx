import "./NavParentsBtn.scss";
import { Kablammo } from 'next/font/google';
import Link from 'next/link';

const kablammo = Kablammo({ 
    subsets: ['ciryllic'],
    weight: ['400']
});

export default function NavParentsBtn() {
  return (
    <button className="btn-parents"><Link href='../../../ParentsPage' className="link-parents"><p className={kablammo.className}>Родителям</p></Link></button>
  );
}