import "./styles.css";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import store from "./store/store";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="contentWrapper">
          <Filter />
          <CardWrapper state={store.getState().cards} />
        </div>
      </div>
    </>
  );
}

export default App;
