import { useState, useEffect } from 'react';

export const useFetchProducts = (endpoint = '') => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
   
    const apiUrl = `https://fakestoreapi.com/products${endpoint}`;

    useEffect(() => {
      
        async function fetchProducts() {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(apiUrl);
                
               
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const productData = await response.json();
                setProducts(productData);
            } catch (err) {
                console.error("Error loading products:", err.message);
                setError("Failed to load data. Try refreshing the page.");
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
        
   
    }, [endpoint]);

    
    return { products, loading, error };

}