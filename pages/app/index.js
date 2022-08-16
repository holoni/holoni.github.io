import Image from 'next/image';
import NotefiBanner from '../../public/notefi/banner.png';
import Link from 'next/link';

function index() {
	return (
		<div className="container w-11/12 m-auto">
			<br className="m-20" />
			<div className="w-1/3 m-auto">
				<Link href="/policy/notefi">
					<Image
						src={NotefiBanner}
						layout="responsive"
						className="rounded-xl"
					/>
				</Link>
			</div>
		</div>
	);
}

export default index;
