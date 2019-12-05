import * as React from 'react';
import styled from 'styled-components';
import { CountButton } from '../components'

const Index = () => {

    const [counts, setCounts] = React.useState([0, 0]);
    React.useEffect(() => {
        console.log(counts)
    }, [counts])
    const plusMade = () => {
        setCounts([counts[0] + 1, counts[1]])
    }
    const minusMade = (e) => {
        if (e.target.value === 0) {
            console.log('0 미만은 입력할 수 없습니다.')
            return;
        }
        setCounts([counts[0] - 1, counts[1]])
    }
    const plusMiss = () => {
        setCounts([counts[0], counts[1] + 1])
    }
    const minusMiss = (e) => {
        console.log(e.target.value)
        if (e.target.value === 0) {
            console.log('0 미만은 입력할 수 없습니다.')
            return;
        }
        setCounts([counts[0], counts[1] - 1])
    }

    return (
        <Background>
            <CountButton plusOnClick={plusMade} minusOnClick={(e) => minusMade(e)} value={counts[0]} onChange={(e) => {
                setCounts([Number(e.target.value), counts[1]])
            }} />
            <CountButton plusOnClick={plusMiss} minusOnClick={(e) => minusMiss(e)} value={counts[1]} onChange={(e) => {
                setCounts([counts[0], Number(e.target.value)])
            }} />
        </Background>
    )
}
export default Index

const Background = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
`
