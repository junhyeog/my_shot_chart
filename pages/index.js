import * as React from 'react';
import styled from 'styled-components';
import { CountButton, Piechart } from '../components'


const Index = () => {

    const [counts, setCounts] = React.useState([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
    //local storage에 남아있는 데이터 확인
    const [spot, setSpot] = React.useState(0);
    const spotName = ["왼쪽 코너", "오른쪽 코너", "왼쪽 쇼트 코너", "오른쪽 쇼트 코너", "페인트존", "키", "왼쪽 엘보", "오른쪽 엘보", "왼쪽 윙", "오른쪽 윙", "탑"];
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
        console.log(" made:", counts[spot][1], "\n", "fail:", counts[spot][0])
    }, [counts])
    React.useEffect(() => {
        console.log("spot:", spotName[spot], spot)
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
    const calc2Ratio = () => {
        var shootNum = 0
        var madeNum = 0
        counts.map((count, idx) => {
            if (2 <= idx && idx <= 7) {
                shootNum += (count[0] + count[1]);
                madeNum += count[1]
            }
        })
        if (shootNum === 0) return 0
        else return (madeNum / shootNum).toFixed(2)
    }
    const calc3Ratio = () => {
        var shootNum = 0
        var madeNum = 0
        counts.map((count, idx) => {
            if (2 > idx || idx > 7) {
                shootNum += (count[0] + count[1]);
                madeNum += count[1]
            }
        })
        if (shootNum === 0) return 0
        else return (madeNum / shootNum).toFixed(2)
    }
    const perc2color = (perc) => {
        var r, g, b = 0;
        if (perc < 50) {
            r = 255;
            g = Math.round(5.1 * perc);
        }
        else {
            g = 255;
            r = Math.round(510 - 5.10 * perc);
        }
        var h = r * 0x10000 + g * 0x100 + b * 0x1;
        return '#' + ('000000' + h.toString(16)).slice(-6);
    }
    const Path = styled.path`
        z-index: 1;
        pointer-events: visible;
        opacity: 0.5;
        fill: ${props => perc2color(Number(calcSpotRatio(props.keys)) * 100)};
    `
    const Pathbasket = styled.path`
        z-index: 1;
        pointer-events: visible;
        fill: ${props => props.keys !== spot && "none"};
    `
    return (
        <Background>
            <HeaderStyle>
                <div className="text">My Shot Chart</div>
            </HeaderStyle>
            <svg viewBox="-20 17 940 667" style={{ top: "10px" }}>
                <line x1="0" x2="50" y1="306" y2="306" stroke="#000000" style={{ strokeDasharray: "6, 6", strokeWidth: "2", opacity: "0.5", shapeRendering: "crispedges" }}></line>
                <line x1="846" x2="896" y1="306" y2="306" stroke="#000000" style={{ strokeDasharray: "6, 6", strokeWidth: "2", opacity: "0.5", shapeRendering: "crispedges" }}></line>
                <line x1="50" x2="306" y1="306" y2="306" stroke="#000000" style={{ strokeDasharray: "6, 6", strokeWidth: "2", opacity: "0.5", shapeRendering: "crispedges" }}></line>
                <line x1="594" x2="846" y1="306" y2="306" stroke="#000000" style={{ strokeDasharray: "6, 6", strokeWidth: "2", opacity: "0.5", shapeRendering: "crispedges" }}></line>
                <line x1="306" x2="306" y1="392" y2="545" stroke="#000000" style={{ strokeDasharray: "6, 6", strokeWidth: "2", opacity: "0.5", shapeRendering: "crispedges" }}></line>
                <line x1="594" x2="594" y1="392" y2="545" stroke="#000000" style={{ strokeDasharray: "6, 6", strokeWidth: "2", opacity: "0.5", shapeRendering: "crispedges" }}></line>
                <line x1="654" x2="714" y1="522" y2="664" stroke="#000000" style={{ strokeDasharray: "6, 6", strokeWidth: "2", opacity: "0.5", shapeRendering: "crispedges" }}></line>
                <line x1="246" x2="186" y1="522" y2="664" stroke="#000000" style={{ strokeDasharray: "6, 6", strokeWidth: "2", opacity: "0.5", shapeRendering: "crispedges" }}></line>

                <g stroke="#000000" fill="none" style={{ strokeWidth: "2", zIndex: "-1" }}>
                    <line x1="306" x2="306" y1="50" y2="392" style={{ shapeRendering: "crispedges" }}></line>
                    <line x1="594" x2="594" y1="50" y2="392" style={{ shapeRendering: "crispedges" }}></line>
                    <line x1="306" x2="594" y1="392" y2="392" style={{ shapeRendering: "crispedges" }}></line>
                    <line x1="396" x2="504" y1="120.2" y2="120.2" style={{ shapeRendering: "crispedges" }}></line>
                    <line x1="378" x2="378" y1="125.6" y2="148.1" style={{ shapeRendering: "crispedges" }}></line>
                    <line x1="522" x2="522" y1="125.6" y2="148.1" style={{ shapeRendering: "crispedges" }}></line>
                    <line x1="54" x2="54" y1="50" y2="306" style={{ shapeRendering: "crispedges" }}></line>
                    <line x1="846" x2="846" y1="50" y2="306" style={{ shapeRendering: "crispedges" }}></line>
                    <path d="M54,305A427.5,427.5 1 0,0 846,305"></path>
                    <path d="M342,392A108,108 1 0,1 558,392" style={{ strokeDasharray: "22.5, 22.5" }}></path>
                    <path d="M342,392A108,108 1 0,0 558,392"></path>
                    <circle cx="450" cy="134.6" r="13.5"></circle>
                    <path d="M378,148.1A72,72 1 0,0 522,148.1"></path>
                    <line x1="0" x2="900" y1="50" y2="50" style={{ shapeRendering: "crispedges", strokeWidth: "2" }}></line>
                </g>
                {/*클릭할 영역*/}
                <Path d="M0,50L0,306L54,306L54,50L0,50" id="zone" keys={0} onClick={() => setSpot(0)} />
                <Path d="M846,50L846,306L900,306L900,50L846,50" id="zone" keys={1} onClick={() => setSpot(1)} />
                <Path d="M54,50L54,306L306,306L306,50L54,50" id="zone" keys={2} onClick={() => setSpot(2)} />
                <Path d="M594,50L594,306L846,306L846,50L594,50" id="zone" keys={3} onClick={() => setSpot(3)} />
                <Path d="M306,50L306,392L594,392L594,50L306,50" id="zone" keys={4} onClick={() => setSpot(4)} />
                <Path d="M594,545L594,392L306,392L306,545A427.5,427.5 1 0,0 594,545" id="zone" keys={5} onClick={() => setSpot(5)} />
                <Path d="M306,545L306,306L54,306A427.5,427.5 1 0,0 306,545" id="zone" keys={6} onClick={() => setSpot(6)} />
                <Path d="M594,545L594,306L846,306A427.5,427.5 0 0,1 594,545" id="zone" keys={7} onClick={() => setSpot(7)} />
                <Path d="M246,521L186,664L0,664L0,306L54,306A427.5,427.5 0 0,0 246,521" id="zone" keys={8} onClick={() => setSpot(8)} />
                <Path d="M654,521L714,664L900,664L900,306L846,306A427.5,427.5 0 0,1 654,521" id="zone" keys={9} onClick={() => setSpot(9)} />
                <Path d="M246,521L186,664L714,664L654,521A427.5,427.5 0 0,1 246,521" id="zone" keys={10} onClick={() => setSpot(10)} />

                <Pathbasket d="M0,50L0,306L54,306L54,50L0,50" fill="url(#img1)" id="zone" keys={0} onClick={() => setSpot(0)} />
                <Pathbasket d="M846,50L846,306L900,306L900,50L846,50" fill="url(#img1)" id="zone" keys={1} onClick={() => setSpot(1)} />
                <Pathbasket d="M54,50L54,306L306,306L306,50L54,50" fill="url(#img2)" id="zone" keys={2} onClick={() => setSpot(2)} />
                <Pathbasket d="M594,50L594,306L846,306L846,50L594,50" fill="url(#img2)" id="zone" keys={3} onClick={() => setSpot(3)} />
                <Pathbasket d="M306,50L306,392L594,392L594,50L306,50" fill="url(#img3)" id="zone" keys={4} onClick={() => setSpot(4)} />
                <Pathbasket d="M594,545L594,392L306,392L306,545A427.5,427.5 1 0,0 594,545" fill="url(#img4)" id="zone" keys={5} onClick={() => setSpot(5)} />
                <Pathbasket d="M306,545L306,306L54,306A427.5,427.5 1 0,0 306,545" fill="url(#img5)" id="zone" keys={6} onClick={() => setSpot(6)} />
                <Pathbasket d="M594,545L594,306L846,306A427.5,427.5 0 0,1 594,545" fill="url(#img6)" id="zone" keys={7} onClick={() => setSpot(7)} />
                <Pathbasket d="M246,521L186,664L0,664L0,306L54,306A427.5,427.5 0 0,0 246,521" fill="url(#img7)" id="zone" keys={8} onClick={() => setSpot(8)} />
                <Pathbasket d="M654,521L714,664L900,664L900,306L846,306A427.5,427.5 0 0,1 654,521" fill="url(#img8)" id="zone" keys={9} onClick={() => setSpot(9)} />
                <Pathbasket d="M246,521L186,664L714,664L654,521A427.5,427.5 0 0,1 246,521" fill="url(#img9)" id="zone" keys={10} onClick={() => setSpot(10)} />

                <defs>
                    {/* 코너 */}
                    <pattern id="img1" patternUnits="objectBoundingBox" width="100%" height="100%">
                        <image href="/static/titleIcon.svg" x="2" y="100" width="50" height="50" />
                    </pattern>
                    {/* 쇼트 코너 */}
                    <pattern id="img2" patternUnits="objectBoundingBox" width="100%" height="100%">
                        <image href="/static/titleIcon.svg" x="100" y="100" width="50" height="50" />
                    </pattern>
                    {/* 페인트존 */}
                    <pattern id="img3" patternUnits="objectBoundingBox" width="100%" height="100%">
                        <image href="/static/titleIcon.svg" x="118" y="180" width="50" height="50" />
                    </pattern>
                    {/* 키 */}
                    <pattern id="img4" patternUnits="objectBoundingBox" width="100%" height="100%">
                        <image href="/static/titleIcon.svg" x="118" y="40" width="50" height="50" />
                    </pattern>
                    {/* 왼쪽 엘보 */}
                    <pattern id="img5" patternUnits="objectBoundingBox" width="100%" height="100%">
                        <image href="/static/titleIcon.svg" x="130" y="70" width="50" height="50" />
                    </pattern>
                    {/* 오른쪽 엘보 */}
                    <pattern id="img6" patternUnits="objectBoundingBox" width="100%" height="100%">
                        <image href="/static/titleIcon.svg" x="70" y="70" width="50" height="50" />
                    </pattern>
                    {/* 왼쪽 윙 */}
                    <pattern id="img7" patternUnits="objectBoundingBox" width="100%" height="100%">
                        <image href="/static/titleIcon.svg" x="80" y="140" width="50" height="50" />
                    </pattern>
                    {/* 오른쪽 윙 */}
                    <pattern id="img8" patternUnits="objectBoundingBox" width="100%" height="100%">
                        <image href="/static/titleIcon.svg" x="110" y="140" width="50" height="50" />
                    </pattern>
                    {/* 탑 */}
                    <pattern id="img9" patternUnits="objectBoundingBox" width="100%" height="100%">
                        <image href="/static/titleIcon.svg" x="235" y="60" width="50" height="50" />
                    </pattern>
                </defs>
            </svg>
            <div className="spotname">{spotName[spot]}</div>
            <div className="chartsContainer">
                {/* 해당 spot의 종류에 따른 성공률 */}
                <Piechart title="2점 성공률" ratio={calc2Ratio()} display={(2 > spot || spot > 7) ? "none" : "block"} barColor={perc2color(Number(calc2Ratio()) * 100)} />
                <Piechart title="3점 성공률" ratio={calc3Ratio()} display={(2 <= spot && spot <= 7) ? "none" : "block"} barColor={perc2color(Number(calc3Ratio()) * 100)} />
                {/* 각 spot에서의 성공률 */}
                <Piechart title="Spot 성공률" ratio={calcSpotRatio(spot)} barColor={perc2color(Number(calcSpotRatio(spot)) * 100)} />
                {/* 총 성공률 */}
                <Piechart title="총 성공률" ratio={calcAllRatio()} barColor={perc2color(Number(calcAllRatio()) * 100)} />
            </div>
            <div className="countButtonsContainer">
                <CountButton title="MADE" plusOnClick={() => setCount(spot, 1, 1)} minusOnClick={() => setCount(spot, 1, -1)} value={counts[spot] ? counts[spot][1] : 0} onChange={(e) => {
                    var tempArr = counts.slice()
                    tempArr[spot][1] = Number(e.target.value)
                    setCounts(tempArr)
                }} />
                <CountButton title="FAIL" plusOnClick={() => setCount(spot, 0, 1)} minusOnClick={() => setCount(spot, 0, -1)} value={counts[spot] ? counts[spot][0] : 0} onChange={(e) => {
                    var tempArr = counts.slice()
                    tempArr[spot][0] = Number(e.target.value)
                    setCounts(tempArr)
                }} />
            </div>
        </Background>
    )
}
export default Index
const HeaderStyle = styled.div`
    position: relative;
    top: 0px;
    width: 100%;
    height: 35px;
    background-color: #ff5722;
    opacity: 0.8;
    z-index: 1;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.16);
    padding-top: 20px;
    .text{
        width: 100%;
        font-size: 30px;
        font-family: 'Bebas Neue', cursive;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.75;
        letter-spacing: 1.5px;
        text-align: center;
        color: #ffffff;
    }
    
`
const Background = styled.div`
    position: relative;
    display: block;
    width: 100vw;
    height: 100vh;
    font-family: 'Noto Sans KR';
    font-size: 30px;
    font-weight: 100;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    svg {
        max-width:1000px;
        position: relative;
        top: 0px; left: 50%;
        transform:translate(-50%,0%);
        width: 100vw;
        height: 40vh;
        defs{
            z-index:2;
        }
    }
    .spotname {
        position: relative;
        display: block;
        text-align: center;
        font-size:20px;
    }
    .countButtonsContainer {
        position: relative;
        width: calc(100% - 40px);
        height: 20%;
        display: flex;
        margin: 20px;
        margin-top: 30px;
        img{
            position:absolute;
            top: 100%;
            width: 24px;
            height:24px;
        }
    }
    .chartsContainer {
        position: relative;
        width: calc(100% - 40px);
        height: 100px;
        display: flex;
        margin: 20px;
    }
`

