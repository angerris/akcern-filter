import style from "./MobileFilter.module.css";
import { Button } from "@mui/material";
import RealEstate from "./FilterComponents/RealEstate";
import Address from "./FilterComponents/Address";
import Price from "./FilterComponents/Price";
import Area from "./FilterComponents/Area";
import Rooms from "./FilterComponents/Rooms";
import Parameters from "./FilterComponents/Parameters";
import darkIcon from "./../../assets/images/darkIcon.svg";
import { useState } from "react";
import { SearchForm } from "./Filter";

export default function MobileFilter() {
  const [showFilter, setShowFilter] = useState(false);
  const handleClick = () => {
    setShowFilter(!showFilter);
  };
  return (
    <>
      <div className={"mobileFilter"}>
        <SearchForm />
        <MobileFilterNav handleClick={handleClick} />
        {showFilter ? (
          <div>
            <RealEstate />
            <Address />
            <Price />
            <Area />
            <Rooms />
            <Parameters />
            <Button
              variant="outlined"
              sx={{
                borderRadius: "28px",
              }}
              disabled
            >
              Չեղարկել
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export function MobileFilterNav({ handleClick }) {
  return (
    <>
      <div className={style.filterNavContainer}>
        <div className={`${style.filterNavItem}`} onClick={handleClick}>
          <p>Ֆիլտր</p>
          <img src={darkIcon} alt="" srcset="" />
        </div>
        <div className={style.filterNavItem}>
          <p>Դասավորել ըստ</p>
          <img src={darkIcon} alt="" srcset="" />
        </div>
      </div>
    </>
  );
}
