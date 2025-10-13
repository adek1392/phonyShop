import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

import { CATEGORY_PRODUCTS } from './CategoryPage'

const navigationItems = Object.entries(CATEGORY_PRODUCTS).map(([key, value]) => ({
	param: key,
	display: value.display,
}))

const allProductsItem = navigationItems.find(item => item.param === 'all')
const otherCategories = navigationItems.filter(item => item.param !== 'all')
const finalNavigationList = [allProductsItem, ...otherCategories]

export default function MainNavigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const cartItemCount = 3

	function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        })
    }

	function toggleMenu() {
		setIsMenuOpen(prev => !prev)
	}

	function closeMenu() {
		scrollToTop()
		setIsMenuOpen(false)
	}

	const getCategoryLink = param => `/category/${param}`

	const navLinkClasses = isActive =>
		`px-3 py-2 rounded-md font-medium transition-all duration-300 text-base lg:text-lg ${
			isActive ? 'text-blue-600 ' : 'text-gray-700 hover:text-blue-600 hover:scale-95'
		}`

	const iconBaseClasses = 'relative w-8 h-8 lg:w-10 lg:h-10 cursor-pointer'

	return (
		<header className='sticky top-0 z-50 bg-white shadow-lg' aria-label='Main navigation'>
			<nav
				className={`
                    fixed top-0 left-0 h-screen w-5/6 bg-gray-900 z-40 transition-transform duration-500 ease-in-out transform
                    ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
                    lg:hidden
                `}>
				<div className='flex flex-col items-start gap-5 mt-20 px-5 py-2 text-white text-xl '>
					<NavLink onClick={closeMenu} to='/'>
						Home
					</NavLink>
					{finalNavigationList.map(category => (
						<NavLink onClick={closeMenu} key={category.param} to={getCategoryLink(category.param)}>
							{category.display}
						</NavLink>
					))}
				</div>
			</nav>

			{isMenuOpen && <div onClick={closeMenu} className='fixed inset-0 bg-black opacity-50 z-30 lg:hidden'></div>}

			<div className='max-w-7xl mx-auto px-5 h-20 flex items-center justify-between'>
				<div className='w-1/3 flex justify-start lg:hidden z-50'>
					<button onClick={toggleMenu} className={iconBaseClasses}>
						<svg
							className={`absolute top-0 left-0 ${
								isMenuOpen ? 'opacity-0' : 'opacity-100'
							} transition-opacity duration-500`}
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 -960 960 960'
							fill='currentColor'>
							<path d='M120-240v-66.67h480V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z' />
						</svg>

						<svg
							className={`absolute top-0 left-0 ${
								isMenuOpen ? 'opacity-100 text-white' : 'opacity-0 text-white'
							} transition-opacity duration-500`}
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 -960 960 960'
							fill='currentColor'>
							<path d='m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z' />
						</svg>
					</button>
				</div>

				<div className='w-1/3 flex justify-center lg:w-auto'>
					<Link to='/'>
						<img className='w-16 lg:w-20' src='/img/logo.png' alt='logo phony shop' />
					</Link>
				</div>

				<div className='w-1/3 flex justify-end items-center z-50'>
					<nav className='hidden lg:flex lg:items-center lg:space-x-4'>
						<NavLink onClick={scrollToTop} to='/' className={({ isActive }) => navLinkClasses(isActive)}>
							Home
						</NavLink>
						{finalNavigationList.map(category => (
							<NavLink
								key={category.param}
								onClick={scrollToTop}
								to={getCategoryLink(category.param)}
								className={({ isActive }) => navLinkClasses(isActive)}>
								{category.display}
							</NavLink>
						))}
					</nav>

					<NavLink
						onClick={isMenuOpen ? toggleMenu : null}
						to='/cart'
						className={'p-2 relative ml-4 transition-colors duration-300'}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className={`w-8 h-8 transition-colors duration-700 ${isMenuOpen ? 'text-white' : 'text-gray-700'}`}
							viewBox='0 -960 960 960'
							fill='currentColor'>
							<path d='M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z' />
						</svg>

						{cartItemCount > 0 && (
							<span className='absolute top-0 right-0 inline-flex items-center justify-center h-5 w-5 text-xs font-bold text-white transform translate-x-1/4 -translate-y-1/4 bg-blue-700 rounded-full'>
								{cartItemCount}
							</span>
						)}
					</NavLink>
				</div>
			</div>
		</header>
	)
}
