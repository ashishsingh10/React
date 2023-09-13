import './App.css';
import Expense from './components/Expense';



function App(){
    let expenses = [
        {
            id : 'e1',
            title: "Course Fee",
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

    return (
        <div>
            <h2>Let's get started</h2>
            <Expense item={expenses}/>
             
        </div>
       
        ); 
}

export default App;