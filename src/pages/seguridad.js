import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import styles from "@/styles/Banco.module.css";
import RedirectLogin from "@/components/RedirectLogin";
import ProSidebar from "@/components/ProSidebar";
import Head from "next/head";
import { videos } from "@/data/sec_videos_data";
import { Grid, Paper } from "@mui/material";
import LoadingPage from "@/components/LoadingPage";

function Seguridad() {
  const { user, error, isLoading } = useUser();
  console.log(user);

  if (isLoading) return <LoadingPage />;
  if (error) return <div>{error.message}</div>;

  if (user && !user.email_verified) {
    return (
      <div>
        <RedirectLogin
          mensaje="Por favor verifica tu email antes de iniciar sesión. Redireccionandote al inicio en 5 segundos..."
        />
      </div>
    );
  }

  if (user) {
    return (
      user && (
        <div className={styles.wrapper}>
          <Head>
            <title>Seguridad - Banco de Talento | HR Hub</title>
            <meta name="description" content="HR Hub by MaikiBR" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
            <ProSidebar />
            <main className={styles.mainProcesos}>
                <Grid container spacing={2} justifyContent="center">
                    {videos.map((video, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={3}>
                            <Paper
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                }}
                            >
                              <video
                                style={{width: '100%'}}
                                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                                poster={video.thumbnail}
                                controlsList="nodownload"
                              >
                                <source src={video.source} type="video/mp4"/>
                              </video>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </main>
        </div>
      )
    );
  };

  return (
    <div>
        <RedirectLogin
          mensaje="Por favor inicia sesión."
          mensajeRedirect="Redireccionandote al inicio en 5 segundos..."
        />
    </div>
  );
}

export default Seguridad;

// export const getServerSideProps = withPageAuthRequired();
