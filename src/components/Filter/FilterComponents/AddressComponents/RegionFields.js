import { MenuItem, Select } from "@mui/material";
import style from "./../../Filter.module.css";
export default function RegionFields({ handleRegionChange, region }) {
  return (
    <>
      <Select
        sx={{
          height: 40,
          borderRadius: "12px",
          marginBottom: "16px",
        }}
        onChange={handleRegionChange}
        value={region}
        displayEmpty
        className={`${style.field}`}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <span className={style.defaultSelect}>Քաղաք / Գյուղ</span>
        </MenuItem>
        <MenuItem value={"regionName0"}>Աբովյան</MenuItem>
        <MenuItem value={"regionName01"}>Ձորաղբյուր</MenuItem>
        <MenuItem value={"regionName02"}>Արզնի</MenuItem>
      </Select>
    </>
  );
}
