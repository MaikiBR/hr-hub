import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import styles from "@/styles/Home.module.css";
import RedirectLogin from "@/components/RedirectLogin";

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
        <div>
          Banco de Talento
        </div>
      )
    );
  }
}

export default BancoTalento;

export const getServerSideProps = withPageAuthRequired();
