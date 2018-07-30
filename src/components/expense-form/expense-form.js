import React from 'react';
import PropTypes from 'prop-types';

import './note-form.scss';

const defaultState = {
  title: '',
  description: '',
  editing: false,
};

export default class NoteForm extends React.Component {
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
    const createOrUpdate = this.props.note ? 'Update Note' : 'Create Note';
    const title = this.props.note ? 'updateTitle' : 'title';
    const description = this.props.note ? 'updateDescription' : 'description';
    return (
      <form onSubmit={ this.handleSubmit } data-cy="note-form">
        <input 
          type="text"
          name="title"
          placeholder="title"
          value={ this.state.title }
          onChange={ this.handleChange }
          data-cy={title}
        />
        <input 
          type="text"
          name="description"
          placeholder="description"
          value={ this.state.description }
          onChange={ this.handleChange }
          data-cy={description}
        />
        <button type="submit" data-cy="note-form-submit">{createOrUpdate}</button>
      </form>
    );
  }
}

NoteForm.propTypes = {
  handleAddNote: PropTypes.func,
  handleComplete: PropTypes.func,
  note: PropTypes.object,
};
