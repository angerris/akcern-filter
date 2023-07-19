import { FormControl } from "@mui/material";
import { useState } from "react";
import style from "./../Filter.module.css";
import logo from "./../../../assets/images/address.svg";
import YerevanFields from "./AddressComponents/YerevanFields";
import MainSelectField from "./AddressComponents/MainSelectField";
import StreetField from "./AddressComponents/StreetField";
import RegionFields from "./AddressComponents/RegionFields";
//Հասցե
export default function Address() {
  // state
  const [value, setValue] = useState("");
  const [showYerevanFields, setShowYerevanFields] = useState(false);
  const [showRegionFields, setShowRegionFields] = useState(false);
  const [showStreet, setShowStreet] = useState(false);
  //event handlers
  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === "yerevan") {
      setShowYerevanFields(true);
      setShowRegionFields(false);
    } else if (e.target.value === "region") {
      setShowRegionFields(true);
      setShowYerevanFields(false);
    }
  };
  return (
    <>
      <div className={style.componentSpacing}>
        <div className={style.filterTitle}>
          <img src={logo} alt="" srcset="" />
          <p>Հասցե</p>
        </div>
        <div className={style.addressContainer}>
          <FormControl>
            {/* Տարածաշրջան */}
            <MainSelectField
              value={value}
              setShowYerevanFields={setShowYerevanFields}
              setShowRegionFields={setShowRegionFields}
              setShowStreet={setShowStreet}
              handleChange={handleChange}
            />
            {/* yerevan choice case */}
            {showYerevanFields ? (
              <YerevanFields setShowStreet={setShowStreet} />
            ) : null}
            {/* region choice case */}
            {showRegionFields ? (
              <RegionFields setShowStreet={setShowStreet} />
            ) : null}
            {/* street search field */}
            {showStreet ? <StreetField /> : null}
          </FormControl>
        </div>
      </div>
    </>
  );
}
