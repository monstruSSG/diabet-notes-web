import { createMuiTheme } from '@material-ui/core/styles'

const primaryColor = '#303f9f'
const primaryColorHover = '#001970'
const secondaryColor = '#001970'
const whiteColor = '#ffffff'
const mainTextColor = '#ffffff'
const grey0 = '#f5f5f5'
const grey1 = '#bdbdbd'
const success = '#00600f'
const error = '#f4511e'
const warning = '#fdd835'

const primaryButtonColor = '#303f9f'
const secondarButtonColor = '#001970'

const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    success: {
      main: success
    },
    error: {
      main: error
    },
    warning: {
      main: warning
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,

  },
  overrides: {
    MuiButton: {
      text: {
        color: whiteColor
      },
      root: {
        minWidth: 30,
        backgroundColor: 'red',
      }
    },
  }
})
export default MuiTheme