import React from "react";
import styles from "@/styles/Redirect.module.css"
import { CircularProgress, Typography } from "@mui/material";

function RedirectLogin(props) {
  setInterval(() => {
    window.location.replace("/api/auth/logout");
  }, 5000);

  return (
    <div className={styles.redirectContainer}>
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.messageContainer}>
        <Typography>{props.mensaje}</Typography>
        <Typography>{props.mensajeRedirect}</Typography>
      </div>
    </div>
  );
}

export default RedirectLogin;
