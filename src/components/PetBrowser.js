import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
      {this.props.pets.map((pet) => {
        return <Pet key={pet.id} type={pet.type} gender={pet.gender} age={pet.age} weight={pet.weight} name={pet.name} isAdopted={pet.isAdopted} onAdoptPet ={this.props.onAdoptPet} id={pet.id} />
      })}
    </div>
  }
}

export default PetBrowser