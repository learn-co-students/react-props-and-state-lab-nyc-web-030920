import React from 'react'

import Pet from './Pet'

// class PetBrowser extends React.Component {
//   render() {
//     console.log('PetBrowser props: ', this.props.pets)
//     console.log('Adopted: in PetBrowser: ', this.props.adoptedPet)

//     return (
//       <div className="ui cards">
      
        {/* {this.props.pets.map(singlePet => <Pet 
          name={singlePet.name}
          key={singlePet.id}
          gender={singlePet.gender}
          age={singlePet.age}
          weight={singlePet.weight}
          isAdopted={singlePet.isAdopted}
          id={singlePet.id}
          
          adoptedPet={singlePet.adoptedPet}
        /> )} */}

  //         {}
  //     </div>
  //   )
  // }
// }

class PetBrowser extends React.Component {
  render() {
    
    const petCards = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ));

    return <div className="ui cards">{petCards}</div>;
  }
}

export default PetBrowser
