import { NavLink } from "react-router-dom";
import style from "./../Homepage.module.css";

export default function HomeCard({ navlink, buttonText, cardText, cardImg }) {
  return (
    <div className={style.card}>
      <img src={cardImg} alt="" className={style.cardImg} />

      <div className={style.content}>
        <h3 className={style.cardTitle}>{cardText}</h3>
        <NavLink to={navlink}>
          <button className={style.cardBtn}>{buttonText}</button>
        </NavLink>
      </div>
    </div>
  );
}
