import { FormControl, TextField } from "@mui/material";
import { CustomAreaInputStyles } from "../CustomStyles";
import style from "./../Filter.module.css";
import logo from "./../../../assets/images/area.svg";
export default function Area() {
  return (
    <>
      <div className={style.filterTitle}>
        <img src={logo} alt="" />
        <p>Մակերես մ²</p>
      </div>
      <FormControl>
        <div className={style.flexContainerInner}>
          <TextField
            InputProps={{
              sx: {
                ...CustomAreaInputStyles.rootInputStyles,
              },
            }}
            inputProps={{
              sx: {
                ...CustomAreaInputStyles.inputStyles,
              },
            }}
            id="outlined-basic"
            variant="outlined"
            type="number"
            placeholder="Սկսած"
            className={`${style.field}`}
          />
          <div className={` ${style.line}`}>-</div>
          <TextField
            InputProps={{
              sx: {
                ...CustomAreaInputStyles.rootInputStyles,
              },
            }}
            inputProps={{
              sx: {
                ...CustomAreaInputStyles.inputStyles,
              },
            }}
            id="outlined-basic"
            variant="outlined"
            type="number"
            placeholder="Մինչև"
            className={`${style.field}`}
          />
        </div>
      </FormControl>
    </>
  );
}
