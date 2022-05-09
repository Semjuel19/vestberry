import 'styled-components'
import 'styled-react-modal'
import theme from '@client/theme'

type Theme = typeof theme;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
