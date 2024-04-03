import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='py-8 w-full'>
			<div className='px-6 lg:flex justify-between'>
				<div className='space-y-3 max-w-[420px]'>
					<div className='relative w-28 h-8'>
						<Image src={'/images/logo.jpeg'} alt='logo' fill />
					</div>
					<p className='text-xs md:text-sm text-gray-600'>
						Our passion for travel fuels our dedication to exceeding expectations and
						delivering unparalleled value, ensuring that every journey with Airpockets
						is an extraordinary adventure.
					</p>
					<div className='pt-6 space-y-2'>
						<p className='text-primaryColor font-semibold text-sm lg:hidden'>
							Follow us
						</p>
						<div className='space-x-3'>
							<button className='border border-primaryColor rounded-full p-2 lg:border-gray-300'>
								<FaLinkedinIn className='text-primaryColor lg:text-[#333333]' />
							</button>
							<button className='border border-primaryColor rounded-full p-2 lg:border-gray-300'>
								<FaFacebookF className='text-primaryColor lg:text-[#333333]' />
							</button>
							<button className='border border-primaryColor rounded-full p-2 lg:border-gray-300'>
								<FaTwitter className='text-primaryColor lg:text-[#333333]' />
							</button>
						</div>
					</div>
				</div>

				<div className='flex justify-between lg:gap-x-28'>
					<div className='space-y-4 pt-6'>
						<h3 className='font-semibold'>Product</h3>
						<ul className='text-gray-600 space-y-2'>
							<li>
								<Link href={'#'}>About</Link>
							</li>
							<li>
								<Link href={'#'}>Career</Link>
							</li>
						</ul>
					</div>
					<div className='space-y-4 pt-6'>
						<h3 className='font-semibold'>Help</h3>
						<ul className='text-gray-600 space-y-2'>
							<li>
								<Link href={'#'}>FAQ</Link>
							</li>
							<li>
								<Link href={'#'}>Help Center</Link>
							</li>
							<li>
								<Link href={'#'}>Privacy Policy</Link>
							</li>
						</ul>
					</div>
				</div>

				<div>
					<h3 className='font-semibold'>Contact Information</h3>
					<div className='text-gray-600 space-y-2 mt-2'>
						<p>18, Cray Crescent, Ikoyi, Lagos</p>
						<p>+234 701 100 1000</p>
						<p>info@airpocketstravels.com</p>
					</div>
				</div>
			</div>
			<div className='hidden lg:flex mx-auto justify-center mt-8'>
				<ul className='flex gap-x-6 text-gray-700 text-sm'>
					<li>
						<Link href={'#'}>Terms</Link>
					</li>
					<li>
						<Link href={'#'}>Privacy</Link>
					</li>
					<li>
						<Link href={'#'}>Cookies</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};
export default Footer;
