import AboutUs from '@/components/AboutUs';
import Banner from '@/components/Banner';
import ChooseUs from '@/components/ChooseUs';
import Destination from '@/components/Destination';
import Footer from '@/components/Footer';
import ForgetPassword from '@/components/ForgetPassword';
import Gallery from '@/components/Gallery';
import NavBar from '@/components/NavBar';
import Newsletter from '@/components/Newsletter';
import ResetPassword from '@/components/ResetPassword';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';

export default function Home() {
	const showSignInModal = true;
	return (
		<main className='flex flex-col w-full max-w-screen-xl items-center mx-auto overflow-x-hidden'>
			<NavBar />
			{showSignInModal ? <div className='absolute inset-0 bg-blue-200 opacity-50' /> : null}
			{/* <SignIn showSignInModal /> */}
			{/* <SignUp showSignInModal={showSignInModal} /> */}
			<ForgetPassword showSignInModal={showSignInModal} />
			<ResetPassword showSignInModal={showSignInModal} />
			<Banner />
			<Gallery />
			<AboutUs />
			<Destination />
			<ChooseUs />
			<Newsletter />
			<Footer />
		</main>
	);
}
