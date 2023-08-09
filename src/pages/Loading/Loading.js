import "./Loading.scss";
import logo from "../../assets/logo.png";

const Loading = () => {
  return (
    <div className="loading">
      <img src={logo} alt="logo" />
      <h1 className="loading-heading">MoneyBuddy</h1>
    </div>
  );
};

export default Loading;
