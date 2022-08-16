import React, { Children } from 'react';
import Header from './Header';

function Layout({ children }) {
	return (
		<div className="container m-auto">
			<Header />
			<main>{children}</main>
		</div>
	);
}

export default Layout;
