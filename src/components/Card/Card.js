import style from "./Card.module.css";
import CardTopContent from "./CardTopContent";
import CardBottomContent from "./CardBottomContent";
//card view
export default function Card(props) {
  return (
    <div className={style.card}>
      {/* picture/slider, id etc  */}
      <CardTopContent {...props} />
      {/* parameters */}
      <CardBottomContent {...props} />
    </div>
  );
}
