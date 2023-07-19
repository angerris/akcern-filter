import style from "./../Filter.module.css";
import { useState } from "react";
import logo from "./../../../assets/images/rooms.svg";
// Սենյակներ
export default function Rooms() {
  return (
    <>
      <div className={style.componentSpacing}>
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
      </div>
    </>
  );
}

export function RoomsNumber(props) {
  //local state for each selection
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
