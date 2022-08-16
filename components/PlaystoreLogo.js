import Image from 'next/image';

import PlayBanner from '../public/playstore.png';

function PlaystoreLogo() {
	return (
		<>
			<Image src={PlayBanner} alt="notefi" layout="responsive" />
		</>
	);
}

export default PlaystoreLogo;
