import {Doughnut} from 'react-chartjs-2'
import {
  useState, useCallback, useEffect, useMemo,
} from 'react'
import generateColors from '@client/utils/colorGen'
import ICompanies from './interfaces/ICompanies'
import {SFlex} from './styles/Flex.styled'
import {
  SChartGroupWrapper,
  SChartLegendWrapper,
  SChartLegendElement,
  SChartText,
  SChartDrawingWrapper,
  SDoughnutChart,
  SLegendDot,
} from './styles/Chart.styled'

interface IChartData {
    labels: string[],
    values: number[]
}

export default function Chart({companies}: ICompanies) {
  const [legend, setLegend] = useState()
  const colors = generateColors(companies ? companies.length : 0)
  const [chartData, setChartData] = useState<IChartData>()

  const generateDataset = useMemo(() => () => {
    const labels: string[] = []
    const values: number[] = []
    companies?.forEach(company => {
      labels.push(company.name)
      values.push(company.investmentSize)
    })
    return {labels, values}
  }, [companies])

  useEffect(() => {
    setChartData(generateDataset())
  }, [companies, generateDataset])

  const onRefChange = useCallback(node => {
    if (node !== null) {
      setLegend(node.chartInstance?.generateLegend())
    }
    // lint hadze error na toto dep, ale bez neho sa nerenderuje spravne legenda pri grafe ...
  }, [chartData])

  const chart = {
    labels: chartData?.labels,
    datasets: [
      {
        label: 'Companies',
        data: chartData?.values,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  }

  const options = {
    cutoutPercentage: 75,
    maintainAspectRatio: true,
    layout: {
      padding: {
        bottom: 5,
      },
    },
    tooltips: {
      enabled: true,
      callbacks: {
        label(tooltipItems: any, data: any) {
          return data.datasets[0].data[tooltipItems.index]
        },
      },
    },
    legend: {
      display: false,
    },
    legendCallback: (chartEl: any) => {
      const legendSet = chartEl.data.datasets[0]
      return legendSet.data.map((set: any, i: any) => {
        const datapoint = chartEl.data.labels[i]
        if (datapoint) {
          return (
            <SChartLegendElement
              key={datapoint}
            >
              <SLegendDot color={legendSet.backgroundColor[i]} />
              <span>
                {chartEl.data.labels[i]}
              </span>
            </SChartLegendElement>
          )
        }
        return ''
      })
    },
  }

  return (
    <SChartGroupWrapper>
      <SFlex>
        <SChartDrawingWrapper>
          <SChartText>
            <h1>
              {companies?.length}
            </h1>
            <br />
            <h4>
              Companies
            </h4>
          </SChartText>
          <SDoughnutChart>
            <Doughnut data={chart} options={options} ref={onRefChange} />
          </SDoughnutChart>
        </SChartDrawingWrapper>
        <SChartLegendWrapper>
          {legend}
        </SChartLegendWrapper>
      </SFlex>
    </SChartGroupWrapper>
  )
}
