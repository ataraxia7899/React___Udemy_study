import React from "react";
import classes from "./ResultsTable.module.css";

// 한국 통화 형식으로 숫자를 표시하기 위한 객체 생성
const formatter = new Intl.NumberFormat("ko-Kr",{
    style: "currency",
    currency: "KRW",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})

// 투자 계산 결과를 표로 보여주는 컴포넌트
function InvestmentTable(props) {
return(
    <table className={classes.result}>
        <thead>
            <tr>
                <th>연도</th>
                <th>총 저축액</th>
                <th>연간 이자</th>
                <th> 누적 이자</th>
                <th>투자 원금</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map(yearData => (
                <tr key={yearData.year}>
                {/* 년도 */}
                <td>{yearData.year}</td>
                {/* 연말 총 저축액 */}
                <td>{formatter.format(yearData.savingsEndOfYear)}</td>
                {/* 해당 연도에 발생한 이자 */}
                <td>{formatter.format(yearData.yearInterest)}</td>
                {/* 누적된 총 이자 = (기여한 기간 * 총 이자) - 연간 기여금 */}
                <td>{formatter.format(yearData.savingsEndOfYear - props.initialInvestment - yearData.yearlyContribution * yearData.year)}</td>
                {/* 총 투자 연금금 = 초기 투자금에서 모든 기여액을 더한 금액*/}
                <td>{formatter.format(props.initialInvestment + yearData.yearlyContribution * yearData.year)}</td>
            </tr>
            ))}
        </tbody>
    </table>
);}

export default InvestmentTable;