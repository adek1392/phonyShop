const CartReducer = (state, action) => {
	switch (action.type) {
		case 'Add':
			if (!action.payload || !action.payload.id) {
				console.error("Cart Reducer Error: 'Add' action received without a valid payload/id.")
				return state
			}

			const productToAdd = action.payload
			const existingItem = state.find(item => item.id === productToAdd.id)

			const quantityToAdd = productToAdd.quantity || 1
			if (existingItem) {
				return state.map(item =>
					item.id === productToAdd.id ? { ...item, quantity: item.quantity + quantityToAdd } : item
				)
			} else {
				return [...state, { ...productToAdd, quantity: quantityToAdd }]
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
        
        case 'Clear':
			return []

		default:
			return state
	}
}

export default CartReducer
