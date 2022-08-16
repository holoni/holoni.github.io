import Image from 'next/image';
import Base from '../public/base.png';

export default function Index() {
	return (
		<div className="container w-11/12 m-auto">
			<Image src={Base} layout="responsive" />
		</div>
	);
}
