import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const Newsletter = () => {
	return (
		<section className='py-16 px-2 w-full'>
			<div className='w-full px-2 lg:px-10 mx-auto space-y-16 bg-[#EEECEC] rounded-md shadow-lg shadow-slate-300 max-h-[290px] overflow-y-visible lg:flex items-end justify-between'>
				<div className='space-y-4 py-8 self-center'>
					<h2 className='text-primaryColor font-bold text-2xl lg:text-3xl'>
						Subscibe to Our Newsletter
					</h2>
					<p className='text-xs text-gray-600 lg:text-sm'>
						Get weekly update about our product on your email, no spam guaranteed we
						promise ✌️
					</p>
					<form>
						<div className='relative'>
							<span className='absolute left-4 top-[50%] translate-y-[-50%] bg-[#F8F8F8] p-2'>
								<EnvelopeIcon className='h-4 w-4' />
							</span>
							<input
								type='email'
								placeholder='youremail123@gmail.com'
								className='bg-white py-4 pl-14 text-gray-600 focus:outline-none text-xs lg:text-sm w-[90%]'
							/>
							<button
								type='submit'
								className='absolute top-4 right-0  py-3 px-6 bg-primaryColor text-white text-sm'
							>
								SUBSCRIBE
							</button>
						</div>
					</form>
				</div>
				<div className='hidden lg:block relative w-[458px] h-[358px]'>
					<Image src={'/images/newsletter.png'} alt='newsletter' fill className='' />
				</div>
			</div>
		</section>
	);
};
export default Newsletter;
