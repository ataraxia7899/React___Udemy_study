import React from "react";

import ExpenseItem from "./ExpenseItem.js";
import "./ExpensesList.css";

// title값과 amount값같은 값들을 동적으로 자동 배정해줌
// 조건 검색이 안되면 if값의 <p>태그 출력
// filteredExpenses를 통해 년도값이 같은 소비목록만 조회됨
function ExpensesList(props) {
    

    return <ul className="expenses-list">
        {props.items.length === 0 ? (
        <h2 className="expenses-list__fallback"> 조건에 맞는 값이 조회되지 않습니다. </h2>
    ) : (
        props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )))}
    </ul>
}

export default ExpensesList;