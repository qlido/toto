import React, {useEffect} from 'react';
import * as S from "./style"
import BettingInfo from "../../components/BettingInfo";
import {realtimeDB} from "../../utils/firebase/init";

const Betting = () => {

    const one = {
        n: 'ㄱㄱ',
        p: 100000,
        b: 2.75,
        d: 11,
        Per: 25
    }
    const two = {
        n: 'ㄴㄴ',
        p: 45000,
        b: 1.25,
        d: 25,
        Per: 75
    }

    return (
        <S.Container>
            <S.BettingHeader>
                예측
            </S.BettingHeader>
            <S.BettingContainer>
                <S.BettingTitle>
                    과연 어느 팀이 이길까요?
                    <S.BettingSmallTitle>
                        10:00 후에 베팅이 끝납니다
                    </S.BettingSmallTitle>
                </S.BettingTitle>
                <S.BettingWrapper>
                    <BettingInfo data={one}/>
                    <BettingInfo data={two} right={true}/>
                </S.BettingWrapper>
            </S.BettingContainer>
        </S.Container>
    );
};

export default Betting;