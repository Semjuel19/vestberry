import styled, {css} from 'styled-components'

interface IInputWrapper {
    error?: boolean,
    addition?: string
}

export const SLabel = styled.label`
  margin-top: 20px;
`

export const SInputWrapper = styled.div<IInputWrapper>`
  & input {
    background-color: ${({theme}) => theme.colors.bg};
    border: 1px solid ${({theme}) => theme.colors.text};
    border-radius: 4px;
    font-size: 14px;
    line-height: 25px;
    width: 96%;
    margin-top: 7px;
    padding: 2% 2%;
    color: ${({theme}) => theme.colors.secondaryText};

    ${({error}) => error
            && css`
              border: 1px solid ${({theme}) => theme.colors.error};
            `}
  }

  ${({addition}) => addition
          && css`
            & input[type=number] {
              -moz-appearance: textfield;
            }

            & input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
            position: relative;
            &:after {
              position: absolute;
              right: 2%;
              top: 55%;
              content: '${addition}';
            }
          `}
  & select {
    background-color: ${({theme}) => theme.colors.bg};
    border: 1px solid ${({theme}) => theme.colors.text};
    border-radius: 4px;
    font-size: 14px;
    line-height: 25px;
    width: 100%;
    margin-top: 7px;
    padding: 15px 15px;
    content: 'EUR';
    color: ${({theme}) => theme.colors.secondaryText};

    ${({error}) => error
            && css`
              border: 1px solid ${({theme}) => theme.colors.error};
            `}
  }
`

export const SInlineErrorMessage = styled.span`
  color: ${({theme}) => theme.colors.error};
  padding: 7px 10px;
  margin-top: 5px;
  display: block;
`

export const SActionButton = styled.button`
  float: right;
  font-size: 14px;
  border: none;
  margin: 20px auto;
  padding: 10px 40px;
  border-radius: 50px;
  font-weight: 700;

  ${({type}) => (type === 'submit'
    ? css`
                    background-color: ${({theme}) => theme.colors.button};
                    color: ${({theme}) => theme.colors.text};
                  `
    : css`
                    background-color: ${({theme}) => theme.colors.bg};
                    color: ${({theme}) => theme.colors.secondaryText};
                  `)
}
  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
  }
`
