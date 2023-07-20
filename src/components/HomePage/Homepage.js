import HomeCardWrapper from "./HomeCards/HomeCardWrapper";
import style from "./Homepage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={style.homePage}>
        <div className={style.textWrapper}>
          <h1 className={style.title}>ԱԿՑԵՌՆ ՀՈԼԴԻՆԳ</h1>
          <p className={style.text}>
            Ակցեռն հոլդինգի գործունեության ոլորտում են անշարժ գույքի հետ կապված
            ցանկացած տեսակի գործարքներ՝ առք, վաճառք, վարձակալություն, բնակելի
            (բնակարաններ, տներ, առանձնատներ, հողամասեր, ամառանոցներ) և առևտրային
            նշանակության (արտադրական օբյեկտներ), ինչպես նաև անշարժ գույքի
            գնահատում։
          </p>
        </div>
        <HomeCardWrapper />
      </div>
    </>
  );
}
