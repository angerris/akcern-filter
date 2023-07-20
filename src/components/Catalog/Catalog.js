import store from "../../store/store";
import CardWrapper from "../CardWrapper/CardWrapper";
import Filter from "../Filter/Filter";
import MobileFilterNav from "../Filter/MobileFilterNav";

export default function Catalog() {
  return (
    <>
      <div className="contentWrapper">
        <MobileFilterNav />
        <Filter />
        <CardWrapper state={store.getState().cards} />
      </div>
    </>
  );
}
