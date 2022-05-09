import {
  Formik, Form, ErrorMessage, Field,
} from 'formik'
import * as Yup from 'yup'
import {ADD_COMPANY, GET_COMPANIES} from '@client/graphql'
import {useMutation} from '@apollo/client/react/hooks'
import IAddFormActions from '@client/components/interfaces/IAddFormActions'
import {
  SLabel,
  SInlineErrorMessage,
  SActionButton,
  SInputWrapper,
} from './styles/AddForm.styled'

const validationSchema = Yup.object().shape({
  companyName: Yup.string()
    .min(2, 'Company name is too short.')
    .max(20, 'Get yourself shorter company name.')
    .required('Please provide company name.'),
  investmentSize: Yup.number()
    .max(2147483647, 'You are too rich for this demo app.')
    .min(1, 'You have to have at least some money to invest.')
    .required('Please enter valid investment size.'),
  stage: Yup.string()
    .required('Choose stage from list'),
  sector: Yup.string()
    .required('Choose sector from list'),
})

export default function AddForm({onClose}: IAddFormActions) {
  const [addCompany] = useMutation(ADD_COMPANY, {
    refetchQueries: [
      GET_COMPANIES,
      'getCompanies',
    ],
  })

  return (
    <Formik
      initialValues={{
        companyName: '',
        stage: '',
        sector: '',
        investmentSize: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => addCompany({
        variables: {
          name: values.companyName,
          stage: values.stage,
          sector: values.sector,
          investmentSize: values.investmentSize,
        },
      }).then(() => onClose())}
    >
      {({
        errors,
        touched,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form name="company" method="post" onSubmit={handleSubmit}>
          <SInputWrapper error={Boolean(touched.companyName && errors.companyName)}>
            <SLabel htmlFor="companyName">
              Company name
              <Field
                id="companyName"
                type="text"
                name="companyName"
                placeholder="Company name"
              />
            </SLabel>
          </SInputWrapper>
          <ErrorMessage name="companyName">
            {msg => (
              <SInlineErrorMessage>{msg}</SInlineErrorMessage>
            )}
          </ErrorMessage>
          <SInputWrapper error={Boolean(touched.stage && errors.stage)}>
            <SLabel htmlFor="stage">
              Stage
              <Field
                as="select"
                name="stage"
                id="stage"
              >
                <option value="">Select stage from list</option>
                <option value="Idea">Idea</option>
                <option value="Seed">Seed</option>
                <option value="Prototype">Prototype</option>
                <option value="Series A">Series A</option>
                <option value="Series B">Series B</option>
                <option value="Series C">Series C</option>
              </Field>
            </SLabel>
            <ErrorMessage name="stage">
              {msg => (
                <SInlineErrorMessage>{msg}</SInlineErrorMessage>
              )}
            </ErrorMessage>
          </SInputWrapper>
          <SInputWrapper error={Boolean(touched.sector && errors.sector)}>
            <SLabel htmlFor="sector">
              Sector
              <Field
                as="select"
                name="sector"
                id="sector"
              >
                <option value="">Select sector from list</option>
                <option value="Fintech">Fintech</option>
                <option value="Insuretech">Insuretech</option>
                <option value="Roboadvisory">Roboadvisory</option>
                <option value="IOT">IOT</option>
              </Field>
            </SLabel>
            <ErrorMessage name="sector">
              {msg => (
                <SInlineErrorMessage>{msg}</SInlineErrorMessage>
              )}
            </ErrorMessage>
          </SInputWrapper>
          <SInputWrapper error={Boolean(touched.investmentSize && errors.investmentSize)} addition="EUR">
            <SLabel htmlFor="investmentSize">
              Investment size
              <Field
                id="investmentSize"
                type="number"
                name="investmentSize"
                placeholder="Enter amount"
              />
            </SLabel>
          </SInputWrapper>
          <ErrorMessage name="investmentSize">
            {msg => (
              <SInlineErrorMessage>{msg}</SInlineErrorMessage>
            )}
          </ErrorMessage>
          <SActionButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Add company'}
          </SActionButton>
          <SActionButton onClick={onClose}>
            Cancel
          </SActionButton>
        </Form>

      )}

    </Formik>
  )
}
