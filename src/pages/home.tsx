import Cart from "../components/cart/cart"
import { ProductList } from "../components/products/products"
import { Link } from 'react-router-dom'; 
import { HomeStyle } from "./homeStyle"

export const ProductPage = () => {
    const classes = HomeStyle()
    return <div>
        <div className={classes.navbar}>
            <Link className={classes.buttonAdmin} to="/admin">Admin</Link>
        </div>
        <div className={classes.cartProducts}>
            <ProductList />
            <Cart />
        </div>
    </div>
}