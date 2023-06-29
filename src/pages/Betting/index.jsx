import React from 'react';
import * as S from "./style"
import BettingInfo from "../../components/BettingInfo";
import {realtimeDB} from "../../utils/firebase/init";

const Betting = () => {




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
                    <BettingInfo/>
                    <BettingInfo right={true}/>
                </S.BettingWrapper>
            </S.BettingContainer>
        </S.Container>
    );
};

export default Betting;