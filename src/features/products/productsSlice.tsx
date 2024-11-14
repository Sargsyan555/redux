import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { IRate, IState, ImputProduct } from "./types";
import axios from "axios";
const initialState:IState =  {
    items: [],
    cart: []
};
export const getProducts = createAsyncThunk("products/get", async () => {
   const response = await axios.get("http://localhost:3001/products");
   return response.data;
})
export const getProductById = createAsyncThunk("products/getById", async (id) => {
  const response = await axios.get(`http://localhost:3001/products/${id}`);
  return response.data;
})
export const addProduct = createAsyncThunk("products/add", async (param:ImputProduct) => {
  const response = await axios.post("http://localhost:3001/products", param);
  return response.data;
})
export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (productId: number) => {
    await axios.delete(`http://localhost:3001/products/${productId}`);
    return productId; 
  }
);
export const updateProduct = createAsyncThunk(
  "products/update",
  async (updatedProduct: ImputProduct) => {
    const response = await axios.put(
      `http://localhost:3001/products/${updatedProduct.id}`,
      updatedProduct
    );
    return response.data; // The updated product object
  }
);
const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
      addToCart: (state, action: PayloadAction<{ id: number }>) => {
        const productInCart = state.cart.find(item => item.id === action.payload.id);
        if (productInCart) {
          productInCart.count += 1;  // Increment quantity if already in cart
        } else {
          state.cart.push({ id: action.payload.id, count: 1 });
        }
      },
  
      removeFromCart: (state, action: PayloadAction<number>) => {
        state.cart = state.cart.filter(item => item.id !== action.payload);
      },
  
      updateCartQuantity: (state, action: PayloadAction<{ id: number, count: number }>) => {
        const product = state.cart.find(item => item.id === action.payload.id);
        if (product) {
          product.count = action.payload.count;
        }
      },
  
      clearCart: (state) => {
        state.cart = [];
      },
  
      updateRate: (state, action:PayloadAction<IRate>) => {
        const product = state.items.find(prod => prod.id === action.payload.id);
        if (product) {
          product.rate = action.payload.rate
        }
      }
    }, 
    extraReducers: builder => {      
      builder.addCase(getProducts.fulfilled, (state, action)  => {                                       
        state.items = action.payload
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.currentProduct = action.payload
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {        
        state.items = state.items.filter(product => product.id !== action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(prod => prod.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload; // Update the product in the state
        }
      });
      

    }
})

export const productReducer = ProductSlice.reducer
// export const {removeProduct, add} = ProductSlice.actions
export const {
  addToCart,
  removeFromCart,
  updateCartQuantity,
  clearCart,
  updateRate,
} = ProductSlice.actions;
