import React from "react";
import "./ExpenseDate.css"

const ExpenseDate = (occasion) => {
    const month = occasion.date.toLocaleString('en-US', {month: 'long'});
    const year = occasion.date.getFullYear();
    const day = occasion.date.toLocaleString('en-US', {day: '2-digit'});

    return (
        <div className="expense-date">
             <div>
                <div>{day}</div>
                <div>{month}</div>
                <div>{year}</div>
                
                
            </div>            
        </div>
    );
}

export default ExpenseDate;