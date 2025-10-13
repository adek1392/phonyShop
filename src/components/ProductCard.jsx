export default function ProductCard({ product }) {
	return (
		<>
			<li
				key={product.id}
				className=' hover:scale-105 transition-scale duration-300  flex-none w-[100%]  sm:w-[45%] md:w-[40%] lg:w-[30%] xl:w-[20%] h-105 px-2 py-5 snap-center bg-linear-to-t from-sky-500 to-indigo-500  shadow-md shadow-blue-300  rounded-md text-center text-sm font-semibold text-white cursor-pointer   '>
				<div className='flex flex-col justify-between items-center gap-1 h-full'>
					<img className='  h-60 object-contain ' src={product.image} alt={product.title} />
					<p className='text-gray-100'>{product.title}</p>
					<p className='text-xl'>{product.price.toFixed(2)}$</p>
					<button className=' cursor-pointer bg-linear-to-r from-emerald-400 to-teal-500 px-3 py-1 rounded-xl text-white transition-all duration-400 hover:scale-105 hover:shadow-lg  hover:text-gray-900 lg:text-lg '>
						Buy now
					</button>
				</div>
			</li>
		</>
	)
}
