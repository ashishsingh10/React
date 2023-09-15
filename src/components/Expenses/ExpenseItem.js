import React, {useState} from "react";
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (stuff) => {
    const [title, setTitle] = useState(stuff.title);
    const buttonHandler = () => {
        setTitle("New Ttle");        
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={stuff.date}/>  
            <h2>{title}</h2>         
            <div className="expense-item__description">
                
            <div className="expense-item__price">${stuff.amount}</div>
            </div>
            <button onClick= {buttonHandler}>Click me</button>
        </Card>
    );
}

export default ExpenseItem;