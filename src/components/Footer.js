import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function Face() {
  return (
    <Link href="https://www.facebook.com/Labenu-388131481831991">
      <FacebookIcon />
    </Link>
  );
}


function Insta() {
  return (
    <Link href="https://www.instagram.com/labenu_/">
      <InstagramIcon />
    </Link>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {"Copyright © "}
      <Link color="white" href="https://www.labenu.com.br/">
        Nosso site
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",

  },

  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: "#33658A",
    color: "white"
  }
}));

export default function FooterLargo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography>
          Future Car Going Beyond. 
          </Typography>
          <Typography>
          Telefone: 11 4002-8922 
          </Typography>
          <Typography>
          R. Pais Leme, 215    
          </Typography>
          <Typography>
          faleconosco@futurecar.com 
          </Typography>
          <Face />
          <Insta />
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
