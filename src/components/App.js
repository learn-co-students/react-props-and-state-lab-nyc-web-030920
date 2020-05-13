import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
 
    state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }

    onChangeType = (event) => {
      this.setState(
        { filters: {
          type: event.target.value }
        }
      )
    }

    onAdoptPet = (id) => {
      this.setState({
        pets: this.state.pets.map(pet => (pet.id === id ? {...pet, isAdopted: true} : pet))
      })
    }

    onFindPetsClick = () => {
      let url 
      if(this.state.filters.type === 'all'){
        url = '/api/pets'
      }else{
        url = `/api/pets?type=${this.state.filters.type}`
      }
      fetch(url)
      .then(response => response.json())
      .then(pets => this.setState({pets}))
    }

  render() {
    console.log('App State', this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
