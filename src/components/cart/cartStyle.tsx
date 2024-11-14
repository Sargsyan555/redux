import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  cartContainer: {
    width: "30%",
    marginTop: "20px",
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    "@media (max-width: 900px)": {
          width: "90%"
      },
  },
  cartHeader: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    marginBottom: '10px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.05)',
  },
  cartItemTitle: {
    fontSize: '1.2rem',
    fontWeight: '500',
    marginBottom: '5px',
  },
  cartItemActions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  quantityButton: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    cursor: 'pointer',
    margin: '5px 0',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
  clearCartButton: {
    padding: '12px 20px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#c82333',
    },
  },
});
