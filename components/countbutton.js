import * as React from 'react';
import styled from 'styled-components';

const Index = (props) => {
    function filterNumber(e) {
        var code = e.keyCode;
        if (code > 47 && code < 58) {
            return;
        }
        if (code === 110 || code === 190) {
            return;
        }
        if (e.ctrlKey || e.altKey) {
            return;
        }
        if (code === 36 || code === 35 || code === 37 ||
            code === 39 || code === 8 || code === 46 || code === 13) {
            return;
        }
        e.preventDefault();
    }
    return (
        <ButtonContainer>
            <div className="plusButton" onClick={props.plusOnClick}><div className="text">+</div></div>
            <input onKeyDown={(e) => filterNumber(e)} value={props.value} onChange={props.onChange}></input>
            <div className="minusButton" onClick={props.minusOnClick}><div className="text">-</div></div>
            <div className="title">{props.title}</div>
        </ButtonContainer>
    )
}
export default Index

const ButtonContainer = styled.div`
    position: relative;
    width: 100px;
    margin: 20px calc(25% - 50px);
    height: 100%;
    border-radius: 20px;
    border:  1px solid black;
    cursor: pointer;
    .title {
        position: relative;
        top: 103%;
        width: 100%;
        text-align: center;
        letter-spacing: 5px;
        text-indent: 2.5px;
    }
    .plusButton {
        position: absolute;
        top: 0px;
        width: 100%;
        height: 35%;
        border: 0px;
        .text {
            width: 100%;
            position: absolute;
            top: 50%;
            transform: translate(0%, -50%);
            text-align: center;
            font-size: 30px;
        }
    }
    input {
        position: absolute;
        top: 35%;
        width: 100%;
        height: 30%;
        border: 0px;
        text-align: center;
        font-size: 30px;
        outline: none;
        cursor: text;
    }
    .minusButton {
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 35%;
        .text {
            position:absolute;
            width: 100%;
            top: 50%;
            transform: translate(0%, -50%);
            text-align: center;
            font-size: 30px;
        }
    }
`
