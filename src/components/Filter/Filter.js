import Region from "./FIlterComponents/Address/Region";
import Area from "./FIlterComponents/Area/Area";
import FilterByLiked from "./FIlterComponents/FilterByLiked";
import Price from "./FIlterComponents/Price/Price";
import ApartmentType from "./FIlterComponents/Realty/ApartmentType";
import Deal from "./FIlterComponents/Realty/Deal";
import NewBuilt from "./FIlterComponents/Realty/NewBuilt";
import Floor from "./FIlterComponents/RealtyParameters/Floor";
import Restoration from "./FIlterComponents/RealtyParameters/Restoration";
import Structure from "./FIlterComponents/RealtyParameters/Structure";
import Rooms from "./FIlterComponents/Rooms/Rooms";
import SearchByCode from "./FIlterComponents/SearchByCode";
import style from "./Filter.module.css";

export default function Filter(props) {
  return (
    <div className={style.filter}>
      <form action="">
        <SearchByCode />
        <FilterByLiked />
      </form>
      <form action="">
        <div>real estate:</div>
        <Deal {...props} />
        <ApartmentType />
        <NewBuilt />
        <div>address:</div>
        <Region />
        <div>price:</div>
        <Price />
        <div>area:</div>
        <Area />
        <div>rooms:</div>
        <Rooms />
        <div>realty parameters:</div>
        <Structure />
        <Restoration />
        <Floor />
        <input type="submit" />
      </form>
    </div>
  );
}
