import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
const allPetsUrl = '/api/pets'
class App extends React.Component {
  fetchPets = () => {
    if (this.state.filters.type === 'all') {
      fetch(allPetsUrl)
        .then(resp => resp.json())
        .then(pets => this.setState({ pets }))
    }
    else {
      fetch(allPetsUrl + `?type=${this.state.filters.type}`)
        .then(resp => resp.json())
        .then(pets => this.setState({ pets }))
    }
  }

  changeType = (event) => {
    this.setState({ filters: { type: event.target.value } })
  }

  adopted = (petId) => {
    // let compareId = (element) => {
    //   if (petId === element.id){this.setState({[element.isAdopted] : true  }); console.log(element) }
    // }
    // this.state.pets.find(compareId)
    // // this.setState({})
    // // console.log(this.state)
    const copy = this.state.pets.map(pet => pet.id === petId ? {...pet, isAdopted: true } : pet)
    this.setState({
      pets: copy
    })
  }

  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.fetchPets} onChangeType={this.changeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adopted} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
