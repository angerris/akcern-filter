import { useState } from "react";
import style from "./../Filter.module.css";
import { Checkbox, FormControl, MenuItem, Select } from "@mui/material";
import logo from "./../../../assets/images/realty.svg";
//Անշարժ գույք
export default function RealEstate() {
  return (
    <>
      <div className={style.componentSpacing}>
        <div className={style.filterTitle}>
          <img src={logo} alt="" srcset="" />
          <p>Անշարժ գույք</p>
        </div>
        {/* Գործարք */}
        <Deal />
        {/* Գույքի տեսակը */}
        <RealtyType />
        <FormControl>
          <label
            for="newCheck"
            className={`${style.field} ${style.labeledCheckbox}`}
          >
            <p>Նորակառույց</p>
            <Checkbox id="newCheck" />
          </label>
        </FormControl>
      </div>
    </>
  );
}
export function Deal() {
  /* Գործարք */

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <FormControl>
        <Select
          sx={{
            height: 40,
            borderRadius: "12px",
          }}
          value={value}
          onChange={handleChange}
          displayEmpty
          className={`${style.field} `}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <span className={style.defaultSelect}>Գործարք</span>
          </MenuItem>
          <MenuItem value={1}>Վաճառք</MenuItem>
          <MenuItem value={2}>Վարձակալություն</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
export function RealtyType() {
  /* Գույքի տեսակը */
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <FormControl>
        <Select
          sx={{
            height: 40,
            borderRadius: "12px",
          }}
          value={value}
          onChange={handleChange}
          displayEmpty
          className={`${style.field}`}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <span className={style.defaultSelect}> Գույքի տեսակը</span>
          </MenuItem>
          <MenuItem value={1}>Տուն</MenuItem>
          <MenuItem value={2}>Բնակարան</MenuItem>
          <MenuItem value={3}>Հողատարածք</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
