import React, { useState } from "react";
import classes from "./InvestmentForm.module.css";

// 투자 계산을 위한 input값 입력 폼 생성 컴포넌트
function InvestmentForm(props) {
    const [userInput1, SetUserInput1] = useState({"current-savings": 10000});
    const [userInput2, SetUserInput2] = useState({"yearly-contribution": 1200});
    const [userInput3, SetUserInput3] = useState({"expected-return": 7});
    const [userInput4, SetUserInput4] = useState({"duration": 10});

    const submitHandler = (event) => {
        event.preventDefault();
        // userInput은 4개의 객체를 합친 객체
        const userInput = {
            ...userInput1,
            ...userInput2,
            ...userInput3,
            ...userInput4
        }
        props.onCalculate(userInput);
    };

    const resetHandler = (event) => {
    SetUserInput1(() => {return {"current-savings": 10000}});
    SetUserInput2(() => {return {"yearly-contribution": 1200}});
    SetUserInput3(() => {return {"expected-return": 7}});
    SetUserInput4(() => {return {"duration": 10}});
    }

    const inputChangeHandler1 = (input, value) => {
        SetUserInput1(() => {return {[input]: value}});
    };

    const inputChangeHandler2 = (input, value) => {
        SetUserInput2(() => {return {[input]: value}});
    };

    const inputChangeHandler3 = (input, value) => {
        SetUserInput3(() => {return {[input]: value}});
    };

    const inputChangeHandler4 = (input, value) => {
        SetUserInput4(() => {return {[input]: value}});
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes['input-group']}>
                <p>
                    <label htmlFor="current-savings">현재 저축액 (원)</label>
                    <input
                        onChange={(event) =>
                            inputChangeHandler1(
                                'current-savings',
                                event.target.value
                            )
                        }
                        value={userInput1["current-savings"]}
                        type="number"
                        id="current-savings"
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">
                        {' '}
                        연간 저축액 (원)
                    </label>
                    <input
                        onChange={(event) =>
                            inputChangeHandler2(
                                'yearly-contribution',
                                event.target.value
                            )
                        }
                        value={userInput2["yearly-contribution"]}
                        type="number"
                        id="yearly-contribution"
                    />
                </p>
            </div>
            <div className={classes['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                        예상 이자율 (연 %, 연간)
                    </label>
                    <input
                        onChange={(event) =>
                            inputChangeHandler3(
                                'expected-return',
                                event.target.value
                            )
                        }
                        value={userInput3["expected-return"]}
                        type="number"
                        id="expected-return"
                    />
                </p>
                <p>
                    <label htmlFor="duration">투자 기간 (년)</label>
                    <input
                        onChange={(event) =>
                            inputChangeHandler4(
                                'duration', 
                                event.target.value
                            )
                        }
                        value={userInput4["duration"]}
                        type="number"
                        id="duration"
                    />
                </p>
            </div>
            <p className={classes.actions}>
                <button
                    onClick={resetHandler}
                    type="reset"
                    className={classes.buttonAlt}
                >
                    초기화
                </button>
                <button type="submit" className={classes.button}>
                    계산
                </button>
            </p>
        </form>
    );
}

export default InvestmentForm;