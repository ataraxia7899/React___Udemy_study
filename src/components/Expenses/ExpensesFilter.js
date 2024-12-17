import React from 'react';

import './ExpensesFilter.css';

// 필터 선택했을때 선택된 년도를 부모 컴포넌트로 값을 보내주는 컴포넌트
const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    // 글자 색 빨간색으로 변경
    const txtStyle = {
        color : "#99011e"
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>년도별 필터</label>
                <label style={txtStyle}>2019년도부터 2022년까지만 기록됩니다.</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
