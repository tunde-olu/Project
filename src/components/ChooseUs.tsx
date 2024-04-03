import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const randomPersons = [
	'/images/random_1.jpeg',
	'/images/random_2.jpeg',
	'/images/random_3.jpeg',
	'/images/random_4.jpeg',
];

const ChooseUs = () => {
	return (
		<section className='py-16'>
			<div className='w-full px-2 mx-auto space-y-16'>
				<div className='lg:flex justify-between'>
					<div className='space-y-3'>
						<h2 className='text-2xl font-bold capitalize'>
							<span className='text-primaryColor'>Why</span> choose us
						</h2>
						<p className='text-gray-500 text-xs'>
							Tempora facere doloribus id aut. Ea maiores esse accusantium laboriosam.
							Quos commodi non assumenda quam illum.
						</p>
					</div>
					<div className='hidden lg:flex gap-x-4'>
						<button className='border rounded-md p-4 border-primaryColor'>
							<ChevronLeftIcon className='w-4 h-4 text-primaryColor  rounded-md' />
						</button>
						<button className='border rounded-md p-4 border-primaryColor bg-primaryColor'>
							<ChevronRightIcon className='w-4 h-4 text-white' />
						</button>
					</div>
				</div>
				{/* TODO: Horizontal scroll on mobile: remove the "flex-wrap" below */}
				{/* <div className='flex gap-x-4 gap-y-10 pt-8 py-4 w-full max-w-[30rem] min-w-full overflow-x-auto wrapper md:max-w-full'> */}
				<div className='flex gap-x-4 gap-y-10 pt-8 py-4 w-full max-w-[30rem] min-w-full overflow-x-auto wrapper md:max-w-full'>
					{randomPersons.map((randomPerson) => (
						<div className='relative bg-white shadow shadow-gray-300 pt-8 py-4 px-2 w-full max-w-[320px] mx-auto rounded-lg space-y-4'>
							<div className='absolute top-0 right-[50%] translate-x-[50%] translate-y-[-50%] w-[51px] h-[51px]'>
								<Image
									src={randomPerson!}
									alt='random'
									fill
									className='rounded-full'
								/>
							</div>
							<p className='text-xs text-gray-500 text-center'>
								Odit deserunt quia et sed repellendus veniam totam. Illo magnam
								perferendis. Impedit laborum ipsa doloremque rerum. Est rerum aut
								dolorum et omnis a.
							</p>
							<div className='flex justify-between'>
								<span className='flex item-center gap-x-1'>
									<StarIcon className='w-4 h-4 text-[#DABE29]' />
									<StarIcon className='w-4 h-4 text-[#DABE29]' />
									<StarIcon className='w-4 h-4 text-[#DABE29]' />
									<StarIcon className='w-4 h-4 text-[#DABE29]' />
									<StarIcon className='w-4 h-4 text-[#DABE29]' />
								</span>
								<div>
									<h4 className='font-bold text-sm'>Carolyn Jacobson</h4>
									<p className='text-xs text-gray-500'>Brazil</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default ChooseUs;
