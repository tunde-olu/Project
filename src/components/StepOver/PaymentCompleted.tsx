import Image from 'next/image';

const PaymentCompleted = () => {
	return (
		<div className='h-full'>
			<div className='flex items-center justify-center bg-[#F3FDFA] text-[#00966D] gap-x-2 py-2'>
				<div className='relative w-10 h-10'>
					<Image src={'/icons/tick-circle.svg'} fill alt='tick-circle' />
				</div>
				Your payment has been successfully completed.
			</div>
			<p className='text-sm md:text-base text-gray-600 text-center mt-8'>
				Thank you, your booking order will be processed soon. A confirmation email with all
				the details has been sent to{' '}
				<span className='text-[#1D91CC]'>nafisatdoe@gmail.com.</span>
			</p>
			<div className='text-sm md:text-base flex justify-center items- gap-x-2 my-36'>
				<button className='flex items-center justify-center gap-x-1 bg-[#1D91CC] text-white rounded-lg text-center w-[184px] py-2'>
					<Image src={'/icons/arrow-down.svg'} alt='arrow-down' width={20} height={40} />
					Download ticket
				</button>
				<button className='flex items-center justify-center gap-x-1 w-[184px] text-[#1D91CC] border border-[#1D91CC] rounded-lg text-center py-2'>
					<Image src={'/icons/back-square.svg'} alt='arrow-down' width={20} height={40} />
					Return to main page
				</button>
			</div>
		</div>
	);
};
export default PaymentCompleted;
