import React from "react";

class Pet extends React.Component {
  render() {
    console.log(this.props);
    const {
      age,
      weight,
      type,
      name,
      isAdopted,
      onAdoptPet,
      gender,
      id,
    } = this.props;
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === "female" ? "♀" : "♂"}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age:{age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted ? (
            <button className="ui disabled button">Adopted! Yay!</button>
          ) : (
            <button
              className="ui primary button"
              onClick={() => onAdoptPet(id)}
            >
              Adopt Pet
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Pet;
