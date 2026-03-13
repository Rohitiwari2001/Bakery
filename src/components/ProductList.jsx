import { useContext } from "react"
import { StoreContext } from "../context/StoreContext.jsx"
import { BiRupee } from 'react-icons/bi';
import { FaCartPlus } from "react-icons/fa"
import { FaPlusSquare } from "react-icons/fa"
import { FaSquareMinus } from "react-icons/fa6"


function ProductList() {
    const{product_list,cartItems, addToCart,removeFromCart}=useContext(StoreContext)
    console.log(product_list)
    return (
        <div className="container at-5">
            <div className="row gy-4">
                {
                    product_list.map((product) => {
                        return (
                            <div className="col-lg-3" key={product.id}>
                                <div className="card-product text-center p-4">
                                    <img src={product.image} alt={product.name} className="img-fluid mb-3" />
                                    <h6>{product.name}</h6>
                                    <p>{product.description}</p>
                                    <span className="price"><BiRupee />{product.price}</span>
                                    <div>
                                        {
                                            !cartItems[product._id] ? <FaCartPlus className="add-to-cart" onClick={() => addToCart(product._id)} /> : <div>
                                                <FaSquareMinus className="cart-icon-minus" onClick={() => removeFromCart(product._id)} />
                                                {<span className="cart-counter">{cartItems[product._id]}</span>}
                                                <FaPlusSquare className="cart-icon-plus" onClick={() => addToCart(product._id)} />
                                            </div>
                                        }
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
export default ProductList
