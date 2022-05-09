import styled from 'styled-components'

export const SButton = styled.button`
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  margin: 20px auto;
  padding: 10px 40px;
  background-color: ${({theme}) => theme.colors.button};
  color: ${({theme}) => theme.colors.text};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`
