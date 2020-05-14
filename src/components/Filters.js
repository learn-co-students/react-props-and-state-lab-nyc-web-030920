import React from 'react'

class Filters extends React.Component {
  render() {
    // destructured props - instead of using this.props.filterType / this.props.handleFilterChange / etc
    const { filterType, handleFilterChange, findPets } = this.props;
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={filterType} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={findPets} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
