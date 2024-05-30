import React from "react";


function StationName({ name, url, onPlay }) {

  return (
    <figure>
      <p onClick={() => onPlay(url)}>{name}</p>
    </figure>
  );
}

export default StationName;
