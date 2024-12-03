import React from "react";
import "./ExpenseDate.css";

//지출 날짜를 렌더링하는 컴포넌트
const ExpenseDate = (props) => {
    const month = props.date.toLocaleString("ko-KR", {month: "long"});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("ko-KR", {day: "2-digit"});

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}년</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;