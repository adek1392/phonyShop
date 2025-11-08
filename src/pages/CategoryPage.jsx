import { useParams } from 'react-router-dom'
import { useFetchProducts } from '../hook/useFetchProducts'
import ProductCard from '../components/ProductCard'
import TrustSection from '../components/TrustSection'

const CATEGORY_PRODUCTS = {
	all: { display: 'All ', apiName: null },
	men: { display: 'Men', apiName: "men's clothing" },
	women: { display: 'Woman', apiName: "women's clothing" },
	jewelry: { display: 'Jewelry', apiName: 'jewelery' },
	electronics: { display: 'Electronics', apiName: 'electronics' },
}

export default function CategoryPage() {
	const { name } = useParams()

	const categoryData = CATEGORY_PRODUCTS[name]

	const endpoint = categoryData ? (name === 'all' ? '' : `/category/${categoryData.apiName}`) : null

	const { products, loading, error } = useFetchProducts(endpoint)

	const h1Classes =
		'  text-center  text-3xl lg:text-4xl xl:text-5xl font-semibold mt-5 mb-5 pb-2 border-b-3 border-blue-800  lg:w-[30%]    '

	if (endpoint === null) {
		return (
			<div className='p-8 text-center bg-red-100 text-red-700 rounded-xl max-w-lg mx-auto mt-10 shadow-lg'>
				<h2 className='text-2xl font-bold'>Error</h2>
				<p>Uknown category: "{name}".</p>
			</div>
		)
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

	return (
		<>
			<div className='flex justify-center'>
				<h1 className={h1Classes}>{name.toUpperCase()} </h1>
			</div>
			<main>
				<ul className='flex flex-col sm:flex-row sm:justify-center flex-wrap items-center gap-8 sm:mt-5 mb-3 px-2 w-full'>
					{products.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				</ul>

				<TrustSection />
			</main>
		</>
	)
}

export { CATEGORY_PRODUCTS }
