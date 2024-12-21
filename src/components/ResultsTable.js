import React from "react";

// 
function InvestmentTable() {
return(
    <table className="result">
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
            <tr>
                <td>연도 번호</td>
                <td>연말 총 저축액</td>
                <td>해당 연도에 발생한 이자</td>
                <td>누적된 총 이자</td>
                <td>총 투자 원금</td>
            </tr>
        </tbody>
    </table>
);}

export default InvestmentTable;