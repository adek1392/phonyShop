import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function ThanksPage() {
	const location = useLocation()
	const navigate = useNavigate()

	const totalAmount = location.state?.totalAmount

	const h2Classes = 'text-center text-2xl lg:text-3xl xl:text-4xl font-semibold pt-5 pb-3 '

	if (!totalAmount) {
		setTimeout(() => navigate('/'), 1500)
		return (
			<div className='flex items-center justify-center h-screen  text-white text-2xl font-bold bg-gradient-to-br from-red-700 to-purple-800 '>
				<p className='text-center'>Something went wrong. Redirecting...</p>
			</div>
		)
	}

	function handleClickBack() {
		navigate('/')
	}

	return (
		<div className=' flex justify-center items-center px-4   h-screen bg-gradient-to-b from-fuchsia-400 to-indigo-700 '>
			<div className='flex flex-col gap-5 px-5 py-10 bg-white shadow-md rounded-2xl  '>
				<h2 className={h2Classes}>Thank you for your order!</h2>
				<p className='text-center font-medium opacity-85'>
					Your payment was successful. We've sent a confirmation to your email address.
				</p>

				<div className='flex justify-between items-center p-3 bg-linear-to-r from-emerald-400/8 to-teal-500/8 rounded-xl  '>
					<p className='font-semibold'>Total amount:</p>
					<p className='text-xl font-bold text-teal-900 lg:text-2xl'>{totalAmount.toFixed(2)}$</p>
				</div>

				<Button onClick={handleClickBack} className=' font-bold'>Return to the main page</Button>
			</div>
		</div>
	)
}
