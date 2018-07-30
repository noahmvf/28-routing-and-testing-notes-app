import React from 'react';
import PropTypes from 'prop-types'; /*eslint-disable-line*/
import Modal from '../modal/modal';
import ExpenseForm from '../expense-form/expense-form';

import './expense-item.scss';

export default class ExpenseItem extends React.Component {
  render() {
    const { expense, handleRemoveExpense, handleUpdateExpense } = this.props; /*eslint-disable-line*/
    const showModal = () => handleUpdateExpense({ ...expense, editing: true });
    const hideModal = () => handleUpdateExpense({ ...expense, editing: false });
    const updateAndClose = (updatedExpense) => {
      return handleUpdateExpense({ ...updatedExpense, editing: false });
    };
    return (
      <div className="expense-item" data-cy="expense-item" onClick={showModal}>
      <strong className="expense-name">{expense.name}</strong>
      <p className="expense-description">{expense.description}</p>
      <button
          className="delete-button"
          onClick = {() => handleRemoveExpense(expense)} 
          data-cy="expense-item-delete">
          Delete
      </button>
        <Modal 
          show={expense.editing}
          handleClose={hideModal}
        >
          <h3>Editing {expense.name}</h3>
          <ExpenseForm 
            handleComplete={updateAndClose}
            expense={expense}
          />
        </Modal>
      </div>
    );
  }
}
