import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/products/productsSlice";
import { ImputProduct } from "../../features/products/types";
import { useStyles } from "./style";
// Define the JSS styles


const AddProduct: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles(); 

  // State to manage form inputs
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [rate, setRate] = useState(0);
  const [picture, setPicture] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !price || !rate || !picture) {
      setError("All fields are required.");
      return;
    }
    setError(null);
    const newProduct: ImputProduct = {
      title,
      price,
      rate,
      picture,
    };

    dispatch(addProduct(newProduct));
    setTitle("");
    setPrice(0);
    setRate(0);
    setPicture("");
  };

  return (
    <div className={classes.containerI}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className={classes.inputI} // Apply JSS style here
          required
        />
        <input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Price"
          className={classes.inputI} // Apply JSS style here
          required
        />
        <input
          id="rate"
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          placeholder="Rating"
          className={classes.inputI} // Apply JSS style here
          required
          min={0}
          max={5}
        />
        <input
          id="picture"
          type="text"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
          placeholder="Picture URL"
          className={classes.inputI} // Apply JSS style here
          required
        />
        {error && <p className={classes.errorI}>{error}</p>}
        <button type="submit" className={classes.buttonI}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
