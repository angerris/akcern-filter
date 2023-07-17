import { MenuItem, Select } from "@mui/material";
import style from "./../../Filter.module.css";
export default function MainSelectField({
  setShowYerevanFields,
  setShowRegionFields,
  setShowStreet,
  value,
  handleChange,
}) {
  return (
    <>
      <Select
        sx={{
          height: 40,
          borderRadius: "12px",
          marginBottom: "16px",
        }}
        value={value}
        onChange={handleChange}
        displayEmpty
        className={`${style.field}`}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem
          value=""
          onClick={() => {
            setShowYerevanFields(false);
            setShowRegionFields(false);
            setShowStreet(false);
          }}
        >
          <span className={style.defaultSelect}>Տարածաշրջան</span>
        </MenuItem>
        <MenuItem value={"yerevan"}>Երևան</MenuItem>
        <MenuItem
          value={"region"}
          onClick={() => {
            setShowYerevanFields(false);
          }}
        >
          Կոտայքի մարզ
        </MenuItem>
      </Select>
    </>
  );
}
