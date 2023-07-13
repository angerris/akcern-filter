import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import style from "./../Filter.module.css";
import logo from "./../../../assets/images/address.svg";
export default function Address() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className={style.componentSpacing}>
        <div className={style.filterTitle}>
          <img src={logo} alt="" srcset="" />
          <p>Հասցե</p>
        </div>
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
              <span className={style.defaultSelect}>Տարածաշրջան</span>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
}
