import { MenuItem, Select } from "@mui/material";
import style from "./../../Filter.module.css";

export default function YerevanFields({
  handleYerevanChange,
  yerevanValue,
  setShowStreet,
  districtValue,
  handleDistrictChange,
}) {
  return (
    <>
      <DistrictField
        districtValue={districtValue}
        handleDistrictChange={handleDistrictChange}
        setShowStreet={setShowStreet}
      />
      <AreaField
        setShowStreet={setShowStreet}
        handleYerevanChange={handleYerevanChange}
        yerevanValue={yerevanValue}
      />
    </>
  );
}
export function DistrictField({ districtValue, handleDistrictChange }) {
  return (
    <>
      <Select
        sx={{
          height: 40,
          borderRadius: "12px",
          marginBottom: "16px",
        }}
        value={[districtValue]}
        onChange={handleDistrictChange}
        displayEmpty
        className={style.field}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <span className={style.defaultSelect}>Վարչական շրջան</span>
        </MenuItem>
        <MenuItem value={"district"}>Աջափնյակ</MenuItem>
        <MenuItem value={"district2"}>Դավթաշեն</MenuItem>
        <MenuItem value={"district3"}>Նոր Նորք</MenuItem>
      </Select>
    </>
  );
}
export function AreaField({ yerevanValue, handleYerevanChange }) {
  return (
    <>
      <Select
        sx={{
          height: 40,
          borderRadius: "12px",
          marginBottom: "16px",
        }}
        onChange={handleYerevanChange}
        value={yerevanValue}
        displayEmpty
        className={`${style.field}`}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <span className={style.defaultSelect}>Քաղաք / Գյուղ</span>
        </MenuItem>
        <MenuItem value={"regionName"}>գ. Առինջ</MenuItem>
        <MenuItem value={"regionName1"}>Վահագնի</MenuItem>
        <MenuItem value={"regionName2"}>Ջրվեժ</MenuItem>
      </Select>
    </>
  );
}