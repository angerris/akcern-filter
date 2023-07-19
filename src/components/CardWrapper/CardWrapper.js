import Card from "../Card/Card";
import CardFilter from "./CardFilter";
export default function CardWrapper(props) {
  //returning cards with parameters from state
  return (
    <>
      <div className={"cardWrapper"}>
        <CardFilter />
        {props.state.map((c) => (
          <Card card={c} key={c.id} />
        ))}
      </div>
    </>
  );
}
