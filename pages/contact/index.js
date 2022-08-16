import React from 'react';

function index() {
	return (
		<div className="container w-11/12 m-auto">
			<br className="m-20" />
			<div className="md:w-1/3 m-auto">
				<h1 className="text-4xl tracking-wider font-bold">Contact Developer</h1>
				<p className="text-lg">You can contact us with email below.</p>
				<span className="text-lg tracking-wider">
					email :{' '}
					<a className="text-red-500" href="mailto:cs.holoni@gmail.com">
						cs.holoni@gmail.com
					</a>
				</span>
			</div>
		</div>
	);
}

export default index;
