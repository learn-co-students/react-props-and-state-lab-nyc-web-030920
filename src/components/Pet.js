import React from 'react'

class Pet extends React.Component {
  genderFunction = () => {
    if (this.props.gender === 'male'){return '♂' }
    else if (this.props.gender === 'female'){return '♀' }
  }
  adoptedFunction = () => {
      if (this.props.isAdopted === true) {return <button className="ui disabled button">Already adopted</button> }
      else if (this.props.isAdopted === false) {return <button onClick={() => this.props.onAdoptPet(this.props.id)} className="ui primary button">Adopt pet</button> }
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.genderFunction()}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
            {this.adoptedFunction()}
        </div>
      </div>
    )
  }
}

export default Pet
