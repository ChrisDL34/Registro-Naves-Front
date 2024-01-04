import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Home";
import NavesView from "./component/nave/NavesView";
import NavBar from "./component/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddNave from "./component/nave/AddNave";
import EditNave from "./component/nave/EditNave";
import NaveProfile from "./component/nave/NaveProfile";

function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<NavesView />}></Route>

          <Route exact path="/view-naves" element={<NavesView />}></Route>

          <Route exact path="/add-naves" element={<AddNave />}></Route>

          <Route exact path="/edit-nave/:id" element={<EditNave />}></Route>

          <Route
            exact
            path="/nave-profile/:id"
            element={<NaveProfile />}
          ></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
