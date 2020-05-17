import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'
let ENDPOINT = '/api/pets'
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
  onChangeType = (value) => {
    this.setState({filters: {type: value}})
  }
  getAllPets = () => {
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(pets => this.getPets(pets))
  }
  getPets = (newValue) => {
    this.setState({pets: newValue})
  }
  getFilteredPets = () => {
    fetch(ENDPOINT + '?type=' + this.state.filters.type).then(resp => resp.json()).then(pets => this.getPets(pets))
  }
  render() {
    (this.state.filters.type !== 'all') ?  this.getFilteredPets() : this.getAllPets()
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App