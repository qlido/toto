import { styled } from "styled-components"

export const Container = styled.div`
  margin: 20px;
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
    `

export const Button  = styled.button`
  color: white;
  background-color: ${props => props.right == true ? '#E31295' :'blue' };
  height: 35px;
  width: 60px;
  padding: 5px;
  border-radius: 0 3px 3px 0;
  border: none;
`

export const Input = styled.input`
  height: 35px;
  width: 100px;
  border: none;
  background-color: #E6E6E6;
  padding: 0;
`