import { useState } from 'react'

const validateEmail = email => {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return re.test(String(email).toLowerCase())
}

export default function TrustSection() {
	const [email, setEmail] = useState('')
	const [isSubscribed, setIsSubscribed] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async e => {
		e.preventDefault()
		setIsLoading(true)

		if (!validateEmail(email)) {
			setEmailError('Please enter a valid email address.')
			setIsSubscribed(false)
			setIsLoading(false)
			return
		}

		setIsSubscribed(true)
		setIsLoading(false)
		setEmail('')
	}
	return (
		<>
			<section className=' px-3 py-15 mt-10 bg-gradient-to-b from-fuchsia-400 to-indigo-700 text-white  md:py-20 xl:py-25 '>
				<div className='flex flex-col gap-4 md:flex-row md:justify-center md:items-center   '>
					<div className=''>
						<h2 className=' drop-shadow-lg text-2xl lg:text-3xl xl:text-4xl font-semibold  '>
							Subscribe to the newsletter
						</h2>
						<p className=' opacity-90'>Receive special offers and be the first to discover new products.</p>
						{isSubscribed ? (
							<p className='text-lime-300 drop-shadow-lg'>
								Welcome to the Club! Check your inbox your 15% discount code is already there. Let's start shopping!
							</p>
						) : null}
					</div>

					<div className='md:w-[40%] lg:w-[30%] xl:w-[20%] '>
						<form onSubmit={handleSubmit} className=' flex flex-col w-full gap-4  '>
							<input
								className='px-4 py-2  bg-white opacity-40 text-gray-900  rounded-2xl  focus:outline-none focus:ring-2 placeholder:text-black placeholder:text-sm placeholder:opacity-80  '
								type='email'
								id='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
								placeholder='Your email address...'
							/>
							<button
								type='submit'
								disabled={isLoading}
								className='  p-2 cursor-pointer border-1 border-white rounded-2xl font-semibold hover:text-blue-700 hover:bg-white transition-all duration-300 md:w-full   lg:text-lg lg:p-2  '>
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</section>

			<section className=' px-3 py-15 bg-linear-to-t from-sky-500 to-indigo-500  text-white  '>
				<p className='  text-xl font-medium '>Start shopping without risk. We focus on your comfort.</p>

				<div className='flex flex-col  gap-5 px-1 py-4  md:flex-row md:justify-center md:py-10'>
					<div className='flex items-center gap-5 '>
						<svg className='w-8 h-8' xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' fill='currentColor'>
							<path d='M280-160q-50 0-85-35t-35-85H60l18-80h113q17-19 40-29.5t49-10.5q26 0 49 10.5t40 29.5h167l84-360H182l4-17q6-28 27.5-45.5T264-800h456l-37 160h117l120 160-40 200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H400q0 50-35 85t-85 35Zm357-280h193l4-21-74-99h-95l-28 120Zm-19-273 2-7-84 360 2-7 34-146 46-200ZM20-427l20-80h220l-20 80H20Zm80-146 20-80h260l-20 80H100Zm180 333q17 0 28.5-11.5T320-280q0-17-11.5-28.5T280-320q-17 0-28.5 11.5T240-280q0 17 11.5 28.5T280-240Zm400 0q17 0 28.5-11.5T720-280q0-17-11.5-28.5T680-320q-17 0-28.5 11.5T640-280q0 17 11.5 28.5T680-240Z' />
						</svg>

						<div>
							<p className='font-medium'>Free shipping</p>
							<p className='text-sm'>For all orders from 50$</p>
						</div>
					</div>

					<div className='flex items-center gap-5 '>
						<svg className='w-8 h-8' xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' fill='currentColor'>
							<path d='M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z' />
						</svg>

						<div>
							<p className='font-medium'>14 days return policy</p>
							<p className='text-sm'>Simply return what you dont't like</p>
						</div>
					</div>

					<div className='flex items-center gap-5'>
						<svg className='w-8 h-8' xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' fill='currentColor'>
							<path d='M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z' />
						</svg>

						<div>
							<p className='font-medium'>Exellent Customer Support</p>
							<p className='text-sm'>Our customer support is here for you</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
