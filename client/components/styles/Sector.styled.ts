import styled from 'styled-components'

export const SSectorWrapper = styled.div`
  width: 178px;
  height: 78px;
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.colors.cardBg};
  border-radius: 10px;
  padding: 26px 30px;

  & > div {
    flex: 1;
  }
  
  & img {
    margin-left: 25px;
  }

  & h1 {
    font-size: 38px;
    margin: 0;
  }

  & h4 {
    font-size: 14px;
    margin: 0;
    color: ${({theme}) => theme.colors.secondaryText};
  }

  &:hover {
    cursor: pointer;
    background-color: rgb(39, 40, 45);
  }
`

export const SSectorIcon = styled.img`
  width: 55px;
  height: 55px;
`
