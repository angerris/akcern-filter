import HomeCard from "./HomeCard";
import buyCard from "./../../../assets/images/buyCard.svg";
import rentCard from "./../../../assets/images/rentCard.svg";
import sellCard from "./../../../assets/images/sellCard.svg";

export default function HomeCardWrapper() {
  return (
    <div className={"homeCardWrapper"}>
      <HomeCard
        navlink={"/catalog"}
        buttonText={"ԿԱՏԱԼՈԳ"}
        cardText={"գնել անշարժ գույք"}
        cardImg={buyCard}
      />
      <HomeCard
        navlink={"/catalog"}
        buttonText={"ԿԱՏԱԼՈԳ"}
        cardText={"վարձակալել անշարժ գույք"}
        cardImg={rentCard}
      />
      <HomeCard
        navlink={"/"}
        buttonText={"ՏԵՂԱԴՐԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ"}
        cardText={"վաճառել անշարժ գույք"}
        cardImg={sellCard}
      />
    </div>
  );
}
