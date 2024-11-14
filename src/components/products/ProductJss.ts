import { createUseStyles } from "react-jss";
export const useStyles = createUseStyles({
    productListC: {
      width: "60%"
    },
    heading: {
      fontSize: '2rem',
      textAlign: 'center',
      marginBottom: '20px',
    },
    productList: {
      cursor: 'pointer',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '20px',
    },
    productCard: {
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    image: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '10px',
    },
    button: {
      padding: '8px 16px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#0056b3',
      },
    },
   
  });
  