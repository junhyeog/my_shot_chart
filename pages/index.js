import * as React from 'react';
import styled from 'styled-components';
import { CountButton, Piechart } from '../components'


const Index = () => {

    const [counts, setCounts] = React.useState([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
    //local storage에 남아있는 데이터 확인
    const [spot, setSpot] = React.useState(0);

    React.useEffect(() => {
        if (JSON.parse(localStorage.getItem('counts')))
            setCounts(JSON.parse(localStorage.getItem('counts')));
        console.log("pre-counts:", counts)
        if (JSON.parse(localStorage.getItem('spot')))
            setSpot(JSON.parse(localStorage.getItem('spot')));
        console.log("pre-spot:", spot)
    }, [])
    //local storage에 남아있는 데이터 확인하기

    React.useEffect(() => {
        console.log(counts)
    }, [counts])
    React.useEffect(() => {
        console.log("spot:", spot)
    }, [spot])
    React.useEffect(() => {
        localStorage.setItem('counts', JSON.stringify(counts))
        localStorage.setItem('spot', JSON.stringify(spot))
    })
    const setCount = (spot, made, step) => {
        var tempArr = counts.slice()
        if (tempArr[spot][made] === 0 && step === -1) {
            console.log("0 미만으로 입력하실 수 없습니다.")
            return
        }
        tempArr[spot][made] += step
        setCounts(tempArr)
    }
    const calcSpotRatio = (spot) => {
        if (counts[spot][0] + counts[spot][1] === 0) return 0
        else return (counts[spot][1] / (counts[spot][0] + counts[spot][1])).toFixed(2)
    }
    const calcAllRatio = () => {
        var shootNum = 0
        var madeNum = 0
        counts.map((count) => { shootNum += (count[0] + count[1]); madeNum += count[1] })
        if (shootNum === 0) return 0
        else return (madeNum / shootNum).toFixed(2)
    }
    return (
        <Background>
            <svg height={1000} width={1000}>
                <line x1="0" x2="50" y1="306" y2="306" stroke="#000000" style={{ strokeDasharray: "6, 6", strokeWidth: "1", opacity: "0.1", shapeRendering: "crispedges" }}></line>
                <line x1="846" x2="896" y1="306" y2="306" stroke="#000000" style={{ strokeDasharray: "6, 6", strokeWidth: "1", opacity: "0.1", shapeRendering: "crispedges" }}></line>
                <line x1="50" x2="306" y1="306" y2="306" stroke="#000000" style={{ strokeDasharray: "6, 6", strokeWidth: "1", opacity: "0.1", shapeRendering: "crispedges" }}></line>
                <line x1="594" x2="846" y1="306" y2="306" stroke="#000000" style={{ strokeDasharray: "6, 6", strokeWidth: "1", opacity: "0.1", shapeRendering: "crispedges" }}></line>
                <line x1="306" x2="306" y1="392" y2="545" stroke="#000000" style={{ strokeDasharray: "6, 6", strokeWidth: "1", opacity: "0.1", shapeRendering: "crispedges" }}></line>
                <line x1="594" x2="594" y1="392" y2="545" stroke="#000000" style={{ strokeDasharray: "6, 6", strokeWidth: "1", opacity: "0.1", shapeRendering: "crispedges" }}></line>
                <line x1="654" x2="714" y1="522" y2="664" stroke="#000000" style={{ strokeDasharray: "6, 6", strokeWidth: "1", opacity: "0.1", shapeRendering: "crispedges" }}></line>
                <line x1="246" x2="186" y1="522" y2="664" stroke="#000000" style={{ strokeDasharray: "6, 6", strokeWidth: "1", opacity: "0.1", shapeRendering: "crispedges" }}></line>
                
                <g stroke="#000000" fill="none" style={{strokeWidth : "1", zIndex: "-1"}}>
                <line x1="306" x2="306" y1="50" y2="392" style={{shapeRendering: "crispedges"}}></line>
                <line x1="594" x2="594" y1="50" y2="392" style={{shapeRendering: "crispedges"}}></line>
                <line x1="306" x2="594" y1="392" y2="392" style={{shapeRendering: "crispedges"}}></line>
                <line x1="396" x2="504" y1="120.2" y2="120.2" style={{shapeRendering: "crispedges"}}></line>
                <line x1="378" x2="378" y1="125.6" y2="148.1" style={{shapeRendering: "crispedges"}}></line>
                <line x1="522" x2="522" y1="125.6" y2="148.1" style={{shapeRendering: "crispedges"}}></line>
                <line x1="54" x2="54" y1="50" y2="306" style={{shapeRendering: "crispedges"}}></line>
                <line x1="846" x2="846" y1="50" y2="306" style={{shapeRendering: "crispedges"}}></line>
                <path d="M54,305A427.5,427.5 1 0,0 846,305"></path>
                <path d="M342,392A108,108 1 0,1 558,392" style={{strokeDasharray: "22.5, 22.5"}}></path>
                <path d="M342,392A108,108 1 0,0 558,392"></path>
                <circle cx="450" cy="134.6" r="13.5"></circle>
                <path d="M378,148.1A72,72 1 0,0 522,148.1"></path>
                <line x1="0" x2="900" y1="50" y2="50" style={{shapeRendering: "crispedges", strokeWidth: "2"}}></line>
                </g>
                {/*클릭할 영역*/}
                <path d="M0,50L0,306L54,306L54,50L0,50" fill="red" id="zone" key={0} onClick={() => setSpot(0)} style={{pointerEvents:"visible", opacity:"0.2"}}></path>
                <path d="M846,50L846,306L900,306L900,50L846,50" fill="none" id="zone" key={1} onClick={() => setSpot(1)} style={{pointerEvents:"visible"}}></path>
                <path d="M54,50L54,306L306,306L306,50L54,50" fill="none" id="zone" key={2} onClick={() => setSpot(2)} style={{pointerEvents:"visible"}}></path>
                <path d="M594,50L594,306L846,306L846,50L594,50" fill="none" id="zone" key={3} onClick={() => setSpot(3)} style={{pointerEvents:"visible"}}></path>
                <path d="M306,50L306,392L594,392L594,50L306,50" fill="none" id="zone" key={4} onClick={() => setSpot(4)} style={{pointerEvents:"visible"}}></path>
                <path d="M594,545L594,392L306,392L306,545A427.5,427.5 1 0,0 594,545" fill="none" id="zone" key={5} onClick={() => setSpot(5)} style={{pointerEvents:"visible"}}></path>
                <path d="M306,545L306,306L54,306A427.5,427.5 1 0,0 306,545" fill="none" id="zone" key={6} onClick={() => setSpot(6)} style={{pointerEvents:"visible"}}></path>
                <path d="M594,545L594,306L846,306A427.5,427.5 0 0,1 594,545" fill="none" id="zone" key={7} onClick={() => setSpot(7)} style={{pointerEvents:"visible"}}></path>
                <path d="M246,521L186,664L0,664L0,306L54,306A427.5,427.5 0 0,0 246,521" fill="none" id="zone" key={8} onClick={() => setSpot(8)} style={{pointerEvents:"visible"}}></path>
                <path d="M654,521L714,664L900,664L900,306L846,306A427.5,427.5 0 0,1 654,521" fill="green" id="zone" key={9} onClick={() => setSpot(9)} style={{pointerEvents:"visible", opacity:"0.2"}}></path>
                <path d="M246,521L186,664L714,664L654,521A427.5,427.5 0 0,1 246,521" fill="none" id="zone" key={10} onClick={() => setSpot(10)} style={{pointerEvents:"visible"}}></path>
            </svg>
            <CountButton plusOnClick={() => setCount(spot, 1, 1)} minusOnClick={() => setCount(spot, 1, -1)} value={counts[spot]?counts[spot][1]:0} onChange={(e) => {
                var tempArr = counts.slice()
                tempArr[spot][1] = Number(e.target.value)
                setCounts(tempArr)
            }} />
            <CountButton plusOnClick={() => setCount(spot, 0, 1)} minusOnClick={() => setCount(spot, 0, -1)} value={counts[spot]?counts[spot][0]:0} onChange={(e) => {
                var tempArr = counts.slice()
                tempArr[spot][0] = Number(e.target.value)
                setCounts(tempArr)
            }} />
            {/* 각 spot에서의 성공률 */}
            <Piechart ratio={calcSpotRatio(spot)} />
            {/* 총 성공률 */}
            <Piechart ratio={calcAllRatio()} />
        </Background>
    )
}
export default Index



const Background = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    path{
        z-index:1;
    }
`

