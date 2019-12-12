import React from "react";

function PlanetInfo({ url, exp, date }) {

    return (
        <div className="planet-info">
            <div className="date">
                {date}
            </div>
            <div className="explanation">
                <p>{exp}</p>
            </div>
            <div className="img">
                <img alt="Pic of planet" src={url}/>
            </div>
        </div>
    );
}

export default PlanetInfo;
