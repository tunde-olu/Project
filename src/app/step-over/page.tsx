import PassengerDetails from '@/components/StepOver/PassengerDetails';
import PassengerProfile from '@/components/StepOver/PassengerProfile';
import PaymentCardOption from '@/components/StepOver/PaymentCardOption';
import PaymentCompleted from '@/components/StepOver/PaymentCompleted';

const StepOverPage = () => {
	return (
		<div>
			{/* Nav bar  */}
			<div className='w-full h-24'></div>

			<div className='mx-auto px-4 max-w-screen-lg'>
				{/* Step-over tab to be replaced */}
				<div></div>
				{/* <PassengerProfile /> */}
				{/* <PassengerDetails /> */}
				{/* <PaymentCardOption /> */}
				<PaymentCompleted />
			</div>
		</div>
	);
};
export default StepOverPage;
