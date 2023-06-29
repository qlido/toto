import React from 'react';
import * as S from "./style"
import * as A from "../BettingInput/style"
import {realtimeDB} from "../../utils/firebase/init";

const BettingInfo = (props) => {

    const isright = props.right;
    return (
        <S.Container>
            <S.BettingTitle right={isright}> dd </S.BettingTitle>
            <S.InfoContainer right={isright}>
                <S.StatContainer>
                    <S.Stat right={isright}><S.StatName right={isright}>판돈</S.StatName>  10000</S.Stat>
                    <S.Stat right={isright}><S.StatName right={isright}>배당</S.StatName>  10000</S.Stat>
                    <S.Stat right={isright}><S.StatName right={isright}>동료</S.StatName>  10000</S.Stat>
                    <S.Stat right={isright}><S.StatName right={isright}>부자</S.StatName>  10000</S.Stat>
                </S.StatContainer>
                <S.PercentContainer right={isright}>
                    <S.Percent >10%</S.Percent>
                    <S.Graph/>
                </S.PercentContainer>
            </S.InfoContainer>
            <A.Container>
            <A.Input right={isright} type={"number"}></A.Input>
            <A.Button right={isright}>Vote</A.Button>
            </A.Container>
        </S.Container>
    );
};

export default BettingInfo;