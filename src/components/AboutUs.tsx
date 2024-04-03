import { HeartIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const AboutUs = () => {
	return (
		<section className='px-4 py-8 self-stretch'>
			<div className='flex flex-col gap-y-8 md:flex-row-reverse justify-between items-center md:w-10/12 md:mx-auto md:gap-x-20'>
				<div className='space-y-4 max-w-screen-sm'>
					<h2 className='text-primaryColor text-2xl font-bold'>About Us</h2>
					<p className='text-sm text-gray-500'>
						Tempora facere doloribus id aut. Ea maiores esse accusantium laboriosam.
						Quos commodi non assumenda quam illum.
					</p>
					<div className='space-y-2'>
						<div className='flex justify-between items-center px-4 max-w-[300px]'>
							<div className='h-2 w-2 bg-primaryColor rotate-45' />
							<p className='max-w-[250px] pl-2 text-xs font-semibold'>
								Assumenda nobis sit deserunt dolorem repudiandae occaecati quisquam.
							</p>
						</div>
						<div className='flex justify-between items-center px-4 max-w-[300px]'>
							<div className='h-2 w-2 bg-primaryColor rotate-45' />
							<p className='max-w-[250px] pl-2 text-xs font-semibold'>
								Beatae aut beatae sed aliquid et accusamus vel.
							</p>
						</div>
						<div className='flex justify-between items-center px-4 max-w-[300px]'>
							<div className='h-2 w-2 bg-primaryColor rotate-45' />
							<p className='max-w-[250px] pl-2 text-xs font-semibold'>
								Dolores qui nihil quaerat ducimus fugit aut praesentium.
							</p>
						</div>
						<div className='flex justify-between items-center px-4 max-w-[300px]'>
							<div className='h-2 w-2 bg-primaryColor rotate-45' />
							<p className='max-w-[250px] pl-2 text-xs font-semibold'>
								Necessitatibus ut culpa molestias deleniti porro maxime enim sed
								vel.
							</p>
						</div>
					</div>
				</div>
				<div>
					<div className='relative w-[248px] md:w-[280px] h-[300px]'>
						<Image
							src={'/images/about_us.jpeg'}
							fill
							alt='hill'
							className='rounded-lg'
						/>
						<div className='bg-white rounded-lg right-0 top-0 translate-x-[30%] translate-y-[10%] absolute py-2 px-[9px] shadow-xl shadow-gray-600 w-[186px] space-y-4'>
							<div className='relative w-[168px] h-[122px] overflow-hidden'>
								<Image
									src={'/images/about_us_overlay.jpeg'}
									fill
									alt='living room'
									className='rounded-lg'
								/>
								<HeartIcon className='w-4 h-4 text-gray-700 z-10 absolute top-2 right-2' />
							</div>
							<div>
								<div className='flex justify-between items-center text-xs'>
									<h3 className='font-bold'>culpa est similique</h3>
									<p className='flex items-center font-semibold'>
										<StarIcon className='w-3 h-3 text-black' /> 4.92
									</p>
								</div>
								<p className='text-xs text-gray-500 text-[10px] md:text-xs'>
									Voluptatibus nemo amet voluptatem quia ipsa eum. Est ut
									voluptas.
								</p>
								<hr className='border-dotted my-2 text-gray-500' />
								<div className='flex text-xs justify-between items-center text-black font-semibold'>
									<p>
										$139.00{' '}
										<span className='text-gray-500 font-normal text-[10px] md:text-xs'>
											Night
										</span>
									</p>
									<p className='flex items-center gap-x-1'>
										<MapPinIcon className='w-3 h-3 text-primaryColor' />
										India
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default AboutUs;
