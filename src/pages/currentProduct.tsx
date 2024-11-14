import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addToCart, getProductById } from "../features/products/productsSlice";
import { useAppSelector } from "../api/hooks";
import { Link, useParams } from "react-router-dom";
import { useStyles } from "../components/currentProduct/currProd";
import Cart from "../components/cart/cart";


export const CurrentProduct = () => {
  const classes = useStyles()
    const {id} = useParams()

    const dispatch = useDispatch();
    const product = useAppSelector(state => {
      return state.products.currentProduct
    })
    const handleAddToCart = (id: number) => {
        dispatch(addToCart({ id }));
      };
    useEffect(() => {
        dispatch(getProductById(id))
    }, [])

    return  <div className={classes.container}>
      <Link className={classes.buttonAdmin} to="/">Home</Link>

    {/* Product Title */}
    {product ? (
      <div className={classes.productCart}>
        <div className={classes.productDetails}>
          <h2 className={classes.productTitle}>{product.title}</h2>
          <img src={product.picture} alt={product.title} className={classes.productImage} />
          <div className={classes.productInfo}>
            <p className={classes.productPrice}>Price: ${product.price}</p>
          </div>
          <button className={classes.button} onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
        </div>
        <Cart />
      </div>
    ) : (
      <p className={classes.loadingText}>Loading product details...</p>
    )}

  </div>
}