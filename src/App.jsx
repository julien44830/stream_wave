
import BackgroundWave from "./components/BackgroundWave";
import Navbar from "./components/NavBar";
import MusicStyleSelect from "./components/MusicStytleSelect";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <MusicStyleSelect />
      <BackgroundWave />
    </>
  );

}

export default App;
