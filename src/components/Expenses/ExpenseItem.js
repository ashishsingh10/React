import React from "react";
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (stuff) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={stuff.date}/>  
            <h2>{stuff.title}</h2>         
            <div className="expense-item__description">
                
            <div className="expense-item__price">${stuff.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;