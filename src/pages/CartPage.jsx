import { useContext } from "react"
import { CartContext } from "../futures/CartContext"
import { useNavigate } from "react-router-dom"




export default function CartPage() {
    const { cart, dispatch } = useContext(CartContext);
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return (
        <>
            <h1>Your Cart</h1>
            
        
        </>
    )
}