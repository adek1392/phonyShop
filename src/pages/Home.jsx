import { useState, useEffect } from "react"


export default function Home() {
    
const [products, setProducts] = useState([])

    async function fetchProducts() {
        const url = 'https://fakestoreapi.com/products'
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
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return (
            <h1>home</h1>
        )
    }
