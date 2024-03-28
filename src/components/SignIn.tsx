import { XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	showSignInModal: boolean;
};

// TODO: The show option should be control by the global state and the SignIn Comp
// should be move to the Page level

const SignIn = ({ showSignInModal }: Props) => {
	if (!showSignInModal) return null;
	return (
		<div className='absolute inset-0 z-10'>
			<div className='bg-white w-[80vw] mx-auto mt-16 rounded-lg p-2 relative'>
				<button className='ml-auto block'>
					<XMarkIcon className=' h-7 w-7 text-primaryColor' />
				</button>
				<div className='py-6 px-3'>
					<div className='w-36 h-10 mx-auto relative'>
						<Image src={'/images/logo.jpeg'} fill alt='Logo' />
					</div>
					<div className='text-center my-3 space-y-1'>
						<p>Login</p>
						<p className='text-sm'>Enter Your Login Details</p>
					</div>
					<form>
						<div className='space-y-6 mt-10'>
							<div className='relative'>
								<p className='peer-focus-visible:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]'>
									Email Address
								</p>
								<input
									type='email'
									className='peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor'
								/>
							</div>
							<div className='relative'>
								<p className='peer-focus-visible:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]'>
									Password
								</p>
								<input
									type='password'
									className='peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor'
								/>
							</div>
						</div>
						<div className='flex text-xs justify-between item-center my-2'>
							<div className='space-x-1 flex items-center'>
								<input type='checkbox' name='' id='' />
								<span>Remember Password</span>
							</div>
							<Link href='#' className='text-SecondaryColor'>
								Forget Password
							</Link>
						</div>
						<button className='bg-gray-100 w-full rounded-md p-3 text-gray-500 mt-10'>
							Log In
						</button>
						<div className='text-sm flex flex-col items-center justify-between py-4'>
							<button>Don't have an account?</button>
							<button className='text-SecondaryColor'>Create Account</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
