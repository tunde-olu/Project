'use client';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Information = () => {
	return (
		<div className='w-full max-w-[720px] bg-gray-100 border border-gray-200 rounded p-2'>
			<div className=''>
				<h3 className='bg-[#93e6fd] font-semibold p-4'>Your Information</h3>
				<form className='px-4 space-y-6 mt-10'>
					<div className='flex gap-3'>
						<div className='relative'>
							<input
								type='text'
								className='peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor'
							/>
							<p className='peer-focus:text-primaryColor text-gray-400 text-sm bg-gray-100 z-10 px-2 absolute top-0 left-6 translate-y-[-50%]'>
								First Name
							</p>
						</div>
						<div className='relative'>
							<input
								type='text'
								className='peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor'
							/>
							<p className='peer-focus:text-primaryColor text-gray-400 text-sm bg-gray-100 px-2 absolute top-0 left-6 translate-y-[-50%]'>
								Last Name
							</p>
						</div>
					</div>
					<div className='relative'>
						<PhoneInput
							country={'ng'}
							inputClass='!border !border-gray-400 !focus:border-primaryColor rounded-lg !w-full !h-10 px-4 py-2 focus:outline-none text-primaryColor'
							containerClass='peer'
							placeholder='+234 8000000000'
						/>

						<p className='peer-focus-within:text-primaryColor text-gray-400 text-sm bg-gray-100 px-2 absolute top-0 left-6 translate-y-[-50%]'>
							Phone Number
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Information;
