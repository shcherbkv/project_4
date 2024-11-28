import "./NavStudentsBtn.scss";
import { Rubik_Distressed } from 'next/font/google';
import Link from 'next/link';

const rubikDistressed = Rubik_Distressed({ 
    subsets: ['ciryllic'],
    weight: ['400']
});



export default function NavStudentsBtn() {
  return (
    <button className="btn-students"><Link href='../../../StudentsPage' className="link-students"><p className={rubikDistressed.className}>Ученикам</p></Link></button>
  );
}