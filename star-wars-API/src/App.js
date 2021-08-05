import React, {useState, useEffect} from 'react'
import axios from 'axios'
import RenderPeople from './RenderPeople'
import RenderPlanets from './RenderPlanets'
import RenderStarships from './RenderStarships'

function App() {
  const [peopleFetchedInformation, setPeopleFetchedInformation] = useState([])
  const [planetFetchedInformation, setPlanetFetchedInformation] = useState([])
  const [starshipFetchedInformation, setStarshipFetchedInformation] = useState([])

  const [peopleDisplayedInformation, setPeopleDisplayedInformation] = useState([])
  const [planetDisplayedInformation, setPlanetDisplayedInformation] = useState([])
  const [starshipDisplayedInformation, setStarshipDisplayedInformation] = useState([])

  // Fetch the information about the objects from the API
  useEffect(() => {

      for (var i = 1; i <= 82; i++) {
          let url = 'https://swapi.dev/api/people/' + i + '/'

          axios.get(url)
              .then(res => {
                  const obj = res.data

                  setPeopleFetchedInformation(prevPeopleInformation => {
                      return [...prevPeopleInformation, obj]
                  })
              })
              .catch(err => {
                  console.log(err)
              })
      }

    }, [])  
  
    useEffect(() => {

      for (var i = 1; i <= 60; i++) {
          let url = 'https://swapi.dev/api/planets/' + i + '/'

          axios.get(url)
              .then(res => {
                  const obj = res.data

                  setPlanetFetchedInformation(prevPlanetInformation => {
                      return [...prevPlanetInformation, obj]
                  })
              })
              .catch(err => {
                  console.log(err)
              })
      }

    }, [])  

    useEffect(() => {

      for (var i = 1; i <= 36; i++) {
          let url = 'https://swapi.dev/api/starships/' + i + '/'

          axios.get(url)
              .then(res => {
                  const obj = res.data

                  setStarshipFetchedInformation(prevStarshipInformation => {
                      return [...prevStarshipInformation, obj]
                  })
              })
              .catch(err => {
                  console.log(err)
              })
      }

    }, [])  

  // Handle functions
  function handlePeople() {
    const seen = new Set()

    const filteredArray = peopleFetchedInformation.filter(el => {
      const duplicate = seen.has(el.name);
      seen.add(el.name);
      return !duplicate;
    })

    setPeopleDisplayedInformation(filteredArray)
    setPlanetDisplayedInformation([])
    setStarshipDisplayedInformation([])
  }

  function handlePlanets() {
    const seen = new Set()

    const filteredArray = planetFetchedInformation.filter(el => {
      const duplicate = seen.has(el.name);
      seen.add(el.name);
      return !duplicate;
    })
    
    setPeopleDisplayedInformation([])
    setPlanetDisplayedInformation(filteredArray)
    setStarshipDisplayedInformation([])
  }

  function handleStarships() {    
    const seen = new Set()

    const filteredArray = starshipFetchedInformation.filter(el => {
      const duplicate = seen.has(el.name);
      seen.add(el.name);
      return !duplicate;
    })

    setPeopleDisplayedInformation([])
    setPlanetDisplayedInformation([])
    setStarshipDisplayedInformation(filteredArray)
  }

  function handleClearPanel() {
    setPeopleDisplayedInformation([])
    setPlanetDisplayedInformation([])
    setStarshipDisplayedInformation([])
  }
  
  // Return HTML
  return (
    <>
      <div>
          <h1 style={{marginLeft: 20 + 'px'}}>Star Wars Wikipedia</h1>
          <br/>
          <button style={{marginLeft: 20 + 'px'}}  onClick={handlePeople}>Information About People</button>
          <br/>
          <br/>
          <button style={{marginLeft: 20 + 'px'}} onClick={handlePlanets}>Information About Planets</button>
          <br/>
          <br/>
          <button style={{marginLeft: 20 + 'px'}} onClick={handleStarships}>Information About Starships</button>
          <br/>
          <br/>
          <button style={{marginLeft: 20 + 'px'}} onClick={handleClearPanel}>Clear Panel</button>
          <RenderPeople peopleDisplayedInformation={peopleDisplayedInformation}/>
          <RenderPlanets planetDisplayedInformation={planetDisplayedInformation}/>
          <RenderStarships starshipDisplayedInformation={starshipDisplayedInformation}/>
      </div>
    </>
  )

}

export default App;
