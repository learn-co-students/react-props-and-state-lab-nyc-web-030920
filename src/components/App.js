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

  fetchPets = (type) => {
    if(type === "all") {
      fetch(`/api/pets`)
      .then(r => r.json())
      .then(pets => this.setState({pets}))
    } else {
      fetch(`/api/pets?type=${type}`)
        .then(r => r.json())
        .then(pets => this.setState({pets}))
    }
  }

  onChangeType = (newType) => {
    this.setState({
      filters: {
        type: newType
      }
    })
  }
  


  render() {
    this.fetchPets(this.state.filters.type)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} />

            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
