import React from 'react'

function RenderPeople({peopleDisplayedInformation}) {
    return (
        <div>
            <ul>
                {peopleDisplayedInformation.map(data => (
                    <li key={data.name}>{data.name}, <b>Height: </b> {data.height}, <b>Birth year: </b> {data.birth_year}, <b>Gender:</b> {data.gender}</li>
                ))}
            </ul>
        </div>
    )
}

export default RenderPeople
