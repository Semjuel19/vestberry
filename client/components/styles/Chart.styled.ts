import styled from 'styled-components'

interface ILegendDot {
    color: string
}

export const SDoughnutChart = styled.div`
  & canvas {
    width: 100%;
  }
  padding: 50px;
`

export const SChartLegendWrapper = styled.div`
  width: 400px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`

export const SChartLegendElement = styled.div`
  float: left;
  width: 50%;
`

export const SChartDrawingWrapper = styled.div`
  width: 488px;
  position: relative;
`

export const SChartText = styled.div`
  width: 100%; 
  height: 40px; 
  position: absolute; 
  top: 50%; 
  left: 0; 
  margin-top: -20px; 
  line-height:12px; 
  text-align: center; 
  z-index: 0;
  
  & h1 {
    margin: 0;
  }
  
  & h4 {
    margin: 0;
    color: ${({theme}) => theme.colors.secondaryText};
  }
`

export const SChartGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.colors.cardBg};
  border-radius: 10px;
`

export const SLegendDot = styled.span<ILegendDot>`
  display: inline-block;
  border-radius: 50%;
  background-color: ${({color}) => color};
  height: 14px;
  width: 14px;
  margin-top: 5px;
  margin-right: 5px;
`
