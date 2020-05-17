import React from 'react'
class Pet extends React.Component {
  state = {
    isAdopted: this.props.isAdopted,
    onAdopt: {
      id: ""
    }
  }
  adoptPet = () => {
    this.setState({
      onAdopt: {id: this.props.id}, isAdopted: true
    })
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {(this.props.gender === "female") ? '♀' : '♂'}
           {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age} </p>
            <p>Weight: {this.props.weight} </p>
          </div>
        </div>
        <div className="extra content">
          {this.state.isAdopted ? <button className="ui disabled button">Already adopted</button> :  <button className="ui primary button" onClick={this.adoptPet} >Adopt pet</button>}
        </div>
      </div>
    )
  }
}
export default Pet
// function component
// const Filters = (props) => {
  // return(
  // )
// }