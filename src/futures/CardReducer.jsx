const CartReducer = (state, action) => {
	switch (action.type) {
		case 'Add':
			const existingItem = state.find(item => item.id === action.product.id)
			if (existingItem) {
				return state.map(item => (item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item))
			} else {
				return [...state, { ...action.product, quantity: 1 }]
			}

		case 'Remove':
			return state.filter(item => item.id !== action.productId)

		case 'Increase':
			return state.map(item => (item.id === action.productId ? { ...item, quantity: item.quantity + 1 } : item))

		case 'Decrease':
			return state.reduce((acc, item) => {
				if (item.id === action.productId) {
					const newQuantity = item.quantity - 1
					if (newQuantity > 0) {
						acc.push({ ...item, quantity: newQuantity })
					}
				} else {
					acc.push(item)
				}
				return acc
			}, [])

		default:
			return state
	}
}

export default CartReducer
