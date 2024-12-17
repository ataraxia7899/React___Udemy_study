import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    
    let filterInfoText = "2019, 2019 & 2022";

    if (filteredYear === "2019") {
        filterInfoText = "2020, 2021 & 2022";
    } else if (filteredYear === "2021") {
        filterInfoText = "2019, 2020 & 2022";
    } else {
        filterInfoText = "2019, 2020 & 2021";
    };

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

            {/* title값과 amount값같은 값들을 동적으로 자동 배정해줌 */}
            {/* filteredExpenses를 통해 년도값이 같은 소비목록만 조회됨 */}
            {/* 조건 검색이 안되면 if값의 <p>태그 출력 */}
            {filteredExpenses.length === 0 ? (
                <p> 조건에 맞는 값이 조회되지 않습니다. </p>
            ) : (
                filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            )}
        </Card>
    );
};

export default Expenses;
