import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expense.css'
import Card from '../UI/Card';

const Expense = (spending) => {
    return (
        <Card className="expense">
            <ExpenseItem
                date={spending.item[0].date}
                title={spending.item[0].title}
                amount={spending.item[0].amount}/>
             
             <ExpenseItem
                date={spending.item[1].date}
                title={spending.item[1].title}
                amount={spending.item[1].amount}/>
             
             <ExpenseItem
                date={spending.item[2].date}
                title={spending.item[2].title}
                amount={spending.item[2].amount}/>
             
             <ExpenseItem
                date={spending.item[3].date}
                title={spending.item[3].title}
                amount={spending.item[3].amount}/>
             
        </Card>
    )
}

export default Expense;