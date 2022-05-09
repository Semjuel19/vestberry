import {STableWrapper, STableRow} from '@client/components/styles/Table.styled'
import ICompanies from './interfaces/ICompanies'

export default function Table({companies}: ICompanies) {
  return (
    <STableWrapper>
      <table>
        <thead>
          <tr>
            <th>company name</th>
            <th>stage</th>
            <th>sector</th>
            <th>investment size</th>
          </tr>
        </thead>
        <tbody>
          {
                    companies?.map((company, i) => (
                      <STableRow key={company.id} even={Boolean(i % 2)}>
                        <td>{company.name}</td>
                        <td>{company.stage}</td>
                        <td>{company.sector}</td>
                        <td>{company.investmentSize}</td>
                      </STableRow>
                    )) ?? null
                }
        </tbody>
      </table>
    </STableWrapper>
  )
}
