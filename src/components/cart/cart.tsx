import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartQuantity, clearCart, getProducts } from '../../features/products/productsSlice';
import type { IState } from '../../features/products/types';
import { useStyles } from './cartStyle';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: IState) => state.products.cart); 
  const products = useSelector((state: IState) => state.products.items); 
  const [cartProducts, setCartProducts] = useState<[]>([]); 
  const [totalPrice, setTotalPrice] = useState<number>(0);  // State to hold total price
  const classes = useStyles();

  // Fetch product details for each item in the cart
  useEffect(() => {
    if (cart.length > 0) {
      dispatch(getProducts());
    }
  }, [cart, dispatch]);

  // Update cart products and calculate total price when the cart or products change
  useEffect(() => {
    const cartIds = cart.map(item => item.id);
    const productsInCart = products.filter(product => cartIds.includes(product.id));
    setCartProducts(productsInCart);

    // Calculate the total price based on the cart and products
    const total = productsInCart.reduce((acc, product) => {
      const cartItem = cart.find(item => item.id === product.id);
      if (cartItem) {
        acc += product.price * cartItem.count; // Multiply product price by quantity in cart
      }
      return acc;
    }, 0);

    setTotalPrice(total); // Update the total price state
  }, [cart, products]);

  const handleIncreaseQuantity = (id: number) => {
    const productInCart = cart.find(item => item.id === id);
    if (productInCart) {
      dispatch(updateCartQuantity({ id, count: productInCart.count + 1 }));
    }
  };

  const handleDecreaseQuantity = (id: number) => {
    const productInCart = cart.find(item => item.id === id);
    if (productInCart && productInCart.count > 1) {
      dispatch(updateCartQuantity({ id, count: productInCart.count - 1 }));
    }
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className={classes.cartContainer}>
      <h2 className={classes.cartHeader}>Your Cart</h2>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartProducts.map((product) => {
          const cartItem = cart.find(item => item.id === product.id);
          if (!cartItem) return null;

          return (
            <div key={product.id} className={classes.cartItem}>
              <div>
                <h3 className={classes.cartItemTitle}>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>Quantity: {cartItem.count}</p>
              </div>
              <div className={classes.cartItemActions}>
                <button
                  className={classes.quantityButton}
                  onClick={() => handleIncreaseQuantity(product.id)}
                >
                  Increase
                </button>
                <button
                  className={classes.quantityButton}
                  onClick={() => handleDecreaseQuantity(product.id)}
                >
                  Decrease
                </button>
                <button
                  className={classes.quantityButton}
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      )}
      {cartProducts.length > 0 && (
        <div>
          <p>Total Price: ${totalPrice.toFixed(2)}</p> 
          <button
            className={classes.clearCartButton}
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
