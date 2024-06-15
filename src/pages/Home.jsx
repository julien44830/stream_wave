import MusicStyleSelect from "../components/MusicStytleSelect";
import Radio3D from "../components/Radio3D";
import '../styles/home.css'

function Home() {
    return (
        <section className="section-3D-select-radio">
            <Radio3D />
            <MusicStyleSelect />
        </section>
    );
}

export default Home;
