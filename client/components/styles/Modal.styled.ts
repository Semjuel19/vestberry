import styled from 'styled-components'

export const SModalWrapper = styled.div`
  justify-content: center;
  display: flex;
`

export const SModalHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  background-color: ${({theme}) => theme.colors.cardBg};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  & div {
    width: 90%;
    padding: 30px;
  }
  & img {
    width: 10%;
  }
  & h2 {
    font-size: 22px;
    margin: 0 0 0 0; 
  }
  & p {
    color: ${({theme}) => theme.colors.secondaryText};
    font-size: 13px;
    margin: 0 0 0 0;
  }
`

export const SModalCloseIcon = styled.img`
  height: 20px;
  width: 20px;
  margin-top: 20px;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    cursor: pointer;
  }
`
export const SModalBody = styled.div`
 padding: 30px;
  & div {
    margin-top: 20px;
  }
  & div:first-child {
    margin-top: 0;
  }
`
