import logo from "../../assets/images/logo.svg";
import darkLogo from "../../assets/images/scrollLogo.svg";
import globe from "../../assets/images/globe.svg";
import darkGlobe from "../../assets/images/darkGlobe.svg";
import icon from "../../assets/images/icon.svg";
import darkIcon from "../../assets/images/darkIcon.svg";
import { useEffect, useState } from "react";
export default function Header() {
  //code to change header colors on scroll
  const [headerStyles, setHeaderStyles] = useState({
    bgColor: "transparent",
    color: "white",
    shadow: "",
  });
  const listenScrollEvent = () => {
    if (window.scrollY < 13) {
      setHeaderStyles({
        bgColor: "transparent",
        color: "white",
        shadow: "",
      });
    } else if (window.scrollY > 10) {
      setHeaderStyles({
        bgColor: "rgba(250, 250, 250, 1)",
        color: "black",
        shadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25",
      });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div
      className={`header`}
      style={{
        backgroundColor: headerStyles.bgColor,
        color: headerStyles.color,
        boxShadow: headerStyles.shadow,
      }}
    >
      <div className={"innerPadding"}>
        {headerStyles.bgColor !== "transparent" ? (
          <img src={darkLogo} alt="" srcset="" className={"headerLogo"} />
        ) : (
          <img src={logo} alt="" srcset="" className={"headerLogo"} />
        )}

        <ul className={"headerList"}>
          <li>
            <p>Անշարժ գույք</p>
            {headerStyles.bgColor !== "transparent" ? (
              <img src={darkIcon} alt="" srcset="" />
            ) : (
              <img src={icon} alt="" srcset="" />
            )}
          </li>
          <li>
            <p>Ակցեռն էքսկլյուզիվ</p>
          </li>
          <li>
            <p>Ծառայություններ</p>
            {headerStyles.bgColor !== "transparent" ? (
              <img src={darkIcon} alt="" srcset="" />
            ) : (
              <img src={icon} alt="" srcset="" />
            )}
          </li>
          <li>
            <p>Մեր մասին</p>
          </li>
          <li>
            <p>Բլոգ</p>
          </li>
          <li>
            <p>Հետադարձ կապ</p>
          </li>
          <li>
            <p>Համեմատել</p>
          </li>
          <li>
            {headerStyles.bgColor !== "transparent" ? (
              <img src={darkGlobe} alt="" srcset="" />
            ) : (
              <img src={globe} alt="" srcset="" />
            )}

            {headerStyles.bgColor !== "transparent" ? (
              <img src={darkIcon} alt="" srcset="" />
            ) : (
              <img src={icon} alt="" srcset="" />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
