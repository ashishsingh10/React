import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expense.css'
import Card from '../UI/Card';

const Expense = (stuff) => {
    
    return (
        <Card className="expense">
            <ExpenseItem
                date={stuff.item[0].date}
                title={stuff.item[0].title}
                amount={stuff.item[0].amount}/>
             
             <ExpenseItem
                date={stuff.item[1].date}
                title={stuff.item[1].title}
                amount={stuff.item[1].amount}/>
             
             <ExpenseItem
                date={stuff.item[2].date}
                title={stuff.item[2].title}
                amount={stuff.item[2].amount}/>
             
             <ExpenseItem
                date={stuff.item[3].date}
                title={stuff.item[3].title}
                amount={stuff.item[3].amount}/>
             
        </Card>
    )
}

export default Expense;