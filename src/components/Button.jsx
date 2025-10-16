export default function Button({ onClick, children, className = '', ...props }) {
	const baseClasses = ' cursor-pointer bg-linear-to-r from-emerald-400 to-teal-500 px-3 py-1 rounded-xl text-white transition-all duration-400  hover:shadow-lg hover:font-semibold  hover:text-gray-900 lg:text-lg'

	const combinedClasses = `${baseClasses} ${className}`
	return (
		<button
			onClick={onClick}
			{...props}
			className={combinedClasses}>
			{children}
		</button>
	)
}
