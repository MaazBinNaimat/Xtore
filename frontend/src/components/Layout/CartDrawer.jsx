import { IoMdClose } from 'react-icons/io';
import CartContents from '../Cart/CartContents';

const CartDrawer = ({ DrwerOpen, toggleCartDrawer }) => {


    return (
        <>
            <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${DrwerOpen ? "translate-x-0" : "translate-x-full"}`}>


                {/* close btn */}
                <div className="flex justify-end p-4">
                    <button onClick={toggleCartDrawer}>
                        <IoMdClose className='h-6 w-6 ' />
                    </button>
                </div>

                {/* Cart Content with scrolable area */}
                <div className="flex-grow p-4 overflow-y-auto">
                    <h2 className='text-xl font-semibold mb-4 font-allerta'>Your Cart</h2>
                    {/* component for cart content */}
                    <CartContents />
                </div>

                {/* checkout button */}
                <div className="p-4 bg-white sticky bottom-0">
                    <button className='w-full bg-dark-blue text-white py-3 rounded-lg font-bold hover:bg-medium-blue transition-all duration-150'>Checkout</button>
                    <p className='text-sm tracking-tighter text-medium-blue mt-2 text-center'>Shipping, taxes, and discount code calculated at checkout</p>
                </div>
            </div>
        </>
    )
}

export default CartDrawer