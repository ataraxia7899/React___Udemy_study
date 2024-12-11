// 컴포너트 분리 - 지출 내역 추가 양식 작성 컴포넌트
import React, {useState} from "react";
import "./ExpenseFrom.css"

const ExpenseForm = (props) => {
    //개별로 state를 호출하는 방식
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    /* 한번에 state를 호출하는 방식이지만 업데이트도 한번에 설정해야한다. (... 이용)
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enterDate: ""
    }); */

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    // 밑의 onChange가 titleChangeHandler를 지목해서
    // input에 변동이 생길때마다 위 함수가 실행된다.

    const submitHandler = (event) => {
        event.preventDefault();
        // 요청이 자동으로 발송되는 기능 막기

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
    };

        props.SaveExpenseData(expenseData);   
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
    <form onSubmit={submitHandler}>  
    { /* 버튼 type을 submit로 되있고 form요소 안에서 클릭되면 
    form 요소 자체에서 이벤트를 발생시킨다. 
    그 이벤트를 수신하기 위한 코드 */ }
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={(titleChangeHandler)} />           
            </div>
            <div className="new-expense__control">
                <label>amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />     
                {/* 숫자타입을 받으며 최솟값 0.01, 간격 0.01로 설정       */}
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2030-12-31" value={enteredDate} onChange={dateChangeHandler} />
                {/* 타입을 date로 설정함으로 날짜선택기를 제공해주도록 하고
                최소날짜와 최대 설정할 수 있는 날짜를 설정함.       */}
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
)};

export default ExpenseForm;