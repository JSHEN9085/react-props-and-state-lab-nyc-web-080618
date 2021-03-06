import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return (
    <div className="ui cards">
      {this.props.pets.map(pet => {
        return ( <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet}/> )
      })}
    </div>)
  }

  // second expression
  // render() {
  //   const pets = this.props.pets.map(pet => (
  //     <Pet
  //       pet={pet}
  //       key={pet.id}
  //       />))
  //       return <div className="ui cards">{pets}</div>
  // }
}

export default PetBrowser
