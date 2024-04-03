import Cards from './Cards';

const Gallery = () => {
	return (
		<section className='py-8 self-stretch -mx-6 lg:mx-0'>
			<div className='w-10/12 max-w-screen-xl mx-auto flex flex-col gap-y-4'>
				<div>
					<h2 className='text-2xl py-2'>Plan your vacation</h2>
					<p className='text-xs text-gray-500'>
						Tempora facere doloribus id aut. Ea maiores esse accusantium laboriosam.
						Quos commodi non assumenda quam illum. Id omnis saepe corrupti incidunt qui
						sed delectus. Eaque minus ducimus.
					</p>
				</div>
				<Cards />
			</div>
		</section>
	);
};
export default Gallery;
