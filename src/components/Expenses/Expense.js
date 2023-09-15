import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expense.css'
import Card from '../UI/Card';

const Expense = (z) => {
    
    return (
        <Card className="expense">
            <ExpenseItem
                date={z.item[0].date}
                title={z.item[0].title}
                amount={z.item[0].amount}/>
             
             <ExpenseItem
                date={z.item[1].date}
                title={z.item[1].title}
                amount={z.item[1].amount}/>
             
             <ExpenseItem
                date={z.item[2].date}
                title={z.item[2].title}
                amount={z.item[2].amount}/>
             
             <ExpenseItem
                date={z.item[3].date}
                title={z.item[3].title}
                amount={z.item[3].amount}/>
             
        </Card>
    )
}

export default Expense;