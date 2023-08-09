import "./Buddy.scss";
import tiger from "../../assets/tiger.gif";
import Cards from "../../components/Cards/Cards";

const Buddy = () => {
  return (
    <div>
      <h1 className="buddy-heading">Hi Anna!</h1>
      <img className="buddy-avatar" src={tiger} alt="buddy-character" />
      <Cards />
    </div>
  );
};

export default Buddy;
