import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import style from "./../Filter.module.css";
import logo from "./../../../assets/images/parameters.svg";
export default function Parameters() {
  return (
    <>
      <div className={style.filterTitle}>
        <img src={logo} alt="" />
        <p>Անշարժ գույքի պարամետրեր</p>
      </div>
      <Type />
      <Restoration />
      <Floor />
    </>
  );
}
export function Type() {
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
          <em>Կառույցի տեսակը</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}

export function Restoration() {
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
          <em>Վերանորոգում</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
export function Floor() {
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
          <em>Հարկ</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
