import React from "react";
import ExpenseFrom from "./ExpenseForm.js";
import "./NewExpense.css";

// 사용한 돈 내역 추가하는 input 컴포넌트
const NewExpense = () => {
    return <div className="new-expense">
        <ExpenseFrom />
    </div>
};

export default NewExpense;