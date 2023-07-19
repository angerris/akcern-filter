import style from "./CardWrapper.module.css";
import darkIcon from "./../../assets/images/darkIcon.svg";
import gridSelected from "./../../assets/images/gridSelected.svg";
import rows from "./../../assets/images/rows.svg";
import { Checkbox } from "@mui/material";

export default function CardFilter() {
  //additional filter w/ view mode
  return (
    <>
      <div className={"cardFilter"}>
        <div className={style.cardFilterItem}>
          <p>Լուսանկարով</p>
          <Checkbox />
        </div>
        <div className={style.cardFilterItem}>
          <p>Դասավորել ըստ</p>
          <img src={darkIcon} alt="" />
          <div
            className={`${style.selected} ${style.cardFilterIcon} ${"sortBy"}`}
          >
            <img src={gridSelected} alt="" />
          </div>
          <div className={`${style.cardFilterIcon} ${"sortBy"}`}>
            <img src={rows} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
