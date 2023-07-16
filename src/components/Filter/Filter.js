import style from "./Filter.module.css";
import { Button, Checkbox, FormControl, TextField } from "@mui/material";
import RealEstate from "./FilterComponents/RealEstate";
import Address from "./FilterComponents/Address";
import Price from "./FilterComponents/Price";
import Area from "./FilterComponents/Area";
import Rooms from "./FilterComponents/Rooms";
import Parameters from "./FilterComponents/Parameters";
import search from "./../../assets/images/search.svg";

import { CustomInputStyles } from "./CustomStyles";
export default function Filter() {
  return (
    <div className={style.filter}>
      {/* search  */}
      <SearchForm />
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
  );
}
export function SearchForm() {
  return (
    <>
      <div className={`${style.searchFormContainer} ${style.componentSpacing}`}>
        <FormControl>
          <div className={style.searchForm}>
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
              <button className={style.searchButton}>
                <img src={search} alt="" srcset="" />
              </button>
              <label
                for="likedCheck"
                className={`${style.field} ${style.labeledCheckbox}`}
              >
                <p>Հավանած</p>
                <Checkbox id="likedCheck" />
              </label>
            </div>
          </div>
        </FormControl>
      </div>
    </>
  );
}
