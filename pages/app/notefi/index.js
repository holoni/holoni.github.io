import Link from 'next/link';
import PlaystoreLogo from '../../../components/PlaystoreLogo';

function index() {
	return (
		<div className="container w-11/12 m-auto">
			<br className="m-20" />
			<div className="w-1/3 m-auto">
				<h1 className="text-4xl tracking-wider">NoteFi</h1>
				<p>
					NoteFi is a lightweight note-taking application that is easy and
					simple to use.
				</p>
				<br />
				<span className="tracking-wider">Feature :</span>
				<ul>
					<li>- Search your notes.</li>
					<li>- Change Color Scheme.</li>
					<li>- Dark Mode.</li>
					<li>- Export notes.</li>
				</ul>
				<br />
				<a
					target="_blank"
					href="https://play.google.com/store/apps/details?id=com.holoni.notefi"
				>
					<PlaystoreLogo />
				</a>
				<Link href="/policy/notefi">
					<a className="tracking-wider text-xl font-bold">Policy privacy</a>
				</Link>
			</div>
		</div>
	);
}

export default index;
