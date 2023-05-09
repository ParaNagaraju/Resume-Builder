import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginBottom: '2rem',
  },
  school: {
    fontWeight: 'bold',
  },
  degree: {
    fontStyle: 'italic',
  },
});

function Education(props) {
    const classes = useStyles();

  return (
    <div>
    <section className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Education
      </Typography>
      {props.education.map((edu, index) => (
        <div key={index}>
          <Typography className={classes.school}>{edu.school}</Typography>
          <Typography className={classes.degree}>{edu.degree}</Typography>
          <Typography>{edu.graduationYear}</Typography>
        </div>
      ))}
    </section>
    </div>
  );
}

export default Education;