import React from 'react'


class Pet extends React.Component {

  state = {
    isAdopted: false
  }

  toggleAdopted = (event) => {
    // console.log("clicked")
    this.setState({isAdopted: !this.state.isAdopted})
  }

  render() {
    const {name, gender, type, age, weight, isAdopted} = this.props

    return (
      <div className="card">

        <div className="content">
          <a className="header">
            {name}
            {gender === "male" ? '♂' : '♀' }
          </a>

          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">

          {this.state.isAdopted ? 
            <button disabled={isAdopted} className="ui disabled button">Adopted</button> : 
            <button onClick={this.toggleAdopted} disabled={isAdopted} className="ui primary button">Adopt pet</button>}
          
        </div>
      </div>
    )
  }
}

export default Pet
