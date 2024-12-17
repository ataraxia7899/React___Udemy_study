import React, { useState } from 'react';
import Card from '../UI/Card.js';
import ExpensesFilter from './ExpensesFilter.js';
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart.js"
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    
    // getFullYear()로 년도값을 가져와 선택된 년도만 리턴
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            {/* 년도 필터 */}
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {/* 차트 컴포넌트 */}
            <ExpensesChart expenses={filteredExpenses} />
            <div>
                <label style={{ fontWeight:"900", margin: "1rem 0", color: "white", display: 'block', textAlign: 'center' }}>그래프는 최대값을 기준으로 비율이 정해집니다.</label>
            </div>
            {/* 지출 내역 리스트 컴포넌트 */}
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
