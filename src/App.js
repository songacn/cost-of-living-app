import "./App.css";
import Landing from "./pages/Landing/Landing";
import Page2 from "./pages/Page2/Page2";
import Loading from "./pages/Loading/Loading";

function App() {
	return (
		<div className="App">
			<Loading />
			<Landing />
			<Page2 />
		</div>
	);
}

export default App;
