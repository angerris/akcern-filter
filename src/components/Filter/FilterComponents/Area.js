import { FormControl, TextField } from "@mui/material";
import { CustomInputStyles } from "../CustomStyles";
import style from "./../Filter.module.css";
import logo from "./../../../assets/images/area.svg";
//Մակերես մ²
export default function Area() {
  return (
    <>
      <div className={style.componentSpacing}>
        <div className={style.filterTitle}>
          <img src={logo} alt="" />
          <p>Մակերես մ²</p>
        </div>
        <FormControl>
          <div className={style.flexContainerInner}>
            {/* Սկսած */}
            <TextField
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
              id="outlined-basic"
              variant="outlined"
              type="number"
              placeholder="Սկսած"
              className={`${style.field}`}
            />
            <div className={` ${style.line}`}>-</div>
            {/* Մինչև */}
            <TextField
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
              id="outlined-basic"
              variant="outlined"
              type="number"
              placeholder="Մինչև"
              className={`${style.field}`}
            />
          </div>
        </FormControl>
      </div>
    </>
  );
}
