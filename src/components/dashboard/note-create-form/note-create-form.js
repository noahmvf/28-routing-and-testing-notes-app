import React from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  title: '',
  price: 0,
};

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNote(this.state);
    this.setState(defaultState);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input 
          type="text"
          name="title"
          placeholder="title"
          value={ this.state.title }
          onChange={ this.handleChange }
        />
        <input 
          type="number"
          name="price"
          placeholder="price"
          value={ this.state.price }
          onChange={ this.handleChange }
        />
        <button type="submit">Create Note</button>
      </form>
    );
  }
}

Note.propTypes = {
  handleAddNote: PropTypes.func,
};
