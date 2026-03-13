import { NavLink } from "react-router-dom"

function Banner() {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>We Bake With Passion</h1>
                <p>Delicious homemade baked goods made with love and the finest ingredients.</p>
            </div>
            <NavLink to="#" className="btn-order">Order Now</NavLink>
        </div>
    )
}
export default Banner