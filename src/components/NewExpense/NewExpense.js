import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpensesForm";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random()
        }
        
        props.onAddExpense(expenseData);
        console.log(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;