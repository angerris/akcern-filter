import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import store from "./store/store";
function App() {
  const theme = createTheme({
    textField: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
    },
    input: {
      color: "red",
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="container">
          <Header />
          <div className="contentWrapper">
            <Filter />
            <CardWrapper state={store.getState().cards} />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
