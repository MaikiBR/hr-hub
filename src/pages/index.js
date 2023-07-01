import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import logo from "../assets/images/logos/Logo RH HR Hub by Super Cream-03.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProSidebar from "@/components/ProSidebar";
import LoadingPage from "@/components/LoadingPage";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <LoadingPage />;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div className={styles.wrapper}>
        <Head>
          <title>HR Hub</title>
          <meta name="description" content="HR Hub by MaikiBR" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ProSidebar />
        <main className={styles.mainDashboard}>
          <span className={styles.textDashboard}>Bienvenido {user.name}</span>
          <br />
          <a className={styles.logoutLink} href="/api/auth/logout">
            Logout
          </a>
        </main>
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <Image src={logo} alt="HR Hub Logo" width={1003} height={288} />
      <div>
        <a className={styles.button} href="/api/auth/login">
          <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
        </a>
      </div>
    </main>
  );
}