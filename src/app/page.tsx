import Banner from '@/components/Banner';
import Gallery from '@/components/Gallery';
import NavBar from '@/components/NavBar';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';

export default function Home() {
	const showSignInModal = false;
	return (
		<main className='flex flex-col w-full max-w-screen-xl items-center mx-auto'>
			<NavBar />
			{showSignInModal ? <div className='absolute inset-0 bg-blue-200 opacity-50' /> : null}
			{/* <SignIn showSignInModal /> */}
			<SignUp showSignInModal={showSignInModal} />
			<Banner />
			<Gallery />
		</main>
	);
}
