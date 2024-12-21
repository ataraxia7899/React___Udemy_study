import React, { useState } from "react";
import "./InvestmentForm.css";

// 투자 계산을 위한 input값 입력 폼 생성 컴포넌트
function InvestmentForm() {
    const [userInput1, SetUserInput1] = useState({"current-savings": 10000});
    const [userInput2, SetUserInput2] = useState({"yearly-contribution": 1200});
    const [userInput3, SetUserInput3] = useState({"expected-return": 7});
    const [userInput4, SetUserInput4] = useState({"duration": 10});

    // const CalculateHandler = (userInput) => {
    //     // 폼이 제출될 때 실행되어야 함
    //     // 하지만 폼의 submit 이벤트에 직접 바인딩하지 않는 것이 좋을 수 있음...
    
    //     // 연간 결과
    //     const yearlyData = []; 
    
    //     let currentSavings = +userInput['current-savings']; // 이 입력 객체의 형태는 자유롭게 변경 가능합니다!
    //     const yearlyContribution = +userInput['yearly-contribution']; // 앞서 언급했듯이 형태는 자유롭게 변경 가능...
    //     const expectedReturn = +userInput['expected-return'] / 100;
    //     const duration = +userInput['duration'];
    
    //     // 아래 코드는 연간 결과(총 저축액, 이자 등)를 계산합니다
    //     for (let i = 0; i < duration; i++) {
    //       const yearlyInterest = currentSavings * expectedReturn;
    //     currentSavings += yearlyInterest + yearlyContribution;
    //     yearlyData.push({
    //         // 배열에 추가되는 데이터의 형태는 자유롭게 변경 가능합니다!
    //         year: i + 1,
    //         yearlyInterest: yearlyInterest,
    //         savingsEndOfYear: currentSavings,
    //         yearlyContribution: yearlyContribution,
    // });
    //     }
    //     // yearlyData로 무언가를 수행...
    // };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(userInput1, userInput2, userInput3, userInput4);
    }

    const resetHandler = (event) => {
    SetUserInput1((prevInput) => {return {"current-savings": 10000}});
    SetUserInput2((prevInput) => {return {"yearly-contribution": 1200}});
    SetUserInput3((prevInput) => {return {"expected-return": 7}});
    SetUserInput4((prevInput) => {return {"duration": 10}});
    }

    const inputChangeHandler1 = (input, value) => {
        SetUserInput1((prevInput) => {return {...prevInput, [input]: value};});
    };

    const inputChangeHandler2 = (input, value) => {
        SetUserInput2((prevInput) => {return {...prevInput, [input]: value};});
    };

    const inputChangeHandler3 = (input, value) => {
        SetUserInput3((prevInput) => {return {...prevInput, [input]: value};});
    };

    const inputChangeHandler4 = (input, value) => {
        SetUserInput4((prevInput) => {return {...prevInput, [input]: value};});
    };

    return (
        <form onSubmit={submitHandler} className="form">
            <div className="input-group">
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
            <div className="input-group">
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
                            inputChangeHandler4('duration', event.target.value)
                        }
                        value={userInput4["duration"]}
                        type="number"
                        id="duration"
                    />
                </p>
            </div>
            <p className="actions">
                <button
                    onClick={resetHandler}
                    type="reset"
                    className="buttonAlt"
                >
                    초기화
                </button>
                <button type="submit" className="button">
                    계산
                </button>
            </p>
        </form>
    );
}

export default InvestmentForm;