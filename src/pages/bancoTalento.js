import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import styles from "@/styles/Banco.module.css";
import RedirectLogin from "@/components/RedirectLogin";
import ProSidebar from "@/components/ProSidebar";
import Head from "next/head";
import Link from 'next/link';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

function BancoTalento() {
  const { user, error, isLoading } = useUser();
  console.log(user);


//   const userRoles = user?.[`${process.env.NEXT_PUBLIC_AUTH0_NAMESPACE}`] ?? [];

  if (isLoading) return <div>Loading...</div>;
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
            <title>Banco de Talento | HR Hub</title>
            <meta name="description" content="HR Hub by MaikiBR" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
            <ProSidebar />
            <main className={styles.mainBanco}>
                <Box className={styles.cardsContainer}>
                  <Card 
                    sx={{ 
                      width: "30%",
                      boxShadow: 20,
                      backgroundColor: "#1D2A4C",
                    }}
                  > 
                    <Link href="/institucionales" passHref legacyBehavior>
                      <a style={{ textDecoration: 'none', color: "whitesmoke" }}>
                        <CardActionArea sx={{height: "100%" }}>
                          <CardMedia
                            component="img"
                            height="85%"
                            image="https://firebasestorage.googleapis.com/v0/b/hr-hub-66f11.appspot.com/o/ins.jpg?alt=media&token=a6d7506a-70f7-443b-8fe3-4d856a56c299"
                            alt="Institucionales"
                          />
                          <CardContent>
                            <Typography>Institucionales</Typography>
                          </CardContent>
                        </CardActionArea>
                      </a>
                    </Link>
                  </Card>

                  <Card 
                    sx={{ 
                      width: "30%",
                      boxShadow: 20,
                      backgroundColor: "#1D2A4C",
                    }}
                  > 
                    <Link href="/procesos" passHref legacyBehavior>
                      <a style={{ textDecoration: 'none', color: "whitesmoke" }}>
                        <CardActionArea sx={{height: "100%" }}>
                          <CardMedia
                            component="img"
                            height="85%"
                            image="https://firebasestorage.googleapis.com/v0/b/hr-hub-66f11.appspot.com/o/process.jpg?alt=media&token=1313d537-91f6-4fbe-af87-268a7c432f90"
                            alt="Procesos"
                          />
                          <CardContent>
                            <Typography>Procesos</Typography>
                          </CardContent>
                        </CardActionArea>
                      </a>
                    </Link>
                  </Card>

                  <Card 
                    sx={{ 
                      width: "30%",
                      boxShadow: 20,
                      backgroundColor: "#1D2A4C",
                    }}
                  > 
                    <Link href="/seguridad" passHref legacyBehavior>
                      <a style={{ textDecoration: 'none', color: "whitesmoke" }}>
                        <CardActionArea sx={{height: "100%" }}>
                          <CardMedia
                            component="img"
                            height="85%"
                            image="https://firebasestorage.googleapis.com/v0/b/hr-hub-66f11.appspot.com/o/sec.jpg?alt=media&token=edb091ef-78cf-4a9f-adbd-3ed2eebd685b"
                            alt="Seguridad"
                          />
                          <CardContent>
                            <Typography>Seguridad</Typography>
                          </CardContent>
                        </CardActionArea>
                      </a>
                    </Link>
                  </Card>
                </Box>
            </main>
        </div>
      )
    );
  }
}

export default BancoTalento;

export const getServerSideProps = withPageAuthRequired();
