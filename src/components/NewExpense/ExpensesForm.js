import React from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__mastercontrol">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;