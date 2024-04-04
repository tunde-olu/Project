'use client';

import BookedFlight from '@/components/Information/BookedFlight';
import Header from '@/components/Information/Header';
import AccountInformation from '@/components/Information/AccountInformation';
import { useState } from 'react';
import FlightItinerary from '@/components/Information/FlightItinerary';

const InformationPage = () => {
	const [pageOption, setPageOption] = useState<'account' | 'booked_flight'>('account');

	const changePageOption = (option: 'account' | 'booked_flight') => {
		setPageOption(() => option);
	};

	return (
		<div className='overflow-x-hidden'>
			<Header />
			<div className='flex flex-col justify-start lg:flex-row gap-6 items-start my-6 px-4 md:px-24 mx-auto'>
				<div className='w-full lg:max-w-[250px] border border-gray-200 rounded-xl space-y-5 text-gray-500 px-8 py-12'>
					<div>
						<button onClick={() => changePageOption('account')}>Account</button>
						<div
							className={`${
								pageOption === 'account' ? 'block' : 'hidden'
							} w-12 h-0.5 bg-primaryColor rounded`}
						/>
					</div>
					<div>
						<button onClick={() => changePageOption('booked_flight')}>
							Booked Flight
						</button>
						<div
							className={`${
								pageOption === 'booked_flight' ? 'block' : 'hidden'
							} w-12 h-0.5 bg-primaryColor rounded`}
						/>
					</div>
				</div>
				{/* {pageOption === 'account' ? <AccountInformation /> : <BookedFlight />} */}
				<FlightItinerary />
			</div>
		</div>
	);
};
export default InformationPage;
