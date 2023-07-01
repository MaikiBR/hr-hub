import React, { Suspense } from "react";
import "@/styles/globals.css";
import { UserProvider, useUser } from "@auth0/nextjs-auth0/client";
import { ProSidebarProvider } from "react-pro-sidebar";

export default function App({ Component, pageProps }) {
  // Get the user object from pageProps
  const { user } = pageProps;

  return (
    <UserProvider user={user}>
      <ProSidebarProvider>
        <Component {...pageProps} />
      </ProSidebarProvider>
    </UserProvider>
  );
}
