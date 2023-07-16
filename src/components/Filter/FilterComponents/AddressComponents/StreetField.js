import { TextField } from "@mui/material";
import style from "./../../Filter.module.css";
import { CustomInputStyles } from "../../CustomStyles";
export default function StreetField() {
  return (
    <>
      <TextField
        sx={{
          height: 40,
          borderRadius: "12px",
        }}
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
        className={`${style.field} ${style.searchField}`}
        id="outlined-basic"
        variant="outlined"
        type="search"
        placeholder="Փողոց"
      />
    </>
  );
}
