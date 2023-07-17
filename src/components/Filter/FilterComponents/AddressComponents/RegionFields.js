import { MenuItem, Select } from "@mui/material";
import style from "./../../Filter.module.css";
import { useState } from "react";
export default function RegionFields({ setShowStreet }) {
  //state
  const [townName, setTownName] = useState([""]);
  //event handlers
  const handleRegionChange = (e) => {
    setTownName(e.target.value);
    const {
      target: { value },
    } = e;
    const filtered = value.filter((e) => e !== "");

    setTownName(typeof filtered === "string" ? filtered.split(",") : filtered);
    if (filtered.length === 0) {
      setTownName([""]);
    }
    if (e.target.value !== "") {
      setShowStreet(true);
    }
  };
  const townNames = ["Աբովյան", "Ձորաղբյուր", "Արզնի"];
  return (
    <>
      <Select
        sx={{
          height: 40,
          borderRadius: "12px",
          marginBottom: "16px",
        }}
        onChange={handleRegionChange}
        value={townName}
        multiple
        displayEmpty
        className={`${style.field}`}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <span className={style.defaultSelect}>Քաղաք / Գյուղ</span>
        </MenuItem>
        {townNames.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
