import style from "./../Filter.module.css";
import { useState } from "react";
import logo from "./../../../assets/images/rooms.svg";

export default function Rooms() {
  return (
    <>
      <div className={style.filterTitle}>
        <img src={logo} alt="" />
        <p>Սենյակներ</p>
      </div>

      <div className={style.roomsContainer}>
        <RoomsNumber x={1} />
        <RoomsNumber x={2} />
        <RoomsNumber x={3} />
        <RoomsNumber x={"4+"} />
      </div>
    </>
  );
}

export function RoomsNumber(props) {
  const [selected, setSelected] = useState(false);
  return (
    <>
      {selected ? (
        <div
          onClick={() => {
            setSelected(!selected);
          }}
          className={`${style.roomButtonSelected} ${style.roomPrimaryBtn}`}
        >
          {props.x}
        </div>
      ) : (
        <div
          onClick={() => {
            setSelected(!selected);
          }}
          className={`${style.roomButton} ${style.roomPrimaryBtn}`}
        >
          {props.x}
        </div>
      )}
    </>
  );
}
