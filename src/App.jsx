
import BackgroundWave from "./components/BackgroundWave";
import MusicStyleSelect from "./components/MusicStytleSelect";
import Navbar from "./components/NavBar";
import { Outlet } from "react-router-dom"
// import MusicStyleSelect from "./components/MusicStytleSelect";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <MusicStyleSelect /> */}
      <BackgroundWave />
    </>
  );

}

export default App;
