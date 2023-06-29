import {styled} from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 20vw;
  gap: 5px;
`
export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.right == true ? 'row-reverse' :'row' };
  justify-content: space-around;
  gap: 10px;
`
export const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

`
export const BettingTitle = styled.div`
  font-weight: 800;
  font-size: 20px;
  color: ${props => props.right == true ? '#E31295' :'blue' };
  text-align: ${props => props.right == true ? 'left' :'right' };;
`

export const PercentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;
  justify-content: center;
  color: ${props => props.right == true ? '#E31295' :'blue' };
`
export const Stat = styled.div`
display: flex;
flex-direction: ${props => props.right == true ? 'row-reverse' :'row' };
gap: 4px;
  
`

export const StatName = styled.span`
  color: ${props => props.right == true ? '#E31295' :'blue' };
  font-weight: 800;
  font-size: 18px;
`

export const Graph = styled.div`


`
export const Percent = styled.div`
  font-size: 45px;
  font-weight: 900;
  text-align: center;
`






