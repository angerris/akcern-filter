import { useState } from "react";
import style from "./../Filter.module.css";
import { Checkbox, FormControl, MenuItem, Select } from "@mui/material";
import logo from "./../../../assets/images/realty.svg";

export default function RealEstate() {
  const [value, setValue] = useState("");

  //This should execute by default or on Page Load
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className={style.filterTitle}>
        <img src={logo} alt="" srcset="" />
        <p>Անշարժ գույք</p>
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
            <em>Գործարք</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

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
            <em>Գույքի տեսակը</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <div className={`${style.field} ${style.labeledCheckbox}`}>
          <p>Նորակառույց</p>
          <Checkbox />
        </div>
      </FormControl>
    </>
  );
}
