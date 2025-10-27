import { createContext, useReducer} from 'react'
import CartReducer from './CardReducer'


 export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cart,dispatch]= useReducer(CartReducer, [])
    return (
        <CartContext value={{ cart, dispatch }}>
            {children}
       </CartContext>
    )
}

export default CartContextProvider
