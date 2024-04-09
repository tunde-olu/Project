import PassengerDetails from '@/components/StepOver/PassengerDetails';
import PassengerProfile from '@/components/StepOver/PassengerProfile';
import PaymentCardOption from '@/components/StepOver/PaymentCardOption';

const StepOverPage = () => {
	return (
		<div>
			{/* Nav bar  */}
			<div className='w-full h-24'></div>

			<div className='mx-auto px-4 max-w-screen-lg'>
				{/* Step-over tab to be replaced */}
				<div></div>
				<PassengerProfile />
				{/* <PassengerDetails /> */}
				<PaymentCardOption />
			</div>
		</div>
	);
};
export default StepOverPage;
