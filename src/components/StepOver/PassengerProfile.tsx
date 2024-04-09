import { ClockIcon } from '@heroicons/react/24/outline';
import { IoAirplane } from 'react-icons/io5';
import { GiGymBag } from 'react-icons/gi';
import Image from 'next/image';
import { RiArrowDropDownLine } from 'react-icons/ri';

const PassengerProfile = () => {
	return (
		<div>
			<div className='bg-white py-3 my-4 rounded-lg border px-2 md:px-4'>
				<div className='lg:flex lg:flex-row-reverse justify-between'>
					<div className='text-primaryColor flex items-center text-sm my-2 lg:my-0'>
						<button>Price Details</button>
						<RiArrowDropDownLine className='w-6 h-6' />
					</div>
					<div className='flex flex-col md:flex-row md:items-center gap-x-10 gap-y-4'>
						<div className='flex gap-2 items-center '>
							<div>
								<div className='relative w-[50px] h-[50px] overflow-hidden mx-auto'>
									<Image
										src='/images/oman_air.png'
										alt='airline'
										fill
										className='rounded'
									/>
								</div>
								<p className='text-gray-500 text-center py-1 text-sm'>Oman Air</p>
							</div>

							<div className='flex flex-col items-center text-center gap-1'>
								<p className='font-bold text-lg'>2:50</p>
								<p className='text-gray-600'>Istanbul (SAW)</p>
							</div>

							<div className='flex flex-col gap-8'>
								<p className='text-gray-500 flex items-center justify-center gap-1'>
									<ClockIcon className='h-6 w-6' />
									19:00
								</p>
								<div className='relative'>
									<div className='border-t border-dashed w-20 border-1 border-t-gray-900' />
									<IoAirplane className='text-primaryColor h-6 w-6 absolute top-0 right-[50%] translate-y-[-50%] translate-x-[50%]' />
								</div>
								<p className='text-gray-500 flex items-center gap-3 justify-center'>
									<GiGymBag className='h-6 w-6' />
									20 kg
								</p>
							</div>

							<div className='flex flex-col items-center gap-1 text-center'>
								<p className='font-bold text-lg'>21:50</p>
								<p className='text-gray-600'>Dubai (DXB)</p>
							</div>
						</div>
						<p className='text-gray-700'>Monday, September 6</p>
					</div>
				</div>

				<div className='py-8 md:py-12 flex items-center justify-between text-sm md:text-base'>
					<p className='text-primaryColor bg-[#dff8fe] px-2 rounded-lg py-1'>Economy</p>
					<p className='text-primaryColor'>
						Your total payment <span>NGN 34,410,462</span>
					</p>
				</div>
			</div>
		</div>
	);
};
export default PassengerProfile;
