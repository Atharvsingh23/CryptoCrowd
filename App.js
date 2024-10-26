import { useTheme } from '@mui/material/styles';
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";

const useTheme = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

const App = () => {
  const theme = useTheme(); // ✅ Correct Hook usage inside a component
  return <div>{/* JSX here */}</div>;
};


export default App;