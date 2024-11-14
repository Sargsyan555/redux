import { createUseStyles } from "react-jss";

export const HomeStyle = createUseStyles({
    buttonAdmin: {
        padding: '8px 16px',
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
    navbar: {
        display: "flex",
        justifyContent: "center"
    },
    cartProducts: {
        width: "100%",
        display: "flex", // Use flexbox instead of grid
        flexWrap: "wrap", // Allow items to wrap onto new lines
        justifyContent: "space-around", // Distribute items with space between them
        gap: "20px", // Add space between items
        "@media (max-width: 900px)": {
          flexDirection: "column", // Stack items vertically on smaller screens
          alignItems: "center", // Center items horizontally when stacked
        },
      }
})