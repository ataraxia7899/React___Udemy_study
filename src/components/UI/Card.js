import React from "react";
import "./Card.css"

// 모든 컴포넌트를 감싸는 껍질형태의 컴포넌트
function Card(props) {
    const classes = "card " + props.className;

    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;