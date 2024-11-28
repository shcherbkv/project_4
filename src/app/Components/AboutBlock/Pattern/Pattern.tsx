import "./Pattern.scss";

import Image from 'next/image';
import picpat from '../../../../public/pattern1.png';

export default function Pattern() {
	return (
		<>
			<div className="hr1"></div>
			<Image src={picpat} alt="Pattern" className="picPat"/>
			<div className="hr2"></div>
		</>
	);
}

