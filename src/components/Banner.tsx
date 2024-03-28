import Image from 'next/image';
import BannerForm from './BannerForm';

const Banner = () => {
	return (
		<section className='w-full  max-w-screen-xl py-6'>
			<div className='relative w-full h-[324px]  overflow-hidden'>
				<Image
					src={'/images/banner.png'}
					alt='banner'
					fill
					className='object-cover rounded-lg bg-orange-200 w-full'
				/>
				<div className='absolute inset-0'>
					<h2 className='text-center font-medium text-white py-4'>
						Embark on your journey to secure the ideal getaway.
					</h2>
					<BannerForm />
				</div>
			</div>
		</section>
	);
};
export default Banner;
