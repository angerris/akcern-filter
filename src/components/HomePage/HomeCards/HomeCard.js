import { NavLink } from "react-router-dom";

export default function HomeCard({ navlink, buttonText, cardText, cardImg }) {
  return (
    <div className="card">
      <img src={cardImg} alt="" className="cardImg" />
      <div className="content">
        <h3 className={"cardTitle"}>{cardText}</h3>
        <NavLink to={navlink}>
          <button className={"cardBtn"}>{buttonText}</button>
        </NavLink>
      </div>
    </div>
  );
}
