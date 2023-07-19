import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import style from "./../Filter.module.css";
import logo from "./../../../assets/images/parameters.svg";
// Անշարժ գույքի պարամետրեր
export default function Parameters() {
  return (
    <>
      <div className={style.componentSpacing}>
        <div className={style.filterTitle}>
          <img src={logo} alt="" />
          <p>Անշարժ գույքի պարամետրեր</p>
        </div>
        {/* Կառույցի տեսակը */}
        <Type />
        {/* Վերանորոգում */}
        <Restoration />
        {/* Հարկ */}
        <Floor />
      </div>
    </>
  );
}
export function Type() {
  /* Կառույցի տեսակը */
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <FormControl>
      <Select
        sx={{
          height: 40,
          borderRadius: "12px",
        }}
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        className={`${style.field}`}
      >
        <MenuItem value="">
          <span className={style.defaultSelect}>Կառույցի տեսակը</span>
        </MenuItem>
        <MenuItem value={1}>Քարե</MenuItem>
        <MenuItem value={2}>Պանելային</MenuItem>
        <MenuItem value={3}>Կասետային</MenuItem>
      </Select>
    </FormControl>
  );
}

export function Restoration() {
  /* Վերանորոգում */
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <FormControl>
      <Select
        sx={{
          height: 40,
          borderRadius: "12px",
        }}
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        className={`${style.field}`}
      >
        <MenuItem value="">
          <span className={style.defaultSelect}>Վերանորոգում</span>
        </MenuItem>
        <MenuItem value={10}>Առանց վերանորոգման</MenuItem>
        <MenuItem value={20}>Վերանորոգվում է</MenuItem>
        <MenuItem value={30}>Վերանորոգված</MenuItem>
      </Select>
    </FormControl>
  );
}
export function Floor() {
  /* Հարկ */
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <FormControl>
      <Select
        sx={{
          height: 40,
          borderRadius: "12px",
        }}
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        className={`${style.field}`}
      >
        <MenuItem value="">
          <span className={style.defaultSelect}>Հարկ</span>
        </MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
    </FormControl>
  );
}
