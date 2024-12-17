import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
    let barFillHeight = "0%";

    barFillHeight = (props.maxValue > 0 && Math.round((props.value / props.maxValue) * 100) + "%");

    /* 윗줄과 같은 기능을 구사하지만 다른 유형으로 적을 수 있는 코드 
    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }*/
    
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div
                    className="chart-bar__fill"
                    style={{ height: barFillHeight, backgroundColor: 'orange' }}
                ></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
}

export default ChartBar;