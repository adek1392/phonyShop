import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../futures/CartContext'
import Button from '../components/Button'

const inputClasses =
	'px-4 py-2  bg-white opacity-40 text-gray-900  rounded-2xl  focus:outline-none focus:ring-2 placeholder:text-black placeholder:text-sm placeholder:opacity-80'
const inputContainer = 'flex flex-col'
const labelClasses = 'px-2 py-1'
const h2Classes = 'text-center text-2xl lg:text-3xl xl:text-4xl font-semibold pt-5 pb-3 '
const errorClasses = 'px-4 py-2 font-bold text-xs text-yellow-300'

export default function CheckoutForm() {
	const { cart, dispatch } = useContext(CartContext)
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    const navigate = useNavigate()
	const [formData, setFormData] = useState({
		name: '',
		surname: '',
		number: '',
		email: '',
		city: '',
		postalCode: '',
		street: '',
		houseNumber: '',
		apartmentNumber: '',
	})

	const [error, setError] = useState({
		name: '',
		surname: '',
		number: '',
		email: '',
		city: '',
		postalCode: '',
		street: '',
		houseNumber: '',
		apartmentNumber: '',
	})

	const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	const regPostalCode = /^\d{2}-\d{3}$/
	const regPhone = /^[0-9]{9}$/
	const regHouseApartment = /^[0-9]+[A-Za-z]?([/][0-9]+[A-Za-z]?)?$/

	function handleChange(e) {
		const { id, value } = e.target
		setFormData(prev => ({ ...prev, [id]: value }))
		setError(prev => ({ ...prev, [id]: '' }))
	}
	function handleSubmit(e) {
		e.preventDefault()
		const newErrors = {
			name: '',
			surname: '',
			number: '',
			email: '',
			city: '',
			postalCode: '',
			street: '',
			houseNumber: '',
			apartmentNumber: '',
		}

		if (!formData.name.trim()) newErrors.name = 'Enter your name'
		if (!formData.surname.trim()) newErrors.surname = 'Enter your surname'
		if (!regPhone.test(formData.number)) newErrors.number = 'Phone number must contain exactly 9 digits'
		if (!formData.email.trim() || !regEmail.test(formData.email)) newErrors.email = 'Invalid email'
		if (!formData.city.trim()) newErrors.city = 'Enter your city'
		if (!formData.street.trim()) newErrors.street = 'Enter your street'
		if (!regHouseApartment.test(formData.houseNumber)) newErrors.houseNumber = 'Invalid house number format'
		if (!regHouseApartment.test(formData.apartmentNumber)) newErrors.apartmentNumber = 'Invalid apartment number format'
		if (!formData.postalCode.trim() || !regPostalCode.test(formData.postalCode.trim()))
			newErrors.postalCode = 'The postal code must be in the format XX-XXX.'

		

		setError(newErrors)

		const firstErrorField = Object.keys(newErrors).find(key => newErrors[key])
		if (firstErrorField) {
            document.getElementById(firstErrorField)?.scrollIntoView()
            return
        }

        dispatch({ type: 'Clear' })
        
        navigate('/thanks',{ state: { totalAmount } })
	}

	const personalFields = ['name', 'surname', 'number', 'email']
	const addressFields = ['city', 'postalCode', 'street', 'houseNumber', 'apartmentNumber']
	return (
		<>
			<div className=' bg-gradient-to-b from-fuchsia-400 to-indigo-700 text-white md:flex md:flex-col md:items-center '>
				<form onSubmit={handleSubmit} noValidate className='px-4 md:w-[80%] lg:w-[50%] xl:w-[35%] '>
					<h2 className={h2Classes}>Your data</h2>
					{personalFields.map(field => (
						<div key={field} className={inputContainer}>
							<label htmlFor={field} className={labelClasses}>
								{field === 'number' ? 'Phone number:' : field.charAt(0).toUpperCase() + field.slice(1) + ':'}
							</label>
							<input
								id={field}
								type={field === 'email' ? 'email' : field === 'number' ? 'tel' : 'text'}
								className={inputClasses}
								placeholder={`Enter your ${field}`}
								value={formData[field]}
								onChange={handleChange}
							/>
							{error[field] && <p className={errorClasses}>{error[field]}</p>}
						</div>
					))}

					<h2 className={h2Classes}>Your address</h2>
					{addressFields.map(field => (
						<div key={field} className={inputContainer}>
							<label htmlFor={field} className={labelClasses}>
								{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
							</label>
							<input
								id={field}
								type='text'
								className={inputClasses}
								placeholder={`Enter your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
								value={formData[field]}
								onChange={handleChange}
							/>
							{error[field] && <p className={errorClasses}>{error[field]}</p>}
						</div>
					))}
					
					<div className=' pb-5 text-center'>
						<p className='pt-3 pb-3 text-center text-md lg:text-xl xl:text-2xl font-semibold '>
							<span className=''>Total: </span>
							{totalAmount.toFixed(2)}$
						</p>
						<Button type='submit' className='w-full font-semibold'>
							Order and pay 
						</Button>
					</div>
				</form>
			</div>
		</>
	)
}
