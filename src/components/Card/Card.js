import style from "./Card.module.css";
import CardTopContent from "./CardTopContent";
import CardBottomContent from "./CardBottomContent";

export default function Card(props) {
  return (
    <div className={style.card}>
      <CardTopContent {...props} />
      <CardBottomContent {...props} />
    </div>
  );
}
