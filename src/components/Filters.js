import React from 'react'
// import PetBrowser from './PetBrowser'
class Filters extends React.Component {
  state = {
    type: ""
  }
  onChangeType = () => {
    this.props.onChangeType(this.state.type)
  }
  changeState = (event) => {
    this.setState({
      type: event.target.value
    })
  }
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.changeState}>
            <option value="all" >All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>
        <div className="field">
          <button className="ui secondary button" onClick={this.onChangeType}>Find pets</button>
        </div>
      </div>
    )
  }
}
export default Filters