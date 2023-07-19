import { MenuItem, Select } from "@mui/material";
import style from "./../../Filter.module.css";
import { useState } from "react";
/* yerevan choice case */
export default function YerevanFields({ setShowStreet }) {
  //state
  const [districtName, setDistrictName] = useState([""]);
  const [areaName, setAreaName] = useState([""]);
  //event handlers
  //also describing multiple choice
  const handleYerevanChange = (e) => {
    setAreaName(e.target.value);
    const {
      target: { value },
    } = e;
    const filtered = value.filter((e) => e !== "");

    setAreaName(typeof filtered === "string" ? filtered.split(",") : filtered);
    if (filtered.length === 0) {
      setAreaName([""]);
    }
    if (e.target.value !== "") {
      setShowStreet(true);
    }
  };
  const handleDistrictChange = (e) => {
    setDistrictName(e.target.value);
    const {
      target: { value },
    } = e;
    const filtered = value.filter((e) => e !== "");

    setDistrictName(
      typeof filtered === "string" ? filtered.split(",") : filtered
    );
    if (filtered.length === 0) {
      setDistrictName([""]);
    }
    if (e.target.value !== "") {
      setShowStreet(true);
    }
  };
  return (
    <>
      {/* Վարչական շրջան */}
      <DistrictField
        districtName={districtName}
        handleDistrictChange={handleDistrictChange}
      />
      {/* Քաղաք / Գյուղ */}
      <AreaField
        handleYerevanChange={handleYerevanChange}
        areaName={areaName}
      />
    </>
  );
}
export function DistrictField({ handleDistrictChange, districtName }) {
  const districtNames = ["Աջափնյակ", "Դավթաշեն", "Նոր Նորք"];
  return (
    <>
      <Select
        sx={{
          height: 40,
          borderRadius: "12px",
          marginBottom: "16px",
        }}
        value={districtName}
        onChange={handleDistrictChange}
        displayEmpty
        className={style.field}
        inputProps={{ "aria-label": "Without label" }}
        multiple
      >
        <MenuItem value="">
          <span className={style.defaultSelect}>Վարչական շրջան</span>
        </MenuItem>
        {districtNames.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
export function AreaField({ handleYerevanChange, areaName }) {
  const areaNames = ["գ. Առինջ", "Վահագնի", "Ջրվեժ"];
  return (
    <>
      <Select
        sx={{
          height: 40,
          borderRadius: "12px",
          marginBottom: "16px",
        }}
        onChange={handleYerevanChange}
        value={areaName}
        displayEmpty
        className={`${style.field}`}
        inputProps={{ "aria-label": "Without label" }}
        multiple
      >
        <MenuItem value="">
          <span className={style.defaultSelect}>Քաղաք / Գյուղ</span>
        </MenuItem>
        {areaNames.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
