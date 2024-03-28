import Image from 'next/image';

const Cards = () => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-20 mx-auto w-full'>
			<div className='overflow-hidden relative w-full max-w-[480px] mx-auto h-[300px]'>
				<Image src={'/images/kish.jpeg'} fill alt='kish' className='rounded-md' />
				<div className='absolute inset-0 bg-gradient-to-tr from-black via-transparent  to-[#444] rounded-md' />
				<div className='absolute bottom-16 text-center lg:text-right h-[80px] w-full p-4 text-white space-y-2'>
					<h4 className='font-bold text-2xl lg:text-xl'>The best swimming season</h4>
					<p className='text-base lg:text-sm border inline-block px-1 py-2 rounded-md'>
						Buying Kish flight tickets
					</p>
				</div>
			</div>
			<div className='overflow-hidden relative w-full max-w-[480px] mx-auto h-[300px]'>
				<Image src={'/images/turkiye.jpeg'} alt='kish' fill className='rounded-md' />
				<div className='absolute inset-0 bg-gradient-to-tr from-black via-transparent  to-[#444] rounded-md' />
				<div className='absolute bottom-16 text-center lg:text-right h-[80px] w-full p-4 text-white space-y-2'>
					<h4 className='font-bold text-2xl lg:text-xl'>Travel to Türkiye</h4>
					<p className='text-base lg:text-sm border inline-block px-1 py-2 rounded-md'>
						Buying Kish flight tickets
					</p>
				</div>
			</div>
			<div className='space-y-[10px] w-full max-w-[480px] mx-auto'>
				<div className='relative h-[140px] w-full'>
					<Image
						src={'/images/world_history_art.jpeg'}
						fill
						alt='kish'
						className='rounded-md'
					/>
					<div className='absolute inset-0 bg-gradient-to-tr from-black via-transparent  to-[#444] rounded-md' />
					<div className='absolute bottom-12 text-center lg:text-right h-[80px] w-full p-4 text-white space-y-2'>
						<h4 className='font-bold text-2xl lg:text-xl'>
							A world of history and art
						</h4>
						<p className='text-base lg:text-sm border inline-block px-1 py-2 rounded-md'>
							Buy flight tickets to Shiraz
						</p>
					</div>
				</div>
				<div className='relative h-[140px] w-full'>
					<Image src={'/images/desert.jpeg'} fill alt='kish' className='rounded-md' />
					<div className='absolute inset-0 bg-gradient-to-tr from-black via-transparent  to-[#444] rounded-md' />
					<div className='absolute bottom-12 text-center lg:text-right h-[80px] w-full p-4 text-white space-y-2'>
						<h4 className='font-bold text-2xl lg:text-xl'>Wonder in the desert</h4>
						<p className='text-base lg:text-sm border inline-block px-1 py-2 rounded-md'>
							Buying Dubai flight tickets
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Cards;
