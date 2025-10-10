import { useState, useEffect, useRef } from 'react'

export default function Home() {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const scrollContainerRef = useRef(null)

	async function fetchProducts() {
		const url = 'https://fakestoreapi.com/products?limit=6'
		setLoading(true)
		try {
			const response = await fetch(url)
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`)
			}

			const productData = await response.json()
			console.log(productData)
			setProducts(productData)
		} catch (error) {
			console.error(error.message)
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}
	useEffect(() => {
		fetchProducts()
	}, [])

	const scroll = scrollOffset => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollLeft += scrollOffset
		}
	}

	if (loading) {
		return <main className=' w-full h-screen text-center p-8 text-lg'>Loading products...</main>
	}
	if (error) {
		return (
			<main className=' w-full h-screen text-center p-8 text-red-600 text-lg'>Error while loading data: {error}</main>
		)
	}

	const h2Classes = 'text-center text-2xl lg:text-3xl xl:text-4xl font-semibold mt-5 mb-3'

	return (
		<main>
			<section className=" relative flex items-center justify-center  bg-[url('/img/shopping-small.jpg')] bg-cover bg-center   bg-no-repeat   h-70 z-10 sm:h-85 md:h-100 lg:bg-[url('/img/shopping-big.jpg')] xl:h-120 ">
				<div className='absolute bg-black opacity-65 inset-0'></div>
				<p className=' relative text-white  p-2 text-center text-3xl font-semibold sm:text-4xl md:p-4 md:text-left md:text-5xl'>
					Welcome in phonyShop !
				</p>
			</section>

			<section className='max-w-4xl mx-auto  px-4 lg:max-w-7xl'>
				<h2 className={h2Classes}>Bestsellers🔥</h2>
				<div className=' relative px-4 '>
					<button
						onClick={() => scroll(-300)}
						className='hidden lg:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-xl z-20 hover:scale-110 transition-transform border border-gray-300'
						aria-label='Scroll left'>
						<svg className='w- h-8 ' xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' fill='currentColor'>
							<path d='M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z' />
						</svg>
					</button>

					<button
						onClick={() => scroll(300)}
						className='hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-xl z-20 hover:scale-110 transition-transform border border-gray-300'
						aria-label='Scroll right'>
						<svg className='w-8 h-8' xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' fill='currentColor'>
							<path d='M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z' />
						</svg>
					</button>

					<ul
						ref={scrollContainerRef}
						className='flex overflow-x-scroll manual-scrollbar-hide space-x-8 pb-4 snap-x scroll-smooth  '>
						{products.map(product => (
							<li
								key={product.id}
								className='flex-none w-64 p-2 snap-center bg-linear-to-t from-sky-500 to-indigo-500  shadow-md shadow-blue-300  rounded-md text-center text-sm font-semibold text-white   '>
								<div className='flex flex-col justify-between items-center gap-1 h-full'>
									<img className=' h-64 object-contain ' src={product.image} alt={product.title} />
									<p className='text-gray-100'>{product.title}</p>
									<p className='text-xl'>{product.price.toFixed(2)}$</p>
									<button className=' cursor-pointer bg-linear-to-r from-emerald-400 to-teal-500 px-3 py-1 rounded-md text-white transition-all duration-400 hover:scale-105 hover:shadow-lg hover:text-gray-900'>Buy now</button>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className='px-3'>
				<h2 className={h2Classes}>About us</h2>

				<div>
					<p className='mb-3'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sunt voluptas, officia deserunt perferendis
						ex placeat accusamus! Tenetur, totam. Aperiam quo aliquam a, repellat excepturi eius distinctio quia ex
						architecto? Doloribus debitis ut omnis ipsam laudantium nisi dignissimos? Et voluptatum possimus minus
						nesciunt aliquam quia enim iure, quam deleniti maiores odio nostrum facere pariatur eius totam consequatur
						repellendus? Maiores, provident. Repudiandae assumenda sequi velit? Numquam, facilis eum quas tempore,
						possimus, repellat ab eligendi nemo odit saepe consequuntur. Deserunt quaerat autem sequi amet, sapiente
						iure suscipit aliquid tempore saepe! Deserunt, sed.
					</p>
					<p className='mb-3'>
						Dicta quasi nemo optio quia maxime quis nihil excepturi perspiciatis natus! Minus asperiores labore atque ad
						laborum. Iusto neque placeat hic. Perferendis praesentium autem optio illum, quidem velit voluptates culpa!
					</p>
					<p>
						Reprehenderit omnis dolores ullam ipsam consequuntur? Ut ex veniam numquam eum cum animi, nemo ad quidem
						quia repellendus vel eius expedita, accusamus dicta earum quasi? Ipsum modi velit reprehenderit cumque!
					</p>
				</div>
			</section>

			<section className='mt-5 px-3 py-15 bg-linear-to-t from-sky-500 to-indigo-500  text-white  '>
				<p className='  text-xl font-medium '>Start shopping without risk. We focus on your comfort.</p>

				<div className='flex flex-col  gap-5 px-1 py-4  md:flex-row md:justify-center md:py-10'>
					<div className='flex items-center gap-5 '>
						<svg className='w-8 h-8' xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' fill='currentColor'>
							<path d='M280-160q-50 0-85-35t-35-85H60l18-80h113q17-19 40-29.5t49-10.5q26 0 49 10.5t40 29.5h167l84-360H182l4-17q6-28 27.5-45.5T264-800h456l-37 160h117l120 160-40 200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H400q0 50-35 85t-85 35Zm357-280h193l4-21-74-99h-95l-28 120Zm-19-273 2-7-84 360 2-7 34-146 46-200ZM20-427l20-80h220l-20 80H20Zm80-146 20-80h260l-20 80H100Zm180 333q17 0 28.5-11.5T320-280q0-17-11.5-28.5T280-320q-17 0-28.5 11.5T240-280q0 17 11.5 28.5T280-240Zm400 0q17 0 28.5-11.5T720-280q0-17-11.5-28.5T680-320q-17 0-28.5 11.5T640-280q0 17 11.5 28.5T680-240Z' />
						</svg>

						<div>
							<p className='font-medium'>Free shipping</p>
							<p className='text-sm'>For all orders from 50$</p>
						</div>
					</div>

					<div className='flex items-center gap-5 '>
						<svg className='w-8 h-8' xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' fill='currentColor'>
							<path d='M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z' />
						</svg>

						<div>
							<p className='font-medium'>14 days return policy</p>
							<p className='text-sm'>Simply return what you dont't like</p>
						</div>
					</div>

					<div className='flex items-center gap-5'>
						<svg className='w-8 h-8' xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' fill='currentColor'>
							<path d='M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z' />
						</svg>

						<div>
							<p className='font-medium'>Exellent Customer Support</p>
							<p className='text-sm'>Our customer support is here for you</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
