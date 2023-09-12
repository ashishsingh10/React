// import './App.css';

import ExpenseItem from './components/ExpenseItem';

function App(){
    let expenses = [
        {
            id : 'e1',
            title: "College Fee",
            amount: 250,
            date : new Date(2023, 10, 22)
        },

        {
            id : 'e2',
            title: "Books",
            amount: 150,
            date : new Date(2023, 10, 22)
        },

        {
            id : 'e3',
            title: "House Rent",
            amount: 750,
            date : new Date(2023, 10, 22)
        },

        {
            id : 'e4',
            title: "Food",
            amount: 400,
            date : new Date(2023, 10, 22)
        }
    ];
    // let expenseDate = new Date(2023, 10, 28);
    // let expenseTitle = "School Free";
    // let expenseAmount = 300;
    return (
        <div>
            <h2>Let's get started</h2>
             <ExpenseItem
                date={expenses[0].date}
                title={expenses[0].title}
                amount={expenses[0].amount}>
             </ExpenseItem>
             <ExpenseItem
                date={expenses[1].date}
                title={expenses[1].title}
                amount={expenses[1].amount}>
             </ExpenseItem>
             <ExpenseItem
                date={expenses[2].date}
                title={expenses[2].title}
                amount={expenses[2].amount}>
             </ExpenseItem>
             <ExpenseItem
                date={expenses[3].date}
                title={expenses[3].title}
                amount={expenses[3].amount}>
             </ExpenseItem>
        </div>
       
        ); 
}

export default App;