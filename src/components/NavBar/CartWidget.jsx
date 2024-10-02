import cart from '../../assets/images/icons/cart.svg';
const CartWidget =()=>{
    return(
        <div className='cart-widget'> 
            <img src={cart} alt="cart-widget" className='cart-img' />
        </div>
    )
}
export default CartWidget;