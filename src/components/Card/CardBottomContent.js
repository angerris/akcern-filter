import area from "./../../assets/images/area.svg";
import date from "./../../assets/images/date.svg";
import floor from "./../../assets/images/floor.svg";
import rooms from "./../../assets/images/rooms.svg";
import style from "./Card.module.css";
//card parameters
export default function CardBottomContent(props) {
  return (
    <>
      <div className={style.bottomContent}>
        {/* price, title, etc */}
        <CardMainInfo {...props} />
        {/* main parameters */}
        <CardParams {...props} />
        {/* date and button */}
        <CardFooter {...props} />
      </div>
    </>
  );
}
export function CardMainInfo(props) {
  /* price, title, etc */
  return (
    <>
      <div className={style.mainInfo}>
        <div className={style.priceTitle}>
          {props.card.price}
          <span className={style.priceCurrencyTitle}> Դ.</span>
        </div>
        <div>
          <p className={style.cardTitle}>Վաճառվում է բնակարան Երևանում</p>
        </div>
      </div>
    </>
  );
}
export function CardParams(props) {
  /* main parameters */
  return (
    <>
      <div className={style.cardParams}>
        <img src={area} alt="" />
        <p>Ընդ. մակերես {props.card.area}մ²</p>
      </div>
      <div className={style.cardParams}>
        <img src={floor} alt="" />
        <p>Հարկ {props.card.floor}</p>
      </div>
      <div className={style.cardParams}>
        <img src={rooms} alt="" />
        <p>Սենյակներ {props.card.rooms}</p>
      </div>
    </>
  );
}
export function CardFooter(props) {
  /* date and button */
  return (
    <>
      <div className={style.cardFooter}>
        <div className={style.cardDate}>
          <img src={date} alt="" />
          <p>{props.card.date}</p>
        </div>
        <button className={style.cardBtn}>Դիտել</button>
      </div>
    </>
  );
}
