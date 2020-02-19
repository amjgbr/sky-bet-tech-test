import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    grid: {
      flexGrow: 1,
    },
    row: {
      '&:hover': {
        background: "#efefef",
      },
    },
    rowBackground: {
      backgroundColor: '#cacaca',
      '&:hover': {
        background: "#efefef",
      },
    },
    tableRowClick: {
        cursor: 'pointer',
        backgroundColor: '#c6ff00'
    },  
    paper: {
        paddingBottom: '10px',
    },
    title: {
      margin: theme.spacing(4, 0, 2),
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    grey: {
      color: '#cacaca',
    },
    red: {
        color: theme.palette.error.main,
    },
    green: {
        color: theme.palette.success.main,
    },
    blue: {
        color: theme.palette.info.main,
    },
    yellow: {
        color: theme.palette.warning.main,
    },
    lightBlue: {
        color: theme.palette.primary.main,
    },
    pink: {
        color: theme.palette.secondary.main,
    },
    hotGreen: {
        color: '#c6ff00',
    },
    background: {
      backgroundColor: 'black',
    },
    marginAuto: {
        margin: 'auto'
    },
    textCenter: {
        textAlign: 'center',
    },
    suspendedMarket: {
        backgroundColor: theme.palette.error.main,
    }
  }));