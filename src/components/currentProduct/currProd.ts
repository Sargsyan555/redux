import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  productCart: {
    width:'100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      padding: '10px',
    },
  },
  productDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: 20,
    },
  },
  productTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productImage: {
    width: '400px',
    height: 'auto',
    borderRadius: 8,
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    objectFit: 'cover',
    '@media (max-width: 768px)': {
      width: '100%',
      maxWidth: '300px',
    },
  },
  productInfo: {
    flex: 1,
    padding: '10px 20px',
    '@media (max-width: 768px)': {
      padding: '10px',
    },
  },
  productDescription: {
    fontSize: '1.1rem',
    marginBottom: 15,
    lineHeight: '1.5',
    color: '#555',
  },
  productPrice: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  productRating: {
    fontSize: '1.2rem',
    color: '#28a745',
  },
  loadingText: {
    fontSize: '1.5rem',
    color: '#888',
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
  
});
