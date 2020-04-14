import { createMuiTheme } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: "#fff"
    },
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#0000FF'
    }
  }
});