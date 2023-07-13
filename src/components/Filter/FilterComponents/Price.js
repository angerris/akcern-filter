import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import style from "./../Filter.module.css";
import { CustomInputStyles } from "../CustomStyles";
import logo from "./../../../assets/images/price.svg";

export default function Price() {
  const [value, setValue] = useState("");

  //This should execute by default or on Page Load
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className={style.componentSpacing}>
        <div className={style.filterTitle}>
          <img src={logo} alt="" />
          <p>Գին</p>
        </div>
        <div className={style.flexContainer}>
          <FormControl>
            <div className={style.flexContainerInner}>
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
                id="outlined-basic"
                variant="outlined"
                type="number"
                placeholder="Սկսած"
                className={`${style.field} ${style.priceField}`}
              />
              <div className={style.line}>-</div>
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
                id="outlined-basic"
                variant="outlined"
                type="number"
                placeholder="Մինչև"
                className={`${style.field}  ${style.priceField}`}
              />
            </div>
          </FormControl>

          <FormControl>
            <Select
              className={`${style.field} ${style.currency}`}
              sx={{
                height: 40,
                borderRadius: "12px",
              }}
              value={value}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="" className={style.defaultSelect}>
                AMD
              </MenuItem>
              <MenuItem value="usd">USD</MenuItem>
              <MenuItem value="eur">EUR</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
}
