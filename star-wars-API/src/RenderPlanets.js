import React from 'react'

function RenderPlanets({planetDisplayedInformation}) {
    return (
        <div>
            <ul>
                {planetDisplayedInformation.map(data => (
                    <li key={data.name}>{data.name}, <b>Diameter: </b> {data.diameter}, <b>Climate: </b> {data.climate}, <b>Terrain: </b> {data.terrain}, <b>Population: </b> {data.population}</li>
                ))}
            </ul>
        </div>
    )
}

export default RenderPlanets
