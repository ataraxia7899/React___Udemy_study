import ExpenseDate from "./ExpenseDate.js"
import "./ExpenseItem.css"

// 지출 목록 컴포넌트
function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;