import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import StationName from "./StationName";

function MusicStyleSelect() {
    const radioList = useLoaderData();

    const [selectedStation, setSelectedStation] = useState("");
    const [tag, setTag] = useState("pop");

    const choiseTag = (event) =>{
        setTag(event.target.value)
    }

    const handlePlay = (url) => {
      setSelectedStation(url);
    };

    const filteredList = radioList.filter(item => item.tags.includes(tag));

    return (
        <section className="section-select-style-music">
            <select
                name=""
                id=""
                className="select-style-music"
                onChange={choiseTag}
            >
                <option value="pop">Pop</option>
                <option value="rock">Rock</option>
                <option value="hip-hop">Hip-Hop/Rap</option>
                <option value="dance">Electro/Dance</option>
                <option value="jazz">Jazz</option>
                <option value="classical">Classique</option>
                <option value="country">Country</option>
                <option value="reggae">Reggae</option>
                <option value="blues">Blues</option>
                <option value="funk">Soual/Funk</option>
                <option value="latin">Latine</option>
                <option value="metal">Metal</option>
            </select>

            <div className="list-station">
                <ul className="station-ul scroller">
                    {filteredList.map((item) => (
                        <li
                            key={item.changeuuid}
                            className="station-li"
                        >
                            <StationName
                                name={item.name}
                                url={item.url_resolved}
                                onPlay={handlePlay}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            {selectedStation && (
                <div className="audio-player">
                    <audio
                        controls
                        autoPlay
                    >
                        <source
                            src={selectedStation}
                            type="audio/mpeg"
                        />
                        Votre navigateur ne supporte pas l'élément audio.
                    </audio>
                </div>
            )}
        </section>
    );
}

export default MusicStyleSelect;
