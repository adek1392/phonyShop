import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import RootLayout from './pages/RootLayout'
const Home = lazy(() => import('./pages/Home'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const CardDetails = lazy(() => import('./pages/CardDetails'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CheckoutForm = lazy(() => import('./pages/CheckoutForm'));
const ThanksPage = lazy(() => import('./pages/ThanksPage'));
const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'product/:id', element: <CardDetails /> },
			{ path: 'category/:name', element: <CategoryPage /> },
			{ path: 'cart', element: <CartPage /> },
			{ path: 'checkout', element: <CheckoutForm /> },
			{ path: 'thanks', element:<ThanksPage/>}
		],
	},
])

function App() {
	return (
		<Suspense fallback={<div>Loading page...</div>}>
			<RouterProvider router={router} />
		</Suspense>
	)
}

export default App
