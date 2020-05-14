import React from 'react'

class Pet extends React.Component {


  changePetStatus = () => {
    console.log('hey i got adopted')
  }

  render() {
    // const { name, gender, age, weight, isAdopted, id } = this.props
    const {name, gender, age, weight, id, isAdopted} = this.props.pet
    console.log('Pet.js props: ', this.props.pet)
    // console.log('adoptedPet Function: ', () => this.props.onAdoptPet)
    return (
      <div className="card">
        <div className="content">
          <a className="header">

            {/*'♀' OR '♂' */}
            {name}
            {/* PET NAME */}
          </a>
          <div className="meta">
            <span className="date">{gender}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted === true ? 
            <button className="ui disabled button">Already adopted</button> :
            <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>
          }
          
        </div>
      </div>
    )
  }
}

export default Pet
