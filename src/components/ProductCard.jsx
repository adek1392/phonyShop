import { useNavigate } from 'react-router-dom'
import Button from './Button'

export default function ProductCard({ product }) {
	const navigate = useNavigate()

	const handleCardClick = () => {
		navigate(`/product/${product.id}`)
	}

	const handleBuyNow = (e) => {
		e.stopPropagation()

		console.log(`you buy product id: ${product.id}`);
	}
	return (
		<>
			<li
				key={product.id}
				onClick={handleCardClick}
				className=' hover:scale-95 transition-scale duration-300  flex-none w-[100%]  sm:w-[45%] md:w-[40%] lg:w-[30%] xl:w-[20%] h-105 px-2 py-5 snap-center bg-linear-to-t from-sky-500 to-indigo-500  shadow-md shadow-blue-300  rounded-md text-center text-sm font-semibold text-white cursor-pointer   '>
				<div className='flex flex-col justify-between items-center gap-1 h-full'>
					<img className='  h-60 object-contain ' src={product.image} alt={product.title} />
					<p className='text-gray-100'>{product.title}</p>
					<p className='text-xl'>{product.price.toFixed(2)}$</p>
					<Button onClick={handleBuyNow}>Buy now</Button>
				</div>
			</li>
		</>
	)
}
