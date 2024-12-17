import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate.js"
import Card from "../UI/Card.js"
import "./ExpenseItem.css"

// 지출 목록 컴포넌트
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');

    const clickHandler = () => {
        setTitle("Update");
        console.log(title);
    };

    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}원</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
        </li>
    );
}

export default ExpenseItem;