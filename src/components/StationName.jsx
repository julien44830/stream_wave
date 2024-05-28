function StationName({name, url}){
    return (
        <figure>
            <a href={url}>{name}</a>
        </figure>
    )
}

export default StationName;