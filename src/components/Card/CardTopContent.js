import icon from "./../../assets/images/compare.svg";
import liked from "./../../assets/images/filledHeart.svg";
import unliked from "./../../assets/images/outlinedHeart.svg";
import cardImg from "./../../assets/images/cardImg.png";
import { useState } from "react";
import style from "./Card.module.css";
//picture, slider etc
export default function CardTopContent(props) {
  return (
    <>
      <div className={style.topContent}>
        <CardHeader />
        <div>
          <img src={cardImg} alt="" className={style.cardImg} />
        </div>
        <div className={style.cardCode}> ԿՈԴ - {props.card.id}</div>
      </div>
    </>
  );
}
export function CardHeader() {
  //like / compare
  const [like, setLike] = useState(false);
  return (
    <>
      <div className={style.cardHeader}>
        <div className={style.compare}>
          <img src={icon} alt="" srcset="" />
          <p>Համեմատել</p>
        </div>
        {like ? (
          <div
            onClick={() => {
              setLike(!like);
            }}
            className={style.cardLiked}
          >
            <img src={liked} alt="" />
          </div>
        ) : (
          <div
            className={style.cardLiked}
            onClick={() => {
              setLike(!like);
            }}
          >
            <img src={unliked} alt="" />
          </div>
        )}
      </div>
    </>
  );
}
