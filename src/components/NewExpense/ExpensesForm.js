import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {

    const [newTitle, setNewTitle] = useState("");

    const titleChangeHandler = (event) =>{
        console.log(event.target.value)
    }
    const amountChangeHandler = (event) =>{
        console.log(event.target.value)
    }
    const dateChangeHandler = (event) =>{
        console.log(event.target.value)
    }
    return (
        <form>
            <div className="new-expense__mastercontrol">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={newTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;