import loader from "./../../assets/images/loader.gif";
const Preloader = () => {
  return (
    <div className="preloader">
      <img src={loader} alt="" width={30} />
    </div>
  );
};
export default Preloader;
