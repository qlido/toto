import React from 'react';
import * as S from "./style"
import * as A from "../BettingInput/style"
import {realtimeDB} from "../../utils/firebase/init";

const BettingInfo = (props) => {

    const isright = props.right;
    props = props.data
    console.log(props)
    return (
        <S.Container>
            <S.BettingTitle right={isright}> {props.n} </S.BettingTitle>
            <S.InfoContainer right={isright}>
                <S.StatContainer>
                    <S.Stat right={isright}><S.StatName right={isright}>판돈</S.StatName> {props.p}</S.Stat>
                    <S.Stat right={isright}><S.StatName right={isright}>배당</S.StatName> {props.b}</S.Stat>
                    <S.Stat right={isright}><S.StatName right={isright}>동료</S.StatName>  {props.d}</S.Stat>
                    <S.Stat right={isright}><S.StatName right={isright}>부자</S.StatName> 250000</S.Stat>
                </S.StatContainer>
                <S.PercentContainer right={isright}>
                    <S.Percent >{props.Per}%</S.Percent>
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