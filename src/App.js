import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Profile from "./pages/Profile/Profile";
import Habits from "./pages/Habits/Habits";
import Loading from "./pages/Loading/Loading";
import Buddy from "./pages/Buddy/Buddy";
import { useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState("loading");

  const changeTab = (newTab) => {
    setCurrentTab(newTab);
  };

  const viewTab = () => {
    switch (currentTab) {
      case "landing":
        return <Landing />;
      case "profile":
        return <Profile />;
      case "habits":
        return <Habits />;
      case "buddy":
        return <Buddy />;
      default:
        return <Loading />;
    }
  };

  return (
    <div className="App">
      {viewTab()}
      <ul class="nav justify-content-center">
        <li class="nav-item" onClick={() => changeTab("profile")}>
          <a class="nav-link active" aria-current="page" href="#">
            Profile
          </a>
        </li>
        <li class="nav-item" onClick={() => changeTab("buddy")}>
          <a class="nav-link" href="#">
            Buddy
          </a>
        </li>
        <li class="nav-item" onClick={() => changeTab("habits")}>
          <a class="nav-link" href="#">
            Habits
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
