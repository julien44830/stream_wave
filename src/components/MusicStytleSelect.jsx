import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import StationName from "./StationName";

function MusicStyleSelect() {
    const radioList = useLoaderData();
    // console.log(radioList);

    const [selectedStation, setSelectedStation] = useState("");
    const [Tag, setTag] = useState("");
    console.log('%c⧭', 'color: #ff0000', Tag);


    const choiseTag = (event) =>{
        setTag(event.target.value)
    }

    const handlePlay = (url) => {
      setSelectedStation(url);
    };

    

    return (
        <section className="section-select-style-music">
            <select
                name=""
                id=""
                className="select-style-music"
                onChange={choiseTag}
            >
                <option value="pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Hip-Hop/Rap">Hip-Hop/Rap</option>
                <option value="Electro/Dance">Electro/Dance</option>
                <option value="Jazz">Jazz</option>
                <option value="Classique">Classique</option>
                <option value="Country">Country</option>
                <option value="Reggae">Reggae</option>
                <option value="Blues">Blues</option>
                <option value="Soual/Funk">Soual/Funk</option>
                <option value="Latine">Latine</option>
                <option value="Metal">Metal</option>
            </select>

            <div className="list-station">
                <ul className="station-ul scroller">
                    {radioList.map((item) => (
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
