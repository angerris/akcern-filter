import style from "./Card.module.css";
export default function Card(props) {
  return (
    <div className={style.card}>
      <div> code: {props.card.id}</div>
      {props.card.liked ? <span>♥ </span> : <span>♡</span>}
      <div> price: {props.card.price}</div>
      <div>area: {props.card.area}m2</div>
      <div>floor: {props.card.floor}</div>
      <div>rooms: {props.card.rooms}</div>
    </div>
  );
}
