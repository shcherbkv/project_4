import "./MyPhoto.scss";
import Image from 'next/image';
import logo from '../../../../public/photo.jpg';

export default function MyPhoto() {
  return (
    <div>
        <Image src={logo} width="100px" height="200px" alt="My photo" className="pic"/>
    </div>
  );
}


 
