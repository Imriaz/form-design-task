import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  footer: {
    backgroundColor: "skyblue",
    padding: "10px",
  },
});

const Footer = () => {
  const classes = useStyles();

    return (
      <div className={classes.footer}>
        <p>&copy; Md. Imriaz Uddin</p>
      </div>
    );
};

export default Footer;