'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

// TODO: Mobile-view not yet done

const NavBar = () => {
	const [navOpen, setNavOpen] = useState(false);

	const toggleNavOptions = () => {
		setNavOpen((prev) => !prev);
	};

	return (
		<header className={`w-full ${navOpen ? 'h-screen' : ''}`}>
			<nav className='text-sm flex items-center justify-between max-w-screen-xl w-full px-2 py-4'>
				<div className='flex w-1/2 justify-between items-center'>
					<Image src='/images/logo.jpeg' width={100} height={40} alt='logo' />
					<div className='hidden lg:flex gap-x-3 text-gray-500'>
						<ul>
							<Link href={'/'}>Home</Link>
						</ul>
						<ul>
							<Link href={'/about'}>About Us</Link>
						</ul>
						<ul>
							<Link href={'/flight'}>Flight</Link>
						</ul>
					</div>
				</div>
				<div className='hidden lg:flex gap-x-4 items-center'>
					<ul>
						<Link href={'sign-in'}>Sign In</Link>
					</ul>
					<ul className='bg-primaryColor px-4 py-2 rounded-md'>
						<Link href={'sign-up'}>Sign Up</Link>
					</ul>
				</div>
				<div className='lg:hidden'>
					{navOpen ? (
						<XMarkIcon
							className='h-7 w-7 text-primaryColor'
							onClick={toggleNavOptions}
						/>
					) : (
						<Bars3Icon
							className='h-7 w-7 text-primaryColor'
							onClick={toggleNavOptions}
						/>
					)}
				</div>
			</nav>
			{navOpen && (
				<div className='bg-gray-100 py-10 h-screen'>
					<div className='flex flex-col justify-between mx-4 h-[60%]'>
						<ul className='space-y-5 text-xl'>
							<li>
								<Link href={'/'} className='cursor-pointer'>
									Home
								</Link>
							</li>
							<li>
								<Link href={'about-us'} className='cursor-pointer'>
									About Us
								</Link>
							</li>
							<li>
								<Link href={'flights'} className='cursor-pointer'>
									Flights
								</Link>
							</li>
						</ul>
						<div className='flex flex-col gap-2'>
							<button className='py-3'>
								<Link href={'/sign-in'}>Sign In</Link>
							</button>
							<button className='bg-[#03C3F8] rounded-lg py-3 text-white'>
								<Link href={'/sign-up'}>Sign Up</Link>
							</button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

// const NavBar = () => {
// 	return (
// 		<nav className='text-xs flex items-center justify-between max-w-screen-xl w-full'>
// 			<div>
// 				<Image src='/images/logo.jpeg' width={100} height={40} alt='logo' />
// 			</div>
// 			{/* TODO: Current navigated page color should be black */}
// 			<div className='flex gap-x-2 text-gray-500'>
// 				<ul>
// 					<Link href={'/'}>Home</Link>
// 				</ul>
// 				<ul>
// 					<Link href={'/about'}>About Us</Link>
// 				</ul>
// 				<ul>
// 					<Link href={'/flight'}>Flight</Link>
// 				</ul>
// 			</div>
// 			<div className='flex gap-x-4 items-center'>
// 				<ul>
// 					<Link href={'sign-in'}>Sign In</Link>
// 				</ul>
// 				<ul className='bg-primaryColor px-4 py-2 rounded-md'>
// 					<Link href={'sign-up'}>Sign Up</Link>
// 				</ul>
// 			</div>
// 		</nav>
// 	);
// };

export default NavBar;
