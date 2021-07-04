import React from "react";
import { PlanetInfoContainer, PlanetDate, PlanetImgContainer, PlanetExplanation, PlanetImg } from './styles'

function PlanetInfo({ url, exp, date }) {

    return (
        <PlanetInfoContainer>
            <PlanetDate>
                {date}
            </PlanetDate>
            <PlanetImgContainer>
                <PlanetExplanation>
                    {/* <p>{exp}</p> */}
                    {exp}
                </PlanetExplanation>

                <PlanetImg alt="Pic of planet" src={url} />
            </PlanetImgContainer>
        </PlanetInfoContainer>
    );
}

export default PlanetInfo;
