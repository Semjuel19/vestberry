import Sector from '@client/components/Sector'
import {SFlex} from '@client/components/styles/Flex.styled'
import {useState, useEffect, useMemo} from 'react'
import fintechIcon from '@assets/fintech.svg'
import insuretechIcon from '@assets/insuretech.svg'
import roboadvisoryIcon from '@assets/roboadvisory.svg'
import iotIcon from '@assets/iot.svg'
import ICompanies from './interfaces/ICompanies'

export default function SectorGroup({companies}: ICompanies) {
  const [sectorsCount, setSectorsCount] = useState([0, 0, 0, 0])

  const calculateSectors = useMemo(() => () => {
    const count = [0, 0, 0, 0]
    companies?.forEach(company => {
      switch (company.sector) {
        case 'Fintech':
          count[0] += 1
          break
        case 'Insuretech':
          count[1] += 1
          break
        case 'Roboadvisory':
          count[2] += 1
          break
        default:
          count[3] += 1
          break
      }
    })
    return count
  }, [companies])

  useEffect(() => {
    setSectorsCount(calculateSectors())
  }, [companies, calculateSectors])

  return (
    <SFlex>
      <Sector count={sectorsCount[0]} title="Fintech" src={fintechIcon} />
      <Sector count={sectorsCount[1]} title="Insuretech" src={insuretechIcon} />
      <Sector count={sectorsCount[2]} title="Roboadvisory" src={roboadvisoryIcon} />
      <Sector count={sectorsCount[3]} title="IOT" src={iotIcon} />
    </SFlex>
  )
}
