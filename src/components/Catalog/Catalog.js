import store from "../../store/store";
import CardWrapper from "../CardWrapper/CardWrapper";
import Filter from "../Filter/Filter";
import MobileFilter from "../Filter/MobileFilter";

export default function Catalog() {
  return (
    <>
      <div className="contentWrapper">
        <MobileFilter />
        <Filter />
        <CardWrapper state={store.getState().cards} />
      </div>
    </>
  );
}
