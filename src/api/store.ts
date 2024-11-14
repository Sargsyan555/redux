import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import  {productReducer}  from "../features/products/productsSlice";
    
const rootReducer = combineReducers({
    products: productReducer,
     

})

export const store = configureStore({
    reducer: rootReducer
})
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
>