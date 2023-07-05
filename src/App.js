import "./App.css";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import FilterContainer from "./components/Filter/FilterContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
  let store = {
    _state: {
      cards: [
        {
          id: 1234,
          liked: false,
          onSale: true,
          type: "",
          newBuilt: false,
          location: {},
          price: 150000,
          area: 36,
          rooms: 2,
          structure: "",
          restoration: false,
          floor: 12,
        },
        {
          id: 32432,
          liked: true,
          onSale: false,
          type: "",
          newBuilt: true,
          location: {},
          price: 200000,
          area: 22,
          rooms: 4,
          structure: "",
          restoration: true,
          floor: 3,
        },
        {
          id: 2342435,
          liked: true,
          onSale: false,
          type: "",
          newBuilt: true,
          location: {},
          price: 250000,
          area: 56,
          rooms: 4,
          structure: "",
          restoration: true,
          floor: 6,
        },
        {
          id: 13213013,
          liked: true,
          onSale: true,
          type: "",
          newBuilt: true,
          location: {},
          price: 250000,
          area: 56,
          rooms: 4,
          structure: "",
          restoration: true,
          floor: 6,
        },
        {
          id: 32432,
          liked: false,
          onSale: false,
          type: "",
          newBuilt: true,
          location: {},
          price: 200000,
          area: 22,
          rooms: 4,
          structure: "",
          restoration: true,
          floor: 3,
        },
      ],
    },
    getState() {
      return this._state;
    },
  };
  function onValSelected(val) {
    console.log(val);
  }
  return (
    <>
      <HeaderContainer />
      <div className="contentWrapper">
        <FilterContainer onValSelected={onValSelected} />
        <CardWrapper state={store.getState().cards} />
      </div>
    </>
  );
}

export default App;
