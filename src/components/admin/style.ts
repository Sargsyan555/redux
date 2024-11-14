import { createUseStyles } from 'react-jss';

// Define your JSS styles using createUseStyles hook (which is often used in React)
export const useStyles = createUseStyles({
  container: {
    padding: 20,
    maxWidth: 900,
    margin: "0 auto",
    border: "1px solid #ddd",
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: 20,
  },
  productList: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
  },
  productCard: {
    padding: 15,
    border: "1px solid #ddd",
    borderRadius: 8,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: 8,
  },
  button: {
    padding: "8px 16px",
    marginTop: 10,
    cursor: "pointer",
    borderRadius: 4,
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
  },
  editButton: {
    backgroundColor: "#28a745",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
  },
  input: {
    width: "100%",
    padding: 8,
    marginBottom: 10,
    borderRadius: 4,
    border: "1px solid #ccc",
  },


  //Inputes and Submit
  containerI: {
    marginTop: "50px",
    padding: 20,
    maxWidth: 500,
    margin: "0 auto",
    border: "1px solid #ddd",
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  inputI: {
    width: "100%",
    padding: 8,
    marginBottom: 10,
    borderRadius: 4,
    border: "1px solid #ccc",
  },
  buttonI: {
    width: "100%",
    padding: 10,
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
  errorI: {
    color: "red",
    fontSize: 12,
  },
});
