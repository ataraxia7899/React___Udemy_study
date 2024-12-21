import React from 'react';
import logo from '../assets/investment-calculator-logo.png';
import classes from './Header.css';

// 로고 이미지와 제목을 포함한 헤더
function Header() {
    return (
        <header className={classes.Header}>
            <img src={logo} alt="logo" />
            <h1>투자 계산기</h1>
        </header>
    );
}

export default Header;
