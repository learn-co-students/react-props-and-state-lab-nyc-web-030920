import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
const baseUrl = '/api/pets'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onPetsClick = () => {
    if (this.state.filters.type === "all"){
      fetch(baseUrl)
      .then(response => response.json())
      .then(pets => this.setState({pets}))
    } else {
      fetch(baseUrl + `?type=${this.state.filters.type}`)
      .then(response => response.json())
      .then(pets => this.setState({pets}))
    }
  }

  onChangeType = (e) => {
    this.setState({filters: {type: e.target.value}})
  }

  onAdoptPet = (id) => {
    const copy = this.state.pets.map(pet => pet.id === id ? {...pet, isAdopted: !pet.isAdopted } : pet)
    this.setState({
      pets: copy
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              onAdoptPet={this.onAdoptPet}
              pets={this.state.pets}  />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
