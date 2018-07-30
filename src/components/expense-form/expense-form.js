import React from 'react';
import PropTypes from 'prop-types';

import './expense-form.scss';

const defaultState = {
  name: '',
  amount: 0,
  date: '',
  description: '',
  editing: false,
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddExpense(this.state);
    this.setState(defaultState);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const createOrUpdate = this.props.expense ? 'Update Expense' : 'Create Expense';
    const name = this.props.expense ? 'updateName' : 'name';
    const description = this.props.expense ? 'updateDescription' : 'description';
    return (
      <form onSubmit={ this.handleSubmit } data-cy="expense-form">
        <input 
          type="text"
          name="name"
          placeholder="name"
          value={ this.state.name }
          onChange={ this.handleChange }
          data-cy={name}
        />
        <input
          type="number"
          min="0.00" 
          step="0.01"
          name="cost"
          placeholder="enter an amount"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input 
          type="text"
          name="description"
          placeholder="description"
          value={ this.state.description }
          onChange={ this.handleChange }
          data-cy={description}
        />
        <button type="submit" data-cy="expense-form-submit">{createOrUpdate}</button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  handleAddExpense: PropTypes.func,
  handleComplete: PropTypes.func,
  expense: PropTypes.object,
};
