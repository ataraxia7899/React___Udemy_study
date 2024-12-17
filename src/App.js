import React, { useState } from "react";
// import Card from "./components/UI/Card.js";
// import ExpenseItem from "./components/Expenses/ExpenseItem.js"
import Expenses from "./components/Expenses/Expenses.js"
import NewExpense from "./components/NewExpense/NewExpense.js";

const DUMMY_EXPENSES = [
    { id: 'e1', title: '휴지', amount: 10000, date: new Date(2020, 7, 14) },
    { id: 'e2', title: '텔레비전', amount: 1147600, date: new Date(2021, 2, 12) },
    { id: 'e3', title: '자동차 보험', amount: 422200, date: new Date(2022, 2, 28) },
    { id: 'e4', title: '책상', amount: 646300, date: new Date(2019, 5, 12) },
    { id: 'e5', title: '커피 머신', amount: 89000, date: new Date(2021, 0, 15) }, // January
    { id: 'e6', title: '책', amount: 25000, date: new Date(2020, 3, 10) }, // April
    { id: 'e7', title: '운동화', amount: 120000, date: new Date(2019, 6, 22) }, // July
    { id: 'e8', title: '헤드폰', amount: 330000, date: new Date(2021, 8, 5) }, // September
    { id: 'e9', title: '전자레인지', amount: 150000, date: new Date(2020, 10, 18) }, // November
    { id: 'e10', title: '캠핑 장비', amount: 450000, date: new Date(2019, 11, 3) }, // December
    { id: 'e11', title: '스마트워치', amount: 299000, date: new Date(2022, 4, 25) }, // May
    { id: 'e12', title: '자전거 헬멧', amount: 78000, date: new Date(2021, 6, 9) }, // July
    { id: 'e13', title: '블루투스 스피커', amount: 110000, date: new Date(2020, 9, 30) }, // October
    { id: 'e14', title: '러닝머신', amount: 800000, date: new Date(2022, 6, 14) } // July
];


const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense => {
        setExpenses((prevExpenses) => {
            return [expense, ...expenses]
        });
    };
    
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;