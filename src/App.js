import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    toys: [],
    display: false
  }


  componentDidMount = async () => {
    const res = await fetch("http://localhost:3000/toys")
    const toys = await res.json()
    this.setState({ toys })
  }


  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  createToy = (toy) => {
    let reqObj = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(toy),
    };

    fetch("http://localhost:3000/toys", reqObj)
    .then(res => res.json())
    .then(newToy => this.setState(previousState => {
      return {
        toys: [...previousState.toys, newToy]
      }
    }))
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm createToy={this.createToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys}/>
      </>
    );
  }

}

export default App;
