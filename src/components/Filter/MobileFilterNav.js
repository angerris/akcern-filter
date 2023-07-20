import { CardFilterMobile, SearchForm } from "./Filter";
import FilterMobileButton from "./FilterMobileButton";

export default function MobileFilterNav() {
  return (
    <>
      <SearchForm stylesForSearch={"mobileSearch"} />
      <div className="filterNavContainer">
        <FilterMobileButton />
        <CardFilterMobile />
      </div>
    </>
  );
}
