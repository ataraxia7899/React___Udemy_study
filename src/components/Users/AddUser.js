import React, { useState } from "react";
import Card from "../UI/Card.js";
import classes from "./AddUser.module.css";
import Button from "../UI/Button.js";
import ErrorModal from "../UI/ErrorModal.js";

// 사용자 목록과 같은 상태 관리 필요하고
// 사용자 목록을 출력되어야 함
// 유효하지 않은 데이터가 입력되었을 경우 오류 메세지 출력
function AddUser(props) {
    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredUserAge, setEnteredUserAge] = useState("");
    const [error, setError] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: "잘못된 입력",
                message: "이름과 나이 모두 입력해주세요."
            })
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: "잘못된 입력",
                message: "나이는 한살 이상이여야 합니다."
            })
            return;
        }
        props.onAddUser(enteredUserName, enteredUserAge);
        setEnteredUserName("");
        setEnteredUserAge("");
    }
    
    const changeusernameHandler = (event) => {
        setEnteredUserName(event.target.value);
    }
    
    const changeuserageHandler = (event) => {
        setEnteredUserAge(event.target.value);
    }

    const ErrorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onErrorZero={ErrorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">이름</label>
                    <input id="username" type="text" value={enteredUserName} onChange={changeusernameHandler} />
                    <label htmlFor="age">나이</label>
                    <input id="age" type="number" value={enteredUserAge} onChange={changeuserageHandler} />
                    <Button type="submit">사용자 추가</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;