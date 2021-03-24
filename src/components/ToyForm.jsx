import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    form: {
      name: "",
      image: "",
      like: 0
    }
  }

  addForm = (e) => {
    const key = e.target.name
    const value = e.target.value
    this.setState(previousState => {
      return {
        form: {...previousState.form, 
          [key]: value
        }
      }    
    })
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createToy(this.state.form);
  }


  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" onChange={this.addForm} value={this.state.name} name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input type="text" onChange={this.addForm} value={this.state.image} name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
