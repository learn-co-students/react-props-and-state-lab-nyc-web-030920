import React from 'react'
// import {getAll} from '../data/pets'
import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePetCards = () => {
    return this.props.pets.map((pet) => <Pet key={pet.id} {...pet}/>)
  }

  render() {
    return (

      <div className="ui cards">
        {this.generatePetCards()}
        {/* why did we have to invoke this? */}
      </div>
    )
  }
}

export default PetBrowser
