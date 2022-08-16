import Image from 'next/image';
import NotefiBanner from '../public/notefi/banner.png';

function NoteFi() {
	return (
		<>
			<Image src={NotefiBanner} alt="notefi" layout="responsive" />
		</>
	);
}

export default NoteFi;
