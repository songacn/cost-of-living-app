import "./Loading.scss";
import logo from "../../assets/loading-img.png";

const Loading = () => {
	return (
		<div>
			{/* <h1 className="loading-heading">Loading</h1> */}
			<img src={logo} alt="logo" />
		</div>
	);
};

export default Loading;
