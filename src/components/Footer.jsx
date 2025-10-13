import { data } from 'react-router-dom'

export default function Footer() {
	return (
		<footer className='border-t-[1px] border-solid border-gray-300'>
			<div className='flex justify-between items-center px-5 h-20 lg:justify-evenly'>
				<img className='w-16 h-16' src='/img/logo.png' alt='logo phonyShop' />

				<p className='text-sm'>
					<span>&#169;</span> {new Date().getFullYear()} PhonyShop
				</p>
			</div>
		</footer>
	)
}
