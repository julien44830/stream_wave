import { useLoaderData } from "react-router-dom";
import StationName from "./StationName";

function MusicStyleSelect() {

    const radioList = useLoaderData();
    console.log(radioList);


    return (
        <section className="section-select-style-music">
            <select
                name=""
                id=""
                className="select-style-music"
            >
                <option value="">Pop</option>
                <option value="">Rock</option>
                <option value="">Hip-Hop/Rap</option>
                <option value="">Electro/Dance</option>
                <option value="">Jazz</option>
                <option value="">Classique</option>
                <option value="">Country</option>
                <option value="">Reggae</option>
                <option value="">Blues</option>
                <option value="">Soual/Funk</option>
                <option value="">Latine</option>
                <option value="">Metal</option>
            </select>

            <div className="list-station">
                <ul className="station-ul scroller">
                    {radioList.map((item) => (
                        <li key={item.changeuuid} className="station-li">
                            <StationName name={item.name} url={item.url_resolved}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default MusicStyleSelect;
