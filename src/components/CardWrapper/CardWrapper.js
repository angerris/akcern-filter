import Card from "../Card/Card";
import style from "./CardWrapper.module.css";
export default function CardWrapper(props) {
  return (
    <>
      <div className={style.cardWrapper}>
        {props.state.map((c) => (
          <Card card={c} key={c.id} />
        ))}
      </div>
    </>
  );
}
