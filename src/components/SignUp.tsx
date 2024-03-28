'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';
import { EyeSlashIcon } from '@heroicons/react/24/solid';
import { EyeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
	showSignInModal: boolean;
};

// TODO: The show option should be control by the global state and the SignIn Comp
// should be move to the Page level

const SignUp = ({ showSignInModal }: Props) => {
	if (!showSignInModal) return null;

	const [showPassword, setShowPassword] = useState(false);

	const toggleShowPassword = () => {
		setShowPassword((prevState) => !prevState);
	};

	return (
		<div className='absolute inset-0 z-10'>
			<div className='bg-white w-[80vw] max-w-[480px] mx-auto mt-16 rounded-lg p-2 relative'>
				<button className='ml-auto block'>
					<XMarkIcon className=' h-7 w-7 text-primaryColor' />
				</button>
				<div className='py-6 px-3'>
					<div className='w-36 h-10 mx-auto relative'>
						<Image src={'/images/logo.jpeg'} fill alt='Logo' />
					</div>
					<div className='text-center my-3 space-y-1'>
						<p>Create your account</p>
						<p className='text-sm'>Get started with best of flight prices</p>
					</div>
					<form>
						<div className='space-y-6 mt-10'>
							<div className='relative'>
								<p className='peer-focus-visible:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]'>
									First Name
								</p>
								<input
									type='text'
									className='peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor'
								/>
							</div>
							<div className='relative'>
								<p className='peer-focus-visible:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]'>
									Last Name
								</p>
								<input
									type='text'
									className='peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor'
								/>
							</div>
							<div className='relative'>
								<p className='peer-focus-visible:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]'>
									Phone Number
								</p>
								<input
									type='number'
									className='peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor'
								/>
							</div>
							<div className='relative'>
								<p className='peer-focus-visible:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]'>
									Gender
								</p>
								<input
									type='text'
									className='peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor'
								/>
							</div>
							<div className='relative'>
								<p className='peer-focus-visible:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]'>
									Email address
								</p>
								<input
									type='email'
									className='peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor'
								/>
							</div>
							<div className='relative'>
								<p className='peer-focus-visible:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]'>
									Country
								</p>
								<input
									type='text'
									className='peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor'
								/>
							</div>
							<div className='relative'>
								<p className='peer-focus-visible:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]'>
									Password
								</p>
								<input
									type={showPassword ? 'text' : 'password'}
									className='peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor'
								/>
								<span
									className='absolute right-6 translate-y-[100%] text-primaryColor'
									onClick={toggleShowPassword}
								>
									{showPassword ? (
										<EyeSlashIcon className='w-4 h-4' />
									) : (
										<EyeIcon className='w-4 h-4' />
									)}
								</span>
							</div>
						</div>
						<div className='flex text-xs justify-between item-center my-2'>
							<div className='space-x-1 flex items-start mt-8'>
								<input type='checkbox' name='' id='' className='mt-1 mr-2' />
								<span>
									By entering and registering on the site, I agree to our{' '}
									<Link href='#' className='text-SecondaryColor'>
										Terms & Conditions
									</Link>
								</span>
							</div>
						</div>
						<button className='bg-gray-100 w-full rounded-md p-3 text-gray-500 mt-10'>
							Sign Up
						</button>
						<div className='text-sm flex flex-col items-center justify-between py-4'>
							<button>Already have an account?</button>
							<button className='text-SecondaryColor'>Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
