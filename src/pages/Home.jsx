import { lazy, Suspense, useRef } from 'react'
import { useFetchProducts } from '../hook/useFetchProducts'
import Fallback from '../components/Fallback'
import ProductCard from '../components/ProductCard'
// const ProductCard = lazy(() => import('../components/ProductCard'))
const TrustSection = lazy(() => import('../components/TrustSection'))

export default function Home() {
	const { products, loading, error } = useFetchProducts('?limit=6')
	const scrollContainerRef = useRef(null)

	const scroll = scrollOffset => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({
				left: scrollOffset,
				behavior: 'smooth',
			})
		}
	}

	if (loading) {
		return (
			<div className='flex justify-center items-center h-screen'>
				<p className='text-center text-xl p-4 text-blue-600 animate-pulse'>Loading products...</p>
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

	const h1Classes = '  relative  p-2 md:p-4 text-white  text-center text-3xl lg:text-4xl xl:text-5xl font-semibold '
	const h2Classes = 'text-center text-2xl lg:text-3xl xl:text-4xl font-semibold mt-5 mb-3 '

	return (
		<main>
			<section className='relative flex items-center justify-center bg-cover bg-center bg-no-repeat h-70 z-10 sm:h-85 md:h-100 xl:h-120 overflow-hidden'>
				<picture>
					<source media='(min-width: 1024px)' srcSet='/img/shopping-big.jpg' />
					<img
						src='/img/shopping-small.jpg'
						alt='Shopping background'
						fetchPriority='high'
						className='absolute inset-0 w-full h-full object-cover object-center z-10'
					/>
				</picture>
				<div className='absolute bg-black opacity-65 inset-0 z-20'></div>
				<h1 className={h1Classes}>Welcome in phonyShop !</h1>
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

					<Suspense fallback={<Fallback message='Loading products...' />}>
						<ul
							ref={scrollContainerRef}
							className='flex overflow-x-scroll manual-scrollbar-hide space-x-8 pb-4 snap-x scroll-smooth'>
							{loading
								? Array.from({ length: 6 }).map((_, i) => (
										<li
											key={i}
											className='flex-none w-[100%] sm:w-[45%] md:w-[40%] lg:w-[30%] xl:w-[20%] h-105 px-2 py-5 bg-gray-300 rounded-md animate-pulse'
										/>
								  ))
								: products.map(product => <ProductCard key={product.id} product={product} />)}
						</ul>
					</Suspense>
				</div>
			</section>

			<section className='px-3 lg:px-10'>
				<h2 className={h2Classes}>About us </h2>

				<div className='flex flex-col gap-5 md:flex-row md:justify-center'>
					<div className='md:w-[60%] lg:w-[50%]'>
						<p className='mb-3'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sunt voluptas, officia deserunt
							perferendis ex placeat accusamus! Tenetur, totam. Aperiam quo aliquam a, repellat excepturi eius
							distinctio quia ex architecto? Doloribus debitis ut omnis ipsam laudantium nisi dignissimos? Et voluptatum
							possimus minus nesciunt aliquam quia enim iure, quam deleniti maiores odio nostrum facere pariatur eius
							totam consequatur repellendus? Maiores, provident. Repudiandae assumenda sequi velit? Numquam, facilis eum
							quas tempore, possimus, repellat ab eligendi nemo odit saepe consequuntur. Deserunt quaerat autem sequi
							amet, sapiente iure suscipit aliquid tempore saepe! Deserunt, sed.
						</p>
						<p className='mb-3'>
							Dicta quasi nemo optio quia maxime quis nihil excepturi perspiciatis natus! Minus asperiores labore atque
							ad laborum. Iusto neque placeat hic. Perferendis praesentium autem optio illum, quidem velit voluptates
							culpa!
						</p>
						<p>
							Reprehenderit omnis dolores ullam ipsam consequuntur? Ut ex veniam numquam eum cum animi, nemo ad quidem
							quia repellendus vel eius expedita, accusamus dicta earum quasi? Ipsum modi velit reprehenderit cumque!
						</p>
					</div>

					<div className=' flex flex-col items-center justify-center  px-5 py-20  bg-gradient-to-t from-gray-800 to-blue-900 rounded-xl text-white shadow-lg  '>
						<svg className='w-20 h-20' xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' fill='currentColor'>
							<path d='M360-80v-529q-91-24-145.5-100.5T160-880h80q0 83 53.5 141.5T430-680h100q30 0 56 11t47 32l181 181-56 56-158-158v478h-80v-240h-80v240h-80Zm120-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z' />
						</svg>
						<p className='text-lg font-semibold drop-shadow-sm'>Our mission is your trust</p>
						<p className='text-sm '>We sell with passion, we deliver with heart.</p>
					</div>
				</div>
			</section>

			<Suspense fallback={<Fallback message='Loading section...' />}>
				<TrustSection />
			</Suspense>
		</main>
	)
}
