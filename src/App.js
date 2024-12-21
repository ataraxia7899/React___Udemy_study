import React from "react";
import Header from "./components/Header.js";
import InvestmentForm from './components/InvestmentForm.js';
import ResultsTable from "./components/ResultsTable.js";

function App() {
  return (
    <div>
      {/* 로고 이미지와 제목을 포함한 헤더 */}
      <Header />

      {/* 투자 계산을 위한 input값 입력 폼 생성 컴포넌트 */}
      <InvestmentForm />

      {/* 결과 데이터가 있을 때만 아래 테이블을 조건부로 보여주세요 */}
      {/* 데이터가 없을 경우 대체 텍스트를 보여주세요 */}
      <ResultsTable />
    </div>
  );
}

export default App;