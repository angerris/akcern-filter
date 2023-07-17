import { FormControl } from "@mui/material";
import { useState } from "react";
import style from "./../Filter.module.css";
import logo from "./../../../assets/images/address.svg";
import YerevanFields from "./AddressComponents/YerevanFields";
import MainSelectField from "./AddressComponents/MainSelectField";
import StreetField from "./AddressComponents/StreetField";
import RegionFields from "./AddressComponents/RegionFields";
export default function Address() {
  // state
  const [value, setValue] = useState("");
  const [yerevanValue, setYerevanValue] = useState("");
  const [showYerevanFields, setShowYerevanFields] = useState(false);
  const [showRegionFields, setShowRegionFields] = useState(false);
  const [showStreet, setShowStreet] = useState(false);
  const [districtValue, setDistrictValue] = useState("");
  const [region, setRegion] = useState("");
  const [districtName, setDistrictName] = useState([]);
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
  const handleYerevanChange = (e) => {
    setYerevanValue(e.target.value);
    if (e.target.value !== "") {
      setShowStreet(true);
    }
  };
  const handleDistrictChange = (e) => {
    setDistrictValue(e.target.value);
    const {
      target: { value },
    } = e;
    setDistrictName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    if (e.target.value !== "") {
      setShowStreet(true);
    }
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
    if (e.target.value !== "") {
      setShowStreet(true);
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
            <MainSelectField
              value={value}
              setShowYerevanFields={setShowYerevanFields}
              setShowRegionFields={setShowRegionFields}
              setShowStreet={setShowStreet}
              handleChange={handleChange}
            />
            {showYerevanFields ? (
              <YerevanFields
                handleYerevanChange={handleYerevanChange}
                yerevanValue={yerevanValue}
                setShowStreet={setShowStreet}
                districtValue={districtValue}
                handleDistrictChange={handleDistrictChange}
              />
            ) : null}
            {showRegionFields ? (
              <RegionFields
                handleRegionChange={handleRegionChange}
                region={region}
              />
            ) : null}
            {showStreet ? <StreetField /> : null}
          </FormControl>
        </div>
      </div>
    </>
  );
}
