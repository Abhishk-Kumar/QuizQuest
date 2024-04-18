import React from 'react';

function Footer() {
	return (
		<footer className="py-6 bg-gray-900 text-gray-50 mt-10">
			<div className="container mx-auto flex flex-col px-5 justify-between sm:flex-row items-center">
				<p className="text-xs">© 2024 Nuralam Mondal. All rights reserved.</p>
				<div className="flex items-center mt-4 sm:mt-0">
					<p>Made with ❤️ by Abhishek Kumar </p>
				</div>
			</div>
			<div className="container mx-auto mt-4 text-center">
				<p className="text-xs">This UI and content were generated by Ai and edited by Nuralam Mondal .</p>
			</div>
		</footer>
	);
}

export default Footer;
