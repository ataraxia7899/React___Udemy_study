import React from "react";
import Card from "./components/UI/Card.js";
import ExpenseItem from "./components/Expenses/ExpenseItem.js"
import "./index.css"
import expenses from "./expenses.js"
import NewExpense from "./components/NewExpense/NewExpense.js";

const App = () => {
    return (
        <Card className="expense_components">
            <NewExpense />
            <h2 className="app_title">지출 목록</h2>
            {expenses.map((expense) => (
                /* JS의 map을 활용해 배열의 
                각 원소를 컴포넌트로 대체해 반환 */
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
}

export default App;