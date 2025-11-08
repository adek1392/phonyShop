import Button from '../components/Button'
import { useFetchProducts } from '../hook/useFetchProducts'
import { useParams } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CartContext } from '../futures/CartContext'
import TrustSection from '../components/TrustSection'

export default function CardDetails() {
	const { id } = useParams()
	const { products, loading, error } = useFetchProducts(`/${id}`)
	const product = Array.isArray(products) ? products[0] : products
	const [quantity, setQuantity] = useState(1)

	const { dispatch } = useContext(CartContext)

	const decrementQuantity = () => {
		setQuantity(prev => Math.max(1, prev - 1))
	}

	const incrementQuantity = () => {
		setQuantity(prev => prev + 1)
	}

	const handleAddToCart = () => {
		if (!product) return

		dispatch({
			type: 'Add',
			payload: {
				id: product.id,
				title: product.title,
				price: product.price,
				image: product.image,
				quantity: quantity,
			},
		})

		setQuantity(1)
	}

	if (loading) {
		return (
			<div className='flex justify-center items-center h-screen'>
				<p className='text-center text-xl p-4 text-blue-600 animate-pulse'>Loading product...</p>
			</div>
		)
	}

	if (error) {
		return (
			<div className=' flex justify-center items-start w-full h-screen  '>
				<div className='   p-8 text-center  text-red-700 rounded-xl max-w-lg mx-auto mt-10 '>
					<h2 className='text-2xl font-bold'>Data download error</h2>
					<p>{error}</p>
				</div>
			</div>
		)
	}

	const h1Classes = ' text-3xl lg:text-4xl xl:text-5xl font-bold '
	const btnQuantity = 'cursor-pointer'
	const iconCss = 'w-7 h-7 text-white '

	return (
		<main>
			<div className=' flex flex-col items-center   gap-5  px-4 py-8  lg:flex-row  lg:px-10 lg:pt-16 lg:pb-10   '>
				<div className='lg:w-1/2 lg:flex lg:justify-center'>
					<img src={product.image} alt={product.title} fetchPriority='high' loading='eager' />
				</div>

				<div className='lg:w-1/2'>
					<div>
						<h1 className={`${h1Classes}`}>{product.title}</h1>
						<p className='  mt-2 text-2xl font-semibold text-emerald-500'>{product.price.toFixed(2)}$</p>
					</div>

					<div className='flex flex-col   gap-4 md:flex-row md:mt-2 '>
						<div className='flex items-center justify-evenly mt-2 px-3 py-1 gap-2 bg-gray-900 rounded-2xl md:mt-0 md:w-[20%] lg:w-[30%] '>
							<button onClick={decrementQuantity} className={btnQuantity} aria-label='minus'>
								<svg
									className={iconCss}
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 -960 960 960'
									fill='currentColor'>
									<path d='M200-440v-80h560v80H200Z' />
								</svg>
							</button>
							<p className='text-lg text-white font-bold drop-shadow-xl'>{quantity}</p>
							<button onClick={incrementQuantity} className={btnQuantity} aria-label='plus'>
								<svg
									className={iconCss}
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 -960 960 960'
									fill='currentColor'>
									<path d='M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z' />
								</svg>
							</button>
						</div>

						<Button onClick={handleAddToCart} className=' md:w-[80%] lg:w-[70%]'>
							Buy Now
						</Button>
					</div>

					<div className='mt-10'>
						<p>{product.description}</p>
					</div>
				</div>
			</div>

			<TrustSection />
		</main>
	)
}
