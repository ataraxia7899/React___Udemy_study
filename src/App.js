import logo from './assets/investment-calculator-logo.png';

function App() {
  const calculateHandler = (userInput) => {
    // 폼이 제출될 때 실행되어야 함
    // 하지만 폼의 submit 이벤트에 직접 바인딩하지 않는 것이 좋을 수 있음...

    const yearlyData = []; // 연간 결과

    let currentSavings = +userInput['current-savings']; // 이 입력 객체의 형태는 자유롭게 변경 가능합니다!
    const yearlyContribution = +userInput['yearly-contribution']; // 앞서 언급했듯이 형태는 자유롭게 변경 가능...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // 아래 코드는 연간 결과(총 저축액, 이자 등)를 계산합니다
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // 배열에 추가되는 데이터의 형태는 자유롭게 변경 가능합니다!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // yearlyData로 무언가를 수행...
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>

      {/* 결과 데이터가 있을 때만 아래 테이블을 조건부로 보여주세요 */}
      {/* 데이터가 없을 경우 대체 텍스트를 보여주세요 */}

      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>YEAR NUMBER</td>
            <td>TOTAL SAVINGS END OF YEAR</td>
            <td>INTEREST GAINED IN YEAR</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
