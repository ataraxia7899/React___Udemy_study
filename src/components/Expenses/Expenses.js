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
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
