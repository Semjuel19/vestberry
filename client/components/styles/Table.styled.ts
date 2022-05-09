import styled from 'styled-components'

interface ITableRow {
    even: boolean
}

export const STableWrapper = styled.div`
  & table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
  }
  
  & tr {
    height: 60px;
  }
  
  & td {
    text-align: right;
  }

  & td:first-child {
    padding-left: 10px;
    text-align: left;
  }
  
  & th {
    background-color: ${({theme}) => theme.colors.cardBg};
    text-align: right;
    padding-left: 10px;
    font-size: 10px;
  }

  & th:first-child {
    text-align: left;
    padding-left: 10px;
  }

  & th:last-child  {
    width: 45%;
    padding-right: 10px;
  }
  
  & td:last-child  {
    width: 45%;
    padding-right: 10px;
  }
  
  & tr:last-child td:first-child  {
    border-bottom-left-radius: 15px;
  }

  & tr:last-child td:last-child  {
    border-bottom-right-radius: 15px;
  }

  & tr:first-child th:first-child  {
    border-top-left-radius: 15px;
  }

  & tr:first-child th:last-child  {
    border-top-right-radius: 15px;
  }
`

export const STableRow = styled.tr<ITableRow>`
  & td {
    background-color: ${({even, theme}) => (even ? theme.colors.cardBg : theme.colors.bg)};
  }
`
