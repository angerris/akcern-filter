import darkIcon from "./../../assets/images/darkIcon.svg";
import style from "./Filter.module.css";

export default function FilterMobileButton() {
  return (
    <div className={`${style.filterNavItem} ${"showFilterButton"}`}>
      <p>Ֆիլտր</p>
      <img src={darkIcon} alt="" />
    </div>
  );
}
