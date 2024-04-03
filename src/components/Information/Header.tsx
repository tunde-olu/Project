import Image from 'next/image';

const Header = () => {
	return (
		<header>
			<div className='mx-auto'>
				<div className='relative w-screen h-[120px] '>
					<Image src={'/images/header.png'} alt='banner' fill objectFit='cover' />
				</div>
			</div>
		</header>
	);
};
export default Header;
