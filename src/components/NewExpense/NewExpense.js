import React from "react";
import ExpenseForm from "./ExpenseForm.js";
import "./NewExpense.css";

// 사용한 돈 내역 추가하는 input 컴포넌트
const NewExpense = (props) => {
    const SaveExpenseDataHandler = (DownExpenseData) => {
        const expenseData = {
            ...DownExpenseData, 
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return <div className="new-expense">
        <ExpenseForm SaveExpenseData={SaveExpenseDataHandler} />
    </div>
};

export default NewExpense;