import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      backgroundColor: '#f5f5f5',
      padding: '2rem',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    name: {
      fontSize: '3rem',
      margin: 0,
    },
    contact: {
      fontSize: '1.2rem',
      margin: 0,
    },
  });
  
const Header=(props)=> {

    const classes = useStyles();
    return (
    <Header className={classes.root}>
      <h1 className={classes.name}>{props.name}</h1>
      <p className={classes.contact}>{props.email}</p>
      <p className={classes.contact}>{props.phone}</p>
    </Header>
  );
}

export default Header;