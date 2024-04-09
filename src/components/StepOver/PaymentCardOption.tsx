import { IoMdArrowBack } from 'react-icons/io';
import PayToConfirmBooking1 from './PayToConfirmBooking1';
import PayToConfirmBooking2 from './PayToConfirmBooking2';

const PaymentCardOption = () => {
	const bookingData = [
		{ id: '1', title: 'Booking Amount', amount: '11,470,1543' },
		{ id: '2', title: 'Reservation Fee', amount: '0' },
		{ id: '3', title: 'Booking Amount', amount: '11,470,1543' },
	];
	return (
		<div className='bg-white py-3 my-4 rounded-lg border px-2 md:px-8'>
			<div className='flex justify-between items-center pt-2 pb-4 border-b border-b-gray-300'>
				<div>
					<h4 className='font-semibold'>Passenger Details</h4>
					<p className='text-gray-500 text-sm md:text-base '>
						(Confirm now to secure your reservation)
					</p>
				</div>
				<p className='flex gap-x-2 items-center min-w-fit'>
					Time Left: <span className='text-red-500'>07:23</span>
				</p>
			</div>

			<div className='py-4 pb-4 border-b border-b-gray-300 md:flex md:flex-row-reverse justify-between space-y-8 md:space-y-0'>
				{/* <PayToConfirmBooking1 /> */}
				<PayToConfirmBooking2 />
				<div>
					<h4 className='font-semibold'>Select your payment option</h4>
					<form className='text-gray-800 space-y-2 py-3'>
						{/* TODO: change the radio outline color to the primaryColor */}
						<div className='flex gap-x-2 items-center'>
							<input type='radio' name='' id='' className='accent-primaryColor' />
							<label>Book</label>
						</div>
						<div className='flex gap-x-2 items-center'>
							<input type='radio' name='' id='' className='accent-primaryColor' />
							<label>Card Payment</label>
						</div>
						<div className='flex gap-x-2 items-center'>
							<input type='radio' name='' id='' className='accent-primaryColor' />
							<label>Transfer Payment</label>
						</div>
					</form>
				</div>
			</div>

			<div className='text-sm py-8 px-2'>
				<div className='flex flex-col md:flex-row gap-4 w-full items-start md:items-center md:justify-between text-primaryColor'>
					<button className='flex items-center min-w-fit gap-x-2'>
						<IoMdArrowBack />
						Return to the previous step
					</button>
					<button className='px-6 md:px-16 min-w-fit text-white bg-primaryColor py-2 rounded-lg'>
						Complete Your booking
					</button>
				</div>
			</div>
		</div>
	);
};
export default PaymentCardOption;
