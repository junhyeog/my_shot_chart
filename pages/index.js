import * as React from 'react';
import styled from 'styled-components';
import { CountButton, Piechart } from '../components'


const Index = () => {

    const [counts, setCounts] = React.useState([[0, 0], [0, 0], [0, 0]]);
    const [spot, setSpot] = React.useState(0);

    React.useEffect(() => {
        if (JSON.parse(localStorage.getItem('counts')))
            setCounts(JSON.parse(localStorage.getItem('counts')));
        console.log("pre-counts:", counts)
        if (JSON.parse(localStorage.getItem('spot')))
            setSpot(JSON.parse(localStorage.getItem('spot')));
        console.log("pre-spot:", spot)
    }, [])

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
            {/* 테스트를 위한 예시 */}
            {["orange", "blue", "red"].map((spotColor, spot) => {
                return (<div key={spot} style={{ width: "100px", height: "100px", backgroundColor: spotColor }} onClick={() => setSpot(spot)}></div>)
            })}
            <CountButton plusOnClick={() => setCount(spot, 1, 1)} minusOnClick={() => setCount(spot, 1, -1)} value={counts[spot][1]} onChange={(e) => {
                var tempArr = counts.slice()
                tempArr[spot][1] = Number(e.target.value)
                setCounts(tempArr)
            }} />
            <CountButton plusOnClick={() => setCount(spot, 0, 1)} minusOnClick={() => setCount(spot, 0, -1)} value={counts[spot][0]} onChange={(e) => {
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
`

