import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

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

  onAdoptPet = (id) => {
    console.log('ANIMAL WAS ADOPTED')
    console.log(id)
    const pets = this.state.pets.map(singlePet => {
      // spread operator ...singlePet
      return singlePet.id === id ? { ...singlePet, isAdopted: true } : singlePet
    })
    
    this.setState({ pets: pets })
    // this.props.isAdopted = true
    // ui disabled button
  }
  
handleFilterChange = (animal) => {
  console.log(animal.target.value)
  // this.setState({ onlyFavs: event.target.value })
  this.setState({ filters: { type: animal.target.value } })
}

findPets = () => {
  if(this.state.filters.type === 'all') {
    fetch('/api/pets')
      .then(response => response.json())
      .then(data => this.setState({ pets: data }))
      .then(arrayData => console.log(this.state.pets))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(response => response.json())
        .then(data => this.setState({ pets: data }))
        .then(arrayData => console.log(this.state.pets))  
  }
    
}

  render() {
    console.log('state', this.state.filters.type )
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                filterType={this.state.filters.type}
                handleFilterChange={this.handleFilterChange}
                findPets={this.findPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
