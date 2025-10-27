import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import RootLayout from './pages/RootLayout'
import CardDetails from './pages/CardDetails'
import CartPage from './pages/CartPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'product/:id', element: <CardDetails /> },
			{ path: 'category/:name', element: <CategoryPage /> },
			{path: 'cart', element: <CartPage/>},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
