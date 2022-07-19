import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { CounterType } from '@/types/Counter';
import { useSetRecoilState } from 'recoil';
import { gameStartQuery, playersQuery } from '@/store';
import useGame from '@/hooks/useGame';

const StyledPlayerCounter = styled.div``;

const PlayerCounter = () => {
    const [userCnt, setUserCnt] = useState(3);
    const setGameState = useSetRecoilState(gameStartQuery);
    const setPlayers = useSetRecoilState(playersQuery);
    const getPlayers = useGame(userCnt);

    const countButtonHandler = useCallback(
        (type: CounterType) => {
            if (type === '+' && userCnt < 6) {
                setUserCnt(userCnt + 1);
            } else if (type === '-' && userCnt > 3) {
                setUserCnt(userCnt - 1);
            }
        },
        [userCnt],
    );

    const onClickGameStart = useCallback(async () => {
        setGameState(true);
        setPlayers(getPlayers() || []);
    }, [getPlayers, setGameState, setPlayers]);

    return (
        <StyledPlayerCounter>
            <p>게임에 참가할 인원을 정해주세요. (3~6명)</p>
            <button onClick={() => countButtonHandler('-')}>-</button>
            <span>{userCnt}</span>
            <button onClick={() => countButtonHandler('+')}>+</button>
            <button onClick={onClickGameStart}>게임 시작!</button>
        </StyledPlayerCounter>
    );
};

export default PlayerCounter;
