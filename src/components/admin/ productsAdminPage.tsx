import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import { useAppDispatch, useAppSelector } from "../../api/hooks";
import { getProducts, deleteProduct, updateProduct } from "../../features/products/productsSlice";


export const AdminPanel: React.FC = () => {
    const [editingProduct, setEditingProduct] = useState<object | null>(null);

    const products = useAppSelector(state => {
        return state.products.items
    })
    
    const dispatch = useAppDispatch();
    useEffect(() => {        
        dispatch(getProducts());
      }, [])

    const handleDelete = (id: number) => {
        dispatch(deleteProduct(id))
    };

    const handleEdit = (product: object) => {
        setEditingProduct(product);
    };

    const handleSave = () => {
        if (editingProduct) {
            dispatch(updateProduct(editingProduct))            
        };
        setEditingProduct(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (editingProduct) {
            if (name === "price" || name === "rate") {
                setEditingProduct({ ...editingProduct, [name]: +value });
            } else {
                setEditingProduct({ ...editingProduct, [name]: value });

            }
        }
    };

    const classes = useStyles();
    return (
        <div className={classes.container}>
        <h2 className={classes.heading}>Admin Panel - Manage Products</h2>

        {editingProduct ? (
            <div>
            <h3>Edit Product</h3>
            <input
                type="text"
                name="title"
                value={editingProduct.title}
                onChange={handleInputChange}
                placeholder="Title"
                className={classes.input} 
            />
            <input
                type="number"
                name="price"
                value={editingProduct.price}
                onChange={handleInputChange}
                placeholder="Price"
                className={classes.input} 
            />
            <input
                type="number"
                name="rate"
                value={editingProduct.rate}
                onChange={handleInputChange}
                placeholder="Rating"
                className={classes.input} 
            />
            <input
                type="text"
                name="picture"
                value={editingProduct.picture}
                onChange={handleInputChange}
                placeholder="Picture URL"
                className={classes.input} 
            />
            <button onClick={handleSave} className={classes.button}>
                Save Changes
            </button>
            </div>
        ) : (
            <div className={classes.productList}>
            {products.map((product) => (
                <div key={product.id} className={classes.productCard}>
                <img
                    src={product.picture}
                    alt={product.title}
                    className={classes.image}
                />
                <h4>{product.title}</h4>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rate} ⭐</p>
                <button
                    onClick={() => handleEdit(product)}
                    className={`${classes.button} ${classes.editButton}`}
                >
                    Edit
                </button>
                <button
                    onClick={() => handleDelete(product.id)}
                    className={`${classes.button} ${classes.deleteButton}`}
                >
                    Delete
                </button>
                </div>
            ))}
            </div>
        )}
        </div>
  )
}