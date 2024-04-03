import Header from '@/components/Information/Header';
import Information from '@/components/Information/Information';

const InformationPage = () => {
	return (
		<div>
			<Header />
			<div className='flex  flex-col md:flex-row gap-4 my-6 px-6 mx-auto'>
				<div className='w-full border border-gray-200 rounded-xl space-y-5 text-gray-500 px-8 py-12'>
					<div>
						<button>Account</button>
						<div className='w-12 h-0.5 bg-primaryColor rounded' />
					</div>
					<div>
						<button>Booked Flight</button>
						<div className='w-12 h-0.5 bg-primaryColor rounded' />
					</div>
				</div>
				<Information />
			</div>
		</div>
	);
};
export default InformationPage;
