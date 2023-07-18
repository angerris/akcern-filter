import Card from "../Card/Card";
export default function CardWrapper(props) {
  return (
    <>
      <div className={"cardWrapper"}>
        {props.state.map((c) => (
          <Card card={c} key={c.id} />
        ))}
      </div>
    </>
  );
}
