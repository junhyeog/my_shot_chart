import * as React from 'react';
import styled from 'styled-components';

const Index = (props) => {
    return (
        <PieChart barColor={props.barColor} ratio={props.ratio}>
            <div className="pie">
                <div className="center" />
                <div className="text">{props.ratio}</div>
            </div>
        </PieChart>
    )
}
export default Index;

const PieChart = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0% calc(25% - 50px);
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
        }
    }
`