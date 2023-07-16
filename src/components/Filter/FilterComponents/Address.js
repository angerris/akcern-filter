import { FormControl } from "@mui/material";
import { useState } from "react";
import style from "./../Filter.module.css";
import logo from "./../../../assets/images/address.svg";
import YerevanFields from "./AddressComponents/YerevanFields";
import MainSelectField from "./AddressComponents/MainSelectField";
import StreetField from "./AddressComponents/StreetField";
export default function Address() {
  const [value, setValue] = useState("");
  const [yerevanValue, setYerevanValue] = useState("");
  const [showYerevanFields, setShowYerevanFields] = useState(false);
  const [showRegionFields, setShowRegionFields] = useState(false);
  const [districtValue, setDistrictValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === "yerevan") {
      setShowYerevanFields(true);
    }
  };
  const handleYerevanChange = (e) => {
    setYerevanValue(e.target.value);
    if (e.target.value !== "") {
      setShowRegionFields(true);
    }
  };
  const handleDistrictChange = (e) => {
    setDistrictValue(e.target.value);
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
            <MainSelectField
              value={value}
              setShowYerevanFields={setShowYerevanFields}
              setShowRegionFields={setShowRegionFields}
              handleChange={handleChange}
            />
            {showYerevanFields ? (
              <YerevanFields
                handleYerevanChange={handleYerevanChange}
                yerevanValue={yerevanValue}
                setShowRegionFields={setShowRegionFields}
                districtValue={districtValue}
                setDistrictValue={setDistrictValue}
                handleDistrictChange={handleDistrictChange}
              />
            ) : null}
            {showRegionFields ? <StreetField /> : null}
          </FormControl>
        </div>
      </div>
    </>
  );
}
