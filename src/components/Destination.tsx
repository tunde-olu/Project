import Image from 'next/image';

const Destination = () => {
	return (
		<section className='py-16'>
			<div className='w-10/12  mx-auto space-y-8'>
				<div className='space-y-3'>
					<h2 className='text-2xl font-bold capitalize'>
						Trending <span className='text-primaryColor'>destination</span> now days
					</h2>
					<p className='text-gray-500 text-xs'>
						Tempora facere doloribus id aut. Ea maiores esse accusantium laboriosam.
						Quos commodi non assumenda quam illum. Id omnis saepe corrupti incidunt qui
						sed delectus. Eaque minus ducimus.
					</p>
				</div>
				{/* TODO: Horizontal scroll on mobile */}
				<div className='flex gap-x-6 overflow-x-auto wrapper'>
					<div className='relative w-[372px] mx-auto h-[446px] overflow-x-auto'>
						<Image
							src={'/images/jakarta.jpeg'}
							alt='Jakarta'
							fill
							className='rounded-2xl'
						/>
						<h4 className='absolute -top-2 bg-white p-2 left-4 right-4 text-center rounded-2xl font-bold text-2xl'>
							Jakarta
						</h4>
					</div>
					<div className='relative w-[372px] mx-auto h-[446px]'>
						<Image
							src={'/images/dubai.jpeg'}
							alt='Dubai'
							fill
							className='rounded-2xl'
						/>
						<h4 className='absolute -top-2 bg-white p-2 left-4 right-4 text-center rounded-2xl font-bold text-2xl'>
							Dubai
						</h4>
					</div>
					<div className='relative w-[372px] mx-auto h-[446px]'>
						<Image
							src={'/images/london.jpeg'}
							alt='London'
							fill
							className='rounded-2xl'
						/>
						<h4 className='absolute -top-2 bg-white p-2 left-4 right-4 text-center rounded-2xl font-bold text-2xl'>
							London
						</h4>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Destination;
