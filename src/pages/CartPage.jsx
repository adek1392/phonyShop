import { useContext } from 'react'
import { CartContext } from '../futures/CartContext'
import { useNavigate } from 'react-router-dom'
import TrustSection from '../components/TrustSection'
import Button from '../components/Button'


export default function CartPage() {
	const { cart, dispatch } = useContext(CartContext)
	const navigate = useNavigate()
	const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0)

	const h1Classes =
		'text-center text-red-400 text-3xl lg:text-4xl xl:text-5xl font-semibold mt-5 mb-5 pb-2 border-b-3 border-blue-800 w-1/2 lg:w-[30%]'

	const cartH1Classes =
		'text-center  text-3xl lg:text-4xl xl:text-5xl font-semibold mt-5  pb-2 border-b-3 border-blue-800 w-1/2 lg:w-[30%]'
	const iconCss = 'w-7 h-7 text-white cursor-pointer '

    const titleclasses = 'text-center text-md lg:text-xl xl:text-2xl font-semibold   '
    
    const handleNextClick = () => {
        navigate('/checkout')
    }

	if (cart.length === 0) {
		return (
			<>
				<div className='flex flex-col items-center my-10 '>
					<h1 className={h1Classes}>Your cart is empty!</h1>
					<Button onClick={() => navigate('/')}>Back to shop</Button>
				</div>
				<TrustSection />
			</>
		)
	}

	return (
		<>
			<div className='flex justify-center'>
				<h1 className={cartH1Classes}>Your cart</h1>
			</div>

			<div className='flex flex-col items-center mt-5 lg:flex-row lg:items-start '>
				<ul className='px-4 pt-8 md:flex md:flex-col md:items-center'>
					{cart.map(item => (
						<li
							className='flex flex-col justify-center  gap-6 mb-15 p-4 h-[400px]  rounded-md border-1 border-gray-100  shadow-xl shadow-gray-300  md:w-[80%]    lg:gap-15 lg:w-full    '
							key={item.id}>
							<div className='flex justify-center items-center gap-6  '>
								<img className='w-[30%] md:w-[20%] lg:w-[15%]' src={item.image} alt={item.title} />
								<div className='flex flex-col items-center gap-3 lg:w-[50%] '>
									<p className={titleclasses}>{item.title}</p>
									<p className='font-bold text-2xl  text-emerald-500 lg:text-3xl'>{item.price.toFixed(2)} $</p>
								</div>
							</div>

							<div className='flex gap-2  justify-evenly mb-10 md:justify-center md:gap-6'>
								<div className='flex items-center justify-evenly mt-2 px-3 py-1 gap-2 w-2/3 bg-gray-900 rounded-2xl md:mt-0 md:w-[45%]  lg:w-[40%] xl:w-[30%]'>
									<button onClick={() => dispatch({ type: 'Decrease', productId: item.id })}>
										<svg
											className={iconCss}
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 -960 960 960'
											fill='currentColor'>
											<path d='M200-440v-80h560v80H200Z' />
										</svg>
									</button>
									<span className='text-lg text-white font-bold drop-shadow-xl'>{item.quantity}</span>
									<button onClick={() => dispatch({ type: 'Increase', productId: item.id })}>
										<svg
											className={iconCss}
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 -960 960 960'
											fill='currentColor'>
											<path d='M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z' />
										</svg>
									</button>
								</div>

								<button onClick={() => dispatch({ type: 'Remove', productId: item.id })}>
									<svg
										className='w-8 h-8 text-red-400 cursor-pointer'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 -960 960 960'
										fill='currentColor'>
										<path d='M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z' />
									</svg>
								</button>
							</div>
						</li>
					))}
				</ul>

				<div className='w-full px-4 lg:pt-8 lg:sticky lg:top-20 lg:w-[60%] '>
					<div className='w-full flex flex-col items-center mb-15 px-4 py-8  rounded-md border-1 border-gray-100   shadow-xl shadow-gray-300  lg:sticky top-0'>
						<p className='text-2xl font-semibold'>Summary</p>
						<div className='flex mt-6'>
							<p className='text-2xl font-bold'>Total: {totalAmount.toFixed(2)} $</p>
						</div>

						<Button onClick={handleNextClick} className='w-full mt-4 md:w-2/3'>Next</Button>
					</div>
				</div>
            </div>
            
           
		</>
	)
}
