import { useState, useEffect } from 'react'

export const useFetchProducts = (endpoint = '') => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const safeEndpoint = typeof endpoint === 'string' && endpoint.length > 0 ? endpoint : ''
	const apiUrl = `https://fakestoreapi.com/products${safeEndpoint}`

	useEffect(() => {
		async function fetchProducts() {
			setLoading(true)
			setError(null)

			try {
				const response = await fetch(apiUrl)

				if (!response.ok) {
					throw new Error(`Response status: ${response.status}`)
				}

				const productData = await response.json()
				

				const normalizedData = Array.isArray(productData) ? productData : [productData]
				setProducts(normalizedData)

				normalizedData.forEach(item => {
					if (item?.image) {
						const img = new Image()
						img.src = item.image
					}
				})
                
			} catch (err) {
				console.error('Error loading products:', err.message)
				setError('Failed to load data. Try refreshing the page.')
			} finally {
				setLoading(false)
			}
		}

		fetchProducts()
	}, [apiUrl])

	return { products, loading, error }
}
