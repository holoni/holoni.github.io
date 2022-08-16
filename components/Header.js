import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
	const router = useRouter();
	const routepath = router.pathname;

	return (
		<div className="flex flex-row">
			<div className="flex flex-row p-8 font-bold m-auto">
				<Link href="/">
					<a className={routepath == '/' ? 'link-active' : 'link'}>Home</a>
				</Link>
				<Link href="/app">
					<a className={routepath == '/app' ? 'link-active' : 'link'}>
						List App
					</a>
				</Link>
				<Link href="/contact">
					<a className={routepath == '/contact' ? 'link-active' : 'link'}>
						Contact
					</a>
				</Link>
			</div>
		</div>
	);
}

export default Header;
