import * as React from 'react';
import styled from 'styled-components';

const Index = (props) => {
    return (
        <PieChart barColor={props.barColor} ratio={props.ratio} display={props.display} title={props.title}>
            <div className="pie">
                <div className="center" />
                <div className="text">{props.ratio}</div>
            </div>
            <div className="title">{props.title}</div>
        </PieChart>
    )
}
export default Index;

const PieChart = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0% calc(16.67% - 50px);
    display: ${props => props.display};
    .title {
        position: relative;
        text-align: center;
        margin: 10px;
        width: 120%;
        right: 20%;
        font-size: 15px;
        font-weight: 100;
    }
    .pie {
        position: relative;
        display:inline-block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transition: 0.3s;
        background:conic-gradient(${props => props.barColor} ${props => props.ratio * 100}%, #fff ${props => props.ratio * 100 + 2}% 100%);
        .center {
            background: #fff;
            position: absolute;
            top:50%; left:50%;
            width:80%;
            height:80%;
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }
        .text {
            position: absolute;
            top:50%; left:50%;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            font-size: 20px;
            font-weight: 100;
            font-stretch: normal;
            font-style: oblique;
            line-height: 1.17;
            letter-spacing: normal;
        }
    }
`