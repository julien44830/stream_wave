
import BackgroundWave from "./components/BackgroundWave";
import Navbar from "./components/NavBar";
import { Outlet } from "react-router-dom"
// import MusicStyleSelect from "./components/MusicStytleSelect";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />

      <BackgroundWave />
    </>
  );

}

export default App;
