import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import AllproductsPage from './pages/AllProductsPage'
import CategoryPage from './pages/CategoryPage'
import RootLayout from './pages/RootLayout'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'all-products', element: <AllproductsPage /> },
			{ path: 'cart', element: <CartPage /> },
			{ path: 'category/:name', element: <CategoryPage /> },
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
