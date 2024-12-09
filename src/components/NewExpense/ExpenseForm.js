// 컴포너트 분리
import React from "react";
import "./ExpenseFrom.css"
const ExpenseForm = () => {
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" />           
            </div>
            <div className="new-expense__control">
                <label>amount</label>
                <input type="number" min="0.01" step="0.01"/>     
                {/* 숫자타입을 받으며 최솟값 0.01, 간격 0.01로 설정       */}
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2030-12-31" />
                {/* 타입을 date로 설정함으로 날짜선택기를 제공해주도록 하고
                최소날짜와 최대 설정할 수 있는 날짜를 설정함.       */}
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;