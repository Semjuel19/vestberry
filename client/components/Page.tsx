import {useQuery} from '@apollo/client'
import styled from 'styled-components'
import {GET_COMPANIES, CompanyType} from '@client/graphql'
import SectorGroup from '@client/components/SectorGroup'
import {STitleText} from '@client/components/styles/TitleText.styled'
import Chart from '@client/components/Chart'
import Table from '@client/components/Table'
import FancyModalButton from '@client/components/Modal'
import {SContainer} from './styles/Container.styled'

const LoadingDiv = styled.div`
  text-align: center;
`

export function Page() {
  const {loading, error, data} = useQuery<{ companies: CompanyType[] }>(GET_COMPANIES)

  if (loading) {
    return <LoadingDiv>Loading data...</LoadingDiv>
  }

  if (error) {
    return (
      <span>
        <pre>
          {JSON.stringify(error, null, 2)}
        </pre>
      </span>
    )
  }

  const companies = data?.companies

  return (
    <SContainer>
      <STitleText>
        Companies by sectors
      </STitleText>
      <SectorGroup companies={companies} />
      <STitleText>
        Companies by investment size
      </STitleText>
      <Chart companies={companies} />
      <STitleText>
        Companies overview
      </STitleText>
      <Table companies={companies} />

      <FancyModalButton />
    </SContainer>
  )
}

export default Page
