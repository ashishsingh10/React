import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expense.css'
import Card from '../UI/Card';

const Expense = (stuff) => {
    
    return (
        <Card className="expense">

            {
                stuff.item.map(
                    expenses => (
                        <ExpenseItem
                            date={expenses.date}
                            title={expenses.title}
                            amount={expenses.amount}/>
                    )
                )
            }
        </Card>
    )
}

export default Expense;