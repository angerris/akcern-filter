import style from "./Filter.module.css";
import { Button, Checkbox, FormControl, TextField } from "@mui/material";
import RealEstate from "./FilterComponents/RealEstate";
import Address from "./FilterComponents/Address";
import Price from "./FilterComponents/Price";
import Area from "./FilterComponents/Area";
import Rooms from "./FilterComponents/Rooms";
import Parameters from "./FilterComponents/Parameters";
import search from "./../../assets/images/search.svg";
import darkIcon from "./../../assets/images/darkIcon.svg";

import { CustomInputStyles } from "./CustomStyles";

export default function Filter() {
  return (
    <>
      {/* mobile  */}
      <SearchForm stylesForSearch={"mobileSearch"} />
      <div className="filterNavContainer">
        <FilterMobileButton />
        <CardFilterMobile />
      </div>

      {/* desktop */}
      <div className={"filter"}>
        {/* search  */}
        <SearchForm liked={<Liked />} stylesForSearch={"defaultSearch"} />
        {/* Անշարժ գույք */}
        <RealEstate />
        {/* Հասցե */}
        <Address />
        {/* Գին */}
        <Price />
        {/* Մակերես մ² */}
        <Area />
        {/* Սենյակներ  */}
        <Rooms />
        {/* Անշարժ գույքի պարամետրեր */}
        <Parameters />
        <Button
          variant="outlined"
          sx={{
            borderRadius: "28px",
          }}
          disabled
        >
          Չեղարկել
        </Button>
      </div>
    </>
  );
}
export function SearchForm(props) {
  return (
    <>
      <div className={`${style.searchFormContainer} ${style.componentSpacing}`}>
        <FormControl>
          <div className={`${style.searchForm} ${props.stylesForSearch} `}>
            <TextField
              InputProps={{
                sx: {
                  ...CustomInputStyles.rootInputStyles,
                },
              }}
              inputProps={{
                sx: {
                  ...CustomInputStyles.inputStyles,
                },
              }}
              className={`${style.field} ${style.searchField}`}
              id="outlined-basic"
              variant="outlined"
              placeholder="Կոդ"
            />
            <div>
              <button className={"searchButton"}>
                <img src={search} alt="" srcset="" />
              </button>
              {props.liked}
            </div>
          </div>
        </FormControl>
      </div>
    </>
  );
}
export function Liked() {
  return (
    <label
      for="likedCheck"
      className={`${style.field} ${style.labeledCheckbox}`}
    >
      <p>Հավանած</p>
      <Checkbox id="likedCheck" />
    </label>
  );
}
export function CardFilterMobile() {
  return (
    <div className={style.filterNavItem}>
      <p>Դասավորել ըստ</p>
      <img src={darkIcon} alt="" />
    </div>
  );
}
export function FilterMobileButton() {
  return (
    <div className={style.filterNavItem}>
      <p>Ֆիլտր</p>
      <img src={darkIcon} alt="" />
    </div>
  );
}
