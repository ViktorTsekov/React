import React from 'react'

function RenderStarships({starshipDisplayedInformation}) {
    return (
        <div>
            <ul>
                {starshipDisplayedInformation.map(data => (
                    <li key={data.name}>{data.name}, <b>Cost in credits: </b> {data.cost_in_credits}, <b>Length: </b> {data.length}, <b>Max speed: </b> {data.max_atmosphering_speed}, <b>Crew: </b> {data.crew}, <b>Starship class: </b> {data.starship_class}</li>
                ))}
            </ul>
        </div>
    )
}

export default RenderStarships
