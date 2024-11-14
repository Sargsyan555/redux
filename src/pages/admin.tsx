import { createUseStyles } from "react-jss";
import { AdminPanel } from "../components/admin/ productsAdminPage";
import AddProduct from "../components/admin/addProduct";
import {Link } from 'react-router-dom'; 
const useStyle = createUseStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    buttonAdmin: {
        padding: '8px 16px',
        width: "30px",
        backgroundColor: 'black',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        textDecoration: "none",
        '&:hover': {
          backgroundColor: '#0056b3',
        },
        margin: "20px",
  
      },
})
export const Admin = () => {
    const classes = useStyle()
    return <div className={classes.container}>
        <Link className={classes.buttonAdmin} to="/">Home</Link>
        <AdminPanel />
        <AddProduct />
    </div>
}
