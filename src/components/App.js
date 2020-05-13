import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

let petsEndpoint = "/api/pets";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }
  updateFilter = (event) => {
    this.setState({
      filters: { type: event.target.value }, //changing the state of type
    });
  };

  fetchPets = () => {
    console.log("??");
    // using the updated state to know which
    // endpoint to use for the GET fetch request
    fetch(
      this.state.filters.type === "all"
        ? petsEndpoint
        : `${petsEndpoint}?type=${this.state.filters.type}`
    )
      .then((resp) => resp.json())
      .then((requestedPets) => {
        this.setState({ pets: requestedPets });
      });
  };

  changeAdoptState = (id) => {
    let newPets = this.state.pets.map((pet) => {
      if (pet.id === id) {
        pet.isAdopted = true;
      }
      return pet;
    });
    // console.log(chosen)
    this.setState({ pets: newPets });
  };

  render() {
    console.log(this.state);
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onFindPetsClick={this.fetchPets}
                onChangeType={this.updateFilter}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.changeAdoptState}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
