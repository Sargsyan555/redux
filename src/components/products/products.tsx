

import { useEffect } from "react";
import {  useAppDispatch, useAppSelector } from "../../api/hooks";
import { getProducts,addToCart } from "../../features/products/productsSlice";
import { Rating } from "../rating/rating";
import { useStyles } from "./ProductJss";
import { useNavigate } from "react-router-dom";

export const ProductList:React.FC = () => {
  const navigate = useNavigate();

    const handleProductClick = (productId:number) => {
      navigate(`/products/${productId}`); 
    };
    const products = useAppSelector(state => { 
      return state.products.items
    });    
    const dispatch = useAppDispatch()    
    const handleAddToCart = (id: number) => {
      dispatch(addToCart({ id }));
    };
    useEffect(() => {
      dispatch(getProducts());
    }, [])
    const classes = useStyles();

    return(<div className={classes.productListC}>
        <h1 className={classes.heading}>Product List </h1>
        <div className={classes.productList} >
            {products.map((product) => (
                <div key={product.id} className={classes.productCard}>
                <img
                    onClick={() => handleProductClick(product.id)}
                    src={product.picture}
                    alt={product.title}
                    className={classes.image}
                />
                <h4 onClick={() => handleProductClick(product.id)}>{product.title}</h4>
                <Rating id={product.id} rate={product.rate}/>
                <button className={classes.button} onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                </div>
            ))}
          </div>
    </div>)
}
