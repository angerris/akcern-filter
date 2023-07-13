import style from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import globe from "../../assets/images/globe.svg";
import icon from "../../assets/images/icon.svg";
export default function Header() {
  return (
    <div className={style.header}>
      <img src={logo} alt="" srcset="" className={style.logo} />
      <ul className={style.headerList}>
        <li>
          <p>Անշարժ գույք</p>
          <img src={icon} alt="" srcset="" />
        </li>
        <li>
          <p>Ակցեռն էքսկլյուզիվ</p>
        </li>
        <li>
          <p>Ծառայություններ</p>
          <img src={icon} alt="" srcset="" />
        </li>
        <li>
          <p>Մեր մասին</p>
        </li>
        <li>
          <p>Բլոգ</p>
        </li>
        <li>
          <p>Հետադարձ կապ</p>
        </li>
        <li>
          <p>Համեմատել</p>
        </li>
        <li>
          <img src={globe} alt="" srcset="" />
          <img src={icon} alt="" srcset="" />
        </li>
      </ul>
    </div>
  );
}
