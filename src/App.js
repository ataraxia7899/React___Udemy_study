import React, { useState } from "react";
import Header from "./components/Header.js";
import InvestmentForm from './components/InvestmentForm.js';
import ResultsTable from "./components/ResultsTable.js";

function App() {
  const [userInput, setUserInput] = useState(null);

  const CalculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  // 연간 결과
  const yearlyData = [];

  // userInput에 값이 없으면 오류가 발생되기 때문에
  // userInput이 null이 아닐때만 이 프로퍼티에 접근을 시도합니다.
  if (userInput) {
    let currentSavings = userInput['current-savings'];
    const yearlyContribution = userInput['yearly-contribution'];
    const expectedReturn = userInput['expected-return'] / 100;
    const duration = userInput['duration'];

    // 아래 코드는 연간 결과(총 저축액, 이자 등)를 계산합니다
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      {/* 로고 이미지와 제목을 포함한 헤더 */}
      <Header />

      {/* 투자 계산을 위한 input값 입력 폼 생성 컴포넌트 */}
      <InvestmentForm onCalculate={CalculateHandler} />

      {/* 결과 데이터가 있을 때만 아래 테이블을 조건부로 보여주세요 */}
      {/* 데이터가 없을 경우 대체 텍스트를 보여주세요 */}
      {!userInput && <p style={{textAlign: "center"}}>아직 계산된 투자액 없음</p>}
      {userInput && <ResultsTable data={yearlyData} initialInvestment={userInput["current-savings"]} />}
    </div>
  );
}

export default App;