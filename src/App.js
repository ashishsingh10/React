import React, { useState } from "react";
import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSE = [
    {
        id : 'e1',
        title: 'Course Fee',
        amount: 250,
        date : new Date(2023, 10, 22)
    },

    {
        id : 'e2',
        title: 'Books',
        amount: 150,
        date : new Date(2023, 10, 22)
    },

    {
        id : 'e3',
        title: 'House Rent',
        amount: 750,
        date : new Date(2023, 10, 22)
    },

    {
        id : 'e4',
        title: 'Food',
        amount: 400,
        date : new Date(2023, 10, 22)
    },
];

const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    const addExpenseHandler = (expense) => {
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expense item={expenses}/>   
        </div>
        ); 
};

export default App;